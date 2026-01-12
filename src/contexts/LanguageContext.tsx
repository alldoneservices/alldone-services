import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
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
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.pressureWashing': 'Lavagem de Alta Pressão',
    'nav.handyman': 'Serviços Gerais',
    'nav.painting': 'Pintura',
    'nav.about': 'Sobre Nós',
    'nav.contact': 'Contato',
    'nav.getQuote': 'Orçamento Grátis',
    
    // Hero
    'hero.tagline': 'Uma Ligação, Tudo Resolvido!',
    'hero.title': 'Serviços Profissionais de Manutenção',
    'hero.subtitle': 'Comercial • Residencial • Condomínios',
    'hero.description': 'Da lavagem de alta pressão à pintura, oferecemos serviços excepcionais de manutenção em toda a região de Vancouver. Confie nos especialistas que cuidam da sua propriedade como você.',
    'hero.cta': 'Solicite Seu Orçamento Grátis',
    'hero.callNow': 'Ligue Agora',
    
    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Soluções completas de manutenção para todas as necessidades',
    'services.pressure.title': 'Lavagem de Alta Pressão',
    'services.pressure.description': 'Limpeza profissional de calçadas, revestimentos, decks, telhados e muito mais. Restauramos sua propriedade ao estado original.',
    'services.handyman.title': 'Serviços Gerais',
    'services.handyman.description': 'De pequenos reparos a grandes reformas, nossa equipe qualificada cuida de todas as suas necessidades de manutenção.',
    'services.painting.title': 'Serviços de Pintura',
    'services.painting.description': 'Pintura interna e externa com materiais premium e acabamento profissional para resultados duradouros.',
    'services.learnMore': 'Saiba Mais',
    
    // Why Us
    'why.title': 'Por Que Escolher a All Done Services?',
    'why.experience': 'Anos de Experiência',
    'why.experienceDesc': 'Expertise confiável em manutenção de propriedades em Vancouver.',
    'why.quality': 'Qualidade Garantida',
    'why.qualityDesc': 'Garantimos satisfação em todos os nossos trabalhos.',
    'why.licensed': 'Licenciados e Segurados',
    'why.licensedDesc': 'Cobertura completa para sua tranquilidade.',
    'why.affordable': 'Preços Competitivos',
    'why.affordableDesc': 'Valores justos sem comprometer a qualidade.',
    
    // Quote Form
    'quote.title': 'Solicite um Orçamento Grátis',
    'quote.subtitle': 'Conte-nos sobre seu projeto e retornaremos em breve',
    'quote.name': 'Nome Completo',
    'quote.email': 'E-mail',
    'quote.phone': 'Telefone',
    'quote.service': 'Serviço Desejado',
    'quote.selectService': 'Selecione um serviço',
    'quote.propertyType': 'Tipo de Propriedade',
    'quote.selectProperty': 'Selecione o tipo',
    'quote.commercial': 'Comercial',
    'quote.residential': 'Residencial',
    'quote.strata': 'Condomínio',
    'quote.message': 'Detalhes do Projeto',
    'quote.messagePlaceholder': 'Descreva seu projeto, incluindo requisitos específicos...',
    'quote.submit': 'Enviar Solicitação',
    'quote.submitting': 'Enviando...',
    'quote.success': 'Obrigado! Entraremos em contato em breve.',
    'quote.error': 'Algo deu errado. Tente novamente ou ligue diretamente.',
    
    // Footer
    'footer.description': 'Seu parceiro de confiança para serviços profissionais de manutenção em Vancouver. Uma ligação, tudo resolvido!',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.contact': 'Contato',
    'footer.hours': 'Horário de Funcionamento',
    'footer.hoursText': 'Segunda - Sábado: 7h - 19h',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    
    // Service Pages
    'pressure.hero.title': 'Lavagem de Alta Pressão',
    'pressure.hero.subtitle': 'Restaure a Beleza da Sua Propriedade',
    'pressure.hero.description': 'Serviços profissionais de lavagem que removem sujeira, mofo e manchas com segurança de qualquer superfície.',
    'pressure.services.title': 'O Que Limpamos',
    'pressure.services.driveways': 'Calçadas e Passagens',
    'pressure.services.drivewaysDesc': 'Remoção de manchas de óleo, marcas de pneus e sujeira acumulada.',
    'pressure.services.siding': 'Revestimento Externo',
    'pressure.services.sidingDesc': 'Lavagem suave para proteger o revestimento removendo mofo.',
    'pressure.services.decks': 'Decks e Pátios',
    'pressure.services.decksDesc': 'Restauração de decks de madeira e compostos.',
    'pressure.services.roofs': 'Limpeza de Telhados',
    'pressure.services.roofsDesc': 'Lavagem segura para remover musgo, algas e detritos.',
    'pressure.services.fences': 'Cercas',
    'pressure.services.fencesDesc': 'Revitalização de cercas de madeira, vinil e metal.',
    'pressure.services.commercial': 'Propriedades Comerciais',
    'pressure.services.commercialDesc': 'Estacionamentos, fachadas e exteriores de prédios.',
    
    'handyman.hero.title': 'Serviços Gerais',
    'handyman.hero.subtitle': 'Nenhum Trabalho é Grande ou Pequeno Demais',
    'handyman.hero.description': 'De consertos rápidos a reformas completas, nossos técnicos cuidam de todas as suas necessidades de manutenção.',
    'handyman.services.title': 'Nossos Serviços Gerais',
    'handyman.services.repairs': 'Reparos Gerais',
    'handyman.services.repairsDesc': 'Ajustes de portas, reparos em drywall, instalação de luminárias e mais.',
    'handyman.services.carpentry': 'Carpintaria',
    'handyman.services.carpentryDesc': 'Prateleiras personalizadas, acabamentos, reparos de deck.',
    'handyman.services.plumbing': 'Encanamento Básico',
    'handyman.services.plumbingDesc': 'Reparos de torneiras, consertos de vasos sanitários.',
    'handyman.services.electrical': 'Elétrica Básica',
    'handyman.services.electricalDesc': 'Instalação de luminárias, tomadas e interruptores.',
    'handyman.services.assembly': 'Montagem de Móveis',
    'handyman.services.assemblyDesc': 'Montagem profissional de móveis e equipamentos.',
    'handyman.services.maintenance': 'Manutenção Preventiva',
    'handyman.services.maintenanceDesc': 'Programas regulares de manutenção preventiva.',
    
    'painting.hero.title': 'Serviços de Pintura',
    'painting.hero.subtitle': 'Transforme Seu Espaço',
    'painting.hero.description': 'Pintura profissional interna e externa com materiais premium e acabamento especializado.',
    'painting.services.title': 'Soluções de Pintura',
    'painting.services.interior': 'Pintura Interna',
    'painting.services.interiorDesc': 'Paredes, tetos, acabamentos com acabamento impecável.',
    'painting.services.exterior': 'Pintura Externa',
    'painting.services.exteriorDesc': 'Revestimentos resistentes para beleza duradoura.',
    'painting.services.cabinets': 'Renovação de Armários',
    'painting.services.cabinetsDesc': 'Transforme sua cozinha ou banheiro sem substituição total.',
    'painting.services.staining': 'Tingimento de Decks',
    'painting.services.stainingDesc': 'Proteja e embeleze suas superfícies de madeira.',
    'painting.services.commercial': 'Pintura Comercial',
    'painting.services.commercialDesc': 'Escritórios, lojas e prédios comerciais.',
    'painting.services.specialty': 'Acabamentos Especiais',
    'painting.services.specialtyDesc': 'Texturas, efeitos decorativos e pintura artística.',
    
    // CTA
    'cta.title': 'Pronto para Transformar Sua Propriedade?',
    'cta.subtitle': 'Solicite seu orçamento gratuito e sem compromisso hoje',
    'cta.button': 'Comece Agora',
    
    // Common
    'common.phone': '604-900-7172',
    'common.email': 'info@alldone-services.ca',
    'common.address': 'Região de Vancouver, BC',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'pt') return saved;
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('pt')) return 'pt';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-CA';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
