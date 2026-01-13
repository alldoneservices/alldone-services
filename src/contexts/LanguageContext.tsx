import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  // Navigation
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.pressureWashing': 'Pressure & Soft Washing',
  'nav.handyman': 'Handyman Services',
  'nav.painting': 'Painting Services',
  'nav.about': 'About Us',
  'nav.contact': 'Contact',
  'nav.getQuote': 'Get Free Quote',
  
  // Hero
  'hero.tagline': 'One Call, All Done!',
  'hero.title': 'Professional Property Care Services',
  'hero.subtitle': 'Commercial • Residential • Strata',
  'hero.description': 'From pressure washing to painting, we deliver exceptional property maintenance services across the Greater Vancouver Area. Trust the experts who care about your property as much as you do.',
  'hero.cta': 'Get Your Free Quote',
  'hero.callNow': 'Call Now',
  
  // Services
  'services.title': 'Our Services',
  'services.subtitle': 'Comprehensive property care solutions for every need',
  'services.pressure.title': 'Pressure & Soft Washing',
  'services.pressure.description': 'Professional cleaning for driveways, siding, decks, roofs, and more. We restore your property to like-new condition.',
  'services.handyman.title': 'Handyman Services',
  'services.handyman.description': 'From minor repairs to major renovations, our skilled team handles all your property maintenance needs.',
  'services.painting.title': 'Painting Services',
  'services.painting.description': 'Interior and exterior painting with premium materials and expert craftsmanship for lasting results.',
  'services.learnMore': 'Learn More',
  
  // Why Us
  'why.title': 'Why Choose All Done Services?',
  'why.experience': 'Years of Experience',
  'why.experienceDesc': 'Trusted expertise in property care across Greater Vancouver.',
  'why.quality': 'Quality Guaranteed',
  'why.qualityDesc': 'We stand behind our work with satisfaction guarantees.',
  'why.licensed': 'Licensed & Insured',
  'why.licensedDesc': 'Full coverage for your peace of mind.',
  'why.affordable': 'Competitive Pricing',
  'why.affordableDesc': 'Fair rates without compromising on quality.',
  
  // Quote Form
  'quote.title': 'Request a Free Quote',
  'quote.subtitle': 'Tell us about your project and we\'ll get back to you shortly',
  'quote.name': 'Full Name',
  'quote.email': 'Email Address',
  'quote.phone': 'Phone Number',
  'quote.service': 'Service Required',
  'quote.selectService': 'Select a service',
  'quote.propertyType': 'Property Type',
  'quote.selectProperty': 'Select property type',
  'quote.commercial': 'Commercial',
  'quote.residential': 'Residential',
  'quote.strata': 'Strata',
  'quote.message': 'Project Details',
  'quote.messagePlaceholder': 'Please describe your project, including any specific requirements...',
  'quote.submit': 'Submit Quote Request',
  'quote.submitting': 'Submitting...',
  'quote.success': 'Thank you! We\'ll contact you shortly.',
  'quote.error': 'Something went wrong. Please try again or call us directly.',
  
  // Footer
  'footer.description': 'Your trusted partner for professional property care services in Greater Vancouver. One call, all done!',
  'footer.quickLinks': 'Quick Links',
  'footer.services': 'Services',
  'footer.contact': 'Contact Us',
  'footer.hours': 'Business Hours',
  'footer.hoursText': 'Monday - Saturday: 7AM - 7PM',
  'footer.rights': 'All rights reserved.',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  
  // Service Pages
  'pressure.hero.title': 'Pressure & Soft Washing',
  'pressure.hero.subtitle': 'Restore Your Property\'s Beauty',
  'pressure.hero.description': 'Professional pressure and soft washing services that safely remove dirt, grime, mold, and stains from any surface.',
  'pressure.services.title': 'What We Clean',
  'pressure.services.driveways': 'Driveways & Walkways',
  'pressure.services.drivewaysDesc': 'Remove oil stains, tire marks, and years of built-up grime.',
  'pressure.services.siding': 'House Siding',
  'pressure.services.sidingDesc': 'Gentle soft washing to protect your siding while removing mold and mildew.',
  'pressure.services.decks': 'Decks & Patios',
  'pressure.services.decksDesc': 'Restore wood and composite decks to their original beauty.',
  'pressure.services.roofs': 'Roof Cleaning',
  'pressure.services.roofsDesc': 'Safe soft washing to remove moss, algae, and debris.',
  'pressure.services.fences': 'Fences',
  'pressure.services.fencesDesc': 'Revitalize wood, vinyl, and metal fencing.',
  'pressure.services.commercial': 'Commercial Properties',
  'pressure.services.commercialDesc': 'Parking lots, storefronts, and building exteriors.',
  
  'handyman.hero.title': 'Handyman Services',
  'handyman.hero.subtitle': 'No Job Too Big or Small',
  'handyman.hero.description': 'From quick fixes to complete renovations, our skilled technicians handle all your property maintenance needs.',
  'handyman.services.title': 'Our Handyman Services',
  'handyman.services.repairs': 'General Repairs',
  'handyman.services.repairsDesc': 'Door adjustments, drywall repairs, fixture installations, and more.',
  'handyman.services.carpentry': 'Carpentry',
  'handyman.services.carpentryDesc': 'Custom shelving, trim work, deck repairs, and wood restoration.',
  'handyman.services.plumbing': 'Basic Plumbing',
  'handyman.services.plumbingDesc': 'Faucet repairs, toilet fixes, and minor pipe work.',
  'handyman.services.electrical': 'Basic Electrical',
  'handyman.services.electricalDesc': 'Light fixtures, outlet installations, and switch replacements.',
  'handyman.services.assembly': 'Furniture Assembly',
  'handyman.services.assemblyDesc': 'Professional assembly of furniture and equipment.',
  'handyman.services.maintenance': 'Property Maintenance',
  'handyman.services.maintenanceDesc': 'Regular upkeep and preventive maintenance programs.',
  
  'painting.hero.title': 'Painting Services',
  'painting.hero.subtitle': 'Transform Your Space',
  'painting.hero.description': 'Professional interior and exterior painting with premium materials and expert craftsmanship.',
  'painting.services.title': 'Painting Solutions',
  'painting.services.interior': 'Interior Painting',
  'painting.services.interiorDesc': 'Walls, ceilings, trim, and accent walls with flawless finishes.',
  'painting.services.exterior': 'Exterior Painting',
  'painting.services.exteriorDesc': 'Weather-resistant coatings for lasting curb appeal.',
  'painting.services.cabinets': 'Cabinet Refinishing',
  'painting.services.cabinetsDesc': 'Transform your kitchen or bathroom without full replacement.',
  'painting.services.staining': 'Deck & Fence Staining',
  'painting.services.stainingDesc': 'Protect and beautify your outdoor wood surfaces.',
  'painting.services.commercial': 'Commercial Painting',
  'painting.services.commercialDesc': 'Offices, retail spaces, and multi-unit buildings.',
  'painting.services.specialty': 'Specialty Finishes',
  'painting.services.specialtyDesc': 'Faux finishes, textures, and decorative painting.',
  
  // CTA
  'cta.title': 'Ready to Transform Your Property?',
  'cta.subtitle': 'Get your free, no-obligation quote today',
  'cta.button': 'Get Started Now',
  
  // Common
  'common.phone': '604-900-7172',
  'common.email': 'info@alldone-services.ca',
  'common.address': 'Greater Vancouver Area, BC',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
