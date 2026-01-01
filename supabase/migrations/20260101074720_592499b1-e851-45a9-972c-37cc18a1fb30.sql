-- Drop the overly permissive SELECT policy that exposes all customer data
DROP POLICY IF EXISTS "Public can view their own quotes by email" ON public.quotes;

-- No public SELECT policy needed - quotes contain PII and should only be accessible via service_role
-- The edge function already uses SUPABASE_SERVICE_ROLE_KEY which bypasses RLS
-- If an admin dashboard is needed later, implement proper authentication with admin role checking