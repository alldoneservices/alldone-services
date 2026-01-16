import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import PressureWashing from "./pages/services/PressureWashing";
import SoftWashing from "./pages/services/SoftWashing";
import GutterCleaning from "./pages/services/GutterCleaning";
import Handyman from "./pages/services/Handyman";
import Painting from "./pages/services/Painting";
import CommercialStrata from "./pages/services/CommercialStrata";
import GarbageCleaning from "./pages/services/GarbageCleaning";
import UnitTurnover from "./pages/services/UnitTurnover";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/pressure-washing" element={<PressureWashing />} />
              <Route path="/services/soft-washing" element={<SoftWashing />} />
              <Route path="/services/gutter-cleaning" element={<GutterCleaning />} />
              <Route path="/services/handyman" element={<Handyman />} />
              <Route path="/services/painting" element={<Painting />} />
              <Route path="/services/commercial-strata" element={<CommercialStrata />} />
              <Route path="/services/garbage-cleaning" element={<GarbageCleaning />} />
              <Route path="/services/unit-turnover" element={<UnitTurnover />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;