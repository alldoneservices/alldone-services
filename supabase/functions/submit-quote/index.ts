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

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 requests
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // Per hour

function isRateLimited(clientIP: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(clientIP);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  record.count++;
  return false;
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Phone validation (10-15 digits, allowing common separators)
function isValidPhone(phone: string): boolean {
  const digitsOnly = phone.replace(/[\s\-\(\)\+\.]/g, '');
  return digitsOnly.length >= 10 && digitsOnly.length <= 15 && /^\d+$/.test(digitsOnly);
}

// Name validation
function isValidName(name: string): boolean {
  return name.length >= 2 && name.length <= 100;
}

// Message validation
function isValidMessage(message: string | undefined): boolean {
  if (!message) return true;
  return message.length <= 2000;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { name, email, phone, service, propertyType, message }: QuoteRequest = await req.json();

    console.log("Received quote request:", { name: name?.substring(0, 20), email: email?.substring(0, 20), service, propertyType });

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

    // Validate input formats
    if (!isValidName(name)) {
      return new Response(
        JSON.stringify({ error: "Invalid name format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!isValidPhone(phone)) {
      return new Response(
        JSON.stringify({ error: "Invalid phone number format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!isValidMessage(message)) {
      return new Response(
        JSON.stringify({ error: "Message is too long" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate service and property type against allowed values
    const allowedServices = ["pressure-washing", "handyman", "painting"];
    const allowedPropertyTypes = ["commercial", "residential", "strata"];

    if (!allowedServices.includes(service)) {
      return new Response(
        JSON.stringify({ error: "Invalid service type" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!allowedPropertyTypes.includes(propertyType)) {
      return new Response(
        JSON.stringify({ error: "Invalid property type" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all user inputs for HTML output
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = message ? escapeHtml(message) : '';

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

    // Send notification email to business (using sanitized values)
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
                <div class="value">${safeName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${safeEmail}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${safePhone}</div>
              </div>
              <div class="field">
                <div class="label">Service Requested:</div>
                <div class="value">${serviceName}</div>
              </div>
              <div class="field">
                <div class="label">Property Type:</div>
                <div class="value">${propertyName}</div>
              </div>
              ${safeMessage ? `
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${safeMessage}</div>
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

    // Get service display names for both languages
    const serviceNamesPt: Record<string, string> = {
      "pressure-washing": "Lavagem de Alta Pressão",
      "handyman": "Serviços Gerais",
      "painting": "Serviços de Pintura",
    };
    const serviceNamePt = serviceNamesPt[service] || service;

    // Get property type display names for both languages
    const propertyNamesPt: Record<string, string> = {
      "commercial": "Comercial",
      "residential": "Residencial",
      "strata": "Condomínio",
    };
    const propertyNamePt = propertyNamesPt[propertyType] || propertyType;

    // Send confirmation email to customer (bilingual - English and Portuguese)
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
            .divider { border-top: 2px solid #ddd; margin: 30px 0; padding-top: 20px; }
            .section-title { color: #001F5B; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${safeName}!</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Obrigado, ${safeName}!</p>
            </div>
            <div class="content">
              <!-- English Version -->
              <div class="section-title">🇬🇧 English</div>
              <p>We have received your quote request for <strong>${serviceName}</strong> services.</p>
              
              <div class="highlight">
                <p style="margin: 0; font-size: 18px;">We'll get back to you within 24 hours!</p>
              </div>
              
              <p>Here's a summary of your request:</p>
              <ul>
                <li><strong>Service:</strong> ${serviceName}</li>
                <li><strong>Property Type:</strong> ${propertyName}</li>
                ${safeMessage ? `<li><strong>Details:</strong> ${safeMessage}</li>` : ""}
              </ul>
              
              <p>If you have any urgent questions, feel free to call us at <strong>604-900-7172</strong>.</p>
              
              <p>Best regards,<br>The All Done Services Team</p>

              <!-- Divider -->
              <div class="divider">
                <!-- Portuguese Version -->
                <div class="section-title">🇧🇷 Português</div>
                <p>Recebemos sua solicitação de orçamento para serviços de <strong>${serviceNamePt}</strong>.</p>
                
                <div class="highlight">
                  <p style="margin: 0; font-size: 18px;">Entraremos em contato em até 24 horas!</p>
                </div>
                
                <p>Aqui está um resumo do seu pedido:</p>
                <ul>
                  <li><strong>Serviço:</strong> ${serviceNamePt}</li>
                  <li><strong>Tipo de Propriedade:</strong> ${propertyNamePt}</li>
                  ${safeMessage ? `<li><strong>Detalhes:</strong> ${safeMessage}</li>` : ""}
                </ul>
                
                <p>Se você tiver alguma dúvida urgente, ligue para <strong>604-900-7172</strong>.</p>
                
                <p>Atenciosamente,<br>Equipe All Done Services</p>
              </div>
            </div>
            <div class="footer">
              <p>All Done Services - One Call, All Done!</p>
              <p>Uma Ligação, Tudo Resolvido!</p>
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
          from: "All Done Services <info@alldone-services.ca>",
          to: ["info@alldone-services.ca"],
          subject: `New Quote Request: ${serviceName} - ${safeName}`,
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
          from: "All Done Services <info@alldone-services.ca>",
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
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
