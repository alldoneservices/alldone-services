import { 
  Home, 
  Building2, 
  Leaf, 
  Shield, 
  Droplets,
  Calendar
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';

// Import hero image - gutter cleaning specific
import heroGutter from '@/assets/slider-gutter-residential.jpg';

const GutterCleaning = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Home,
      title: language === 'pt' ? 'Calhas Residenciais' : 'Residential Gutters',
      description: language === 'pt' 
        ? 'Limpeza completa de calhas para casas de todos os tamanhos'
        : 'Complete gutter cleaning for homes of all sizes',
    },
    {
      icon: Building2,
      title: language === 'pt' ? 'Calhas Comerciais' : 'Commercial Gutters',
      description: language === 'pt'
        ? 'Serviço de calhas para edifícios comerciais e de escritórios'
        : 'Gutter service for commercial and office buildings',
    },
    {
      icon: Leaf,
      title: language === 'pt' ? 'Remoção de Detritos' : 'Debris Removal',
      description: language === 'pt'
        ? 'Remoção de folhas, galhos e acúmulo de detritos'
        : 'Removal of leaves, twigs and debris buildup',
    },
    {
      icon: Droplets,
      title: language === 'pt' ? 'Limpeza de Calhas' : 'Downspout Cleaning',
      description: language === 'pt'
        ? 'Desobstrução e limpeza completa dos tubos de descida'
        : 'Unclogging and complete cleaning of downspouts',
    },
    {
      icon: Calendar,
      title: language === 'pt' ? 'Manutenção Sazonal' : 'Seasonal Maintenance',
      description: language === 'pt'
        ? 'Programas de manutenção regular para primavera e outono'
        : 'Regular maintenance programs for spring and fall',
    },
    {
      icon: Shield,
      title: language === 'pt' ? 'Prevenção de Danos' : 'Damage Prevention',
      description: language === 'pt'
        ? 'Proteja sua casa contra danos causados pela água'
        : 'Protect your home from water damage and flooding',
    },
  ];

  return (
    <>
      <SEO
        title={language === 'pt' ? 'Limpeza de Calhas - All Done Services' : 'Gutter Cleaning Services - All Done Services'}
        description={language === 'pt' 
          ? 'Serviços profissionais de limpeza de calhas em Vancouver. Manutenção sazonal para prevenir danos e bloqueios.'
          : 'Professional gutter cleaning services in Vancouver. Seasonal maintenance to prevent water damage and blockages.'}
        canonical="https://alldone-services.ca/services/gutter-cleaning"
      />
      <Header />
      <main>
        <ServiceHero 
          image={heroGutter}
          title={language === 'pt' ? 'Limpeza de Calhas' : 'Gutter Cleaning Services'}
          subtitle={language === 'pt' ? 'Manutenção Sazonal' : 'Seasonal Maintenance'}
        />
        <ServiceList
          title={language === 'pt' ? 'Nossos Serviços de Calhas' : 'Our Gutter Services'}
          services={services}
        />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default GutterCleaning;
