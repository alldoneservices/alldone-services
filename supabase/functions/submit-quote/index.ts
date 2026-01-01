import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { name, email, phone, service, propertyType, message }: QuoteRequest = await req.json();

    console.log("Received quote request:", { name, email, phone, service, propertyType });

    // Validate required fields
    if (!name || !email || !phone || !service || !propertyType) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Insert quote into database
    const { data: quote, error: dbError } = await supabase
      .from("quotes")
      .insert({
        name,
        email,
        phone,
        service,
        property_type: propertyType,
        message: message || "",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save quote" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Quote saved to database:", quote.id);

    // Get service display name
    const serviceNames: Record<string, string> = {
      "pressure-washing": "Pressure & Soft Washing",
      "handyman": "Handyman Services",
      "painting": "Painting Services",
    };
    const serviceName = serviceNames[service] || service;

    // Get property type display name
    const propertyNames: Record<string, string> = {
      "commercial": "Commercial",
      "residential": "Residential",
      "strata": "Strata",
    };
    const propertyName = propertyNames[propertyType] || propertyType;

    // Send notification email to business
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #001F5B; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #001F5B; }
            .value { margin-top: 5px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Quote Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Service Requested:</div>
                <div class="value">${serviceName}</div>
              </div>
              <div class="field">
                <div class="label">Property Type:</div>
                <div class="value">${propertyName}</div>
              </div>
              ${message ? `
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
              ` : ""}
            </div>
            <div class="footer">
              <p>All Done Services - One Call, All Done!</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send confirmation email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #001F5B; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .highlight { background: #00843D; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
            </div>
            <div class="content">
              <p>We have received your quote request for <strong>${serviceName}</strong> services.</p>
              
              <div class="highlight">
                <p style="margin: 0; font-size: 18px;">We'll get back to you within 24 hours!</p>
              </div>
              
              <p>Here's a summary of your request:</p>
              <ul>
                <li><strong>Service:</strong> ${serviceName}</li>
                <li><strong>Property Type:</strong> ${propertyName}</li>
                ${message ? `<li><strong>Details:</strong> ${message}</li>` : ""}
              </ul>
              
              <p>If you have any urgent questions, feel free to call us at <strong>604-900-7172</strong>.</p>
              
              <p>Best regards,<br>The All Done Services Team</p>
            </div>
            <div class="footer">
              <p>All Done Services - One Call, All Done!</p>
              <p>Greater Vancouver Area, BC | 604-900-7172</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send business notification email using Resend API
    try {
      const businessEmailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "All Done Services <onboarding@resend.dev>",
          to: ["info@alldone-services.ca"],
          subject: `New Quote Request: ${serviceName} - ${name}`,
          html: businessEmailHtml,
        }),
      });
      
      if (businessEmailResponse.ok) {
        console.log("Business notification email sent successfully");
      } else {
        const errorData = await businessEmailResponse.text();
        console.error("Failed to send business email:", errorData);
      }
    } catch (emailError) {
      console.error("Error sending business email:", emailError);
    }

    // Send customer confirmation email using Resend API
    try {
      const customerEmailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "All Done Services <onboarding@resend.dev>",
          to: [email],
          subject: "Thank you for your quote request - All Done Services",
          html: customerEmailHtml,
        }),
      });
      
      if (customerEmailResponse.ok) {
        console.log("Customer confirmation email sent successfully");
      } else {
        const errorData = await customerEmailResponse.text();
        console.error("Failed to send customer email:", errorData);
      }
    } catch (emailError) {
      console.error("Error sending customer email:", emailError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Quote submitted successfully",
        quoteId: quote.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error processing quote request:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
