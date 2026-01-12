import { 
  Droplets, 
  Home, 
  TreeDeciduous, 
  Building2, 
  Fence, 
  CloudRain 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';

// Import hero image - pressure washing specific
import heroPressure from '@/assets/menu-pressure-washing.jpg';

const PressureWashing = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('pressure.services.driveways'),
      description: t('pressure.services.drivewaysDesc'),
    },
    {
      icon: Building2,
      title: t('pressure.services.siding'),
      description: t('pressure.services.sidingDesc'),
    },
    {
      icon: TreeDeciduous,
      title: t('pressure.services.decks'),
      description: t('pressure.services.decksDesc'),
    },
    {
      icon: CloudRain,
      title: t('pressure.services.roofs'),
      description: t('pressure.services.roofsDesc'),
    },
    {
      icon: Fence,
      title: t('pressure.services.fences'),
      description: t('pressure.services.fencesDesc'),
    },
    {
      icon: Droplets,
      title: t('pressure.services.commercial'),
      description: t('pressure.services.commercialDesc'),
    },
  ];

  return (
    <>
      <SEO
        title={language === 'pt' ? 'Lavagem de Alta Pressão - All Done Services' : 'Pressure & Soft Washing - All Done Services'}
        description={language === 'pt' 
          ? 'Serviços profissionais de lavagem de alta pressão em Vancouver. Limpeza de calçadas, revestimentos, decks e telhados.'
          : 'Professional pressure and soft washing services in Vancouver. Cleaning driveways, siding, decks, roofs, and more.'}
        canonical="https://alldone-services.ca/services/pressure-washing"
      />
      <Header />
      <main>
        <ServiceHero 
          image={heroPressure}
          title={language === 'pt' ? 'Lavagem de Alta Pressão' : 'Hot & Cold Pressure Washing'}
          subtitle={language === 'pt' ? 'Limpeza Profissional' : 'Professional Deep Cleaning'}
        />
        <ServiceList
          title={t('pressure.services.title')}
          services={services}
        />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default PressureWashing;
