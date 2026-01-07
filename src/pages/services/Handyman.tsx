import { 
  Wrench, 
  Hammer, 
  Pipette, 
  Zap, 
  Armchair, 
  Settings 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceImageSlider from '@/components/services/ServiceImageSlider';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';

// Import slider images - brand-safe, realistic handyman visuals
import sliderHandymanPlumbing from '@/assets/slider-handyman-plumbing.jpg';
import sliderHandymanTV from '@/assets/slider-handyman-tv.jpg';
import sliderPaintingInterior from '@/assets/slider-painting-interior.jpg';
import sliderDriveway from '@/assets/slider-driveway-realistic.jpg';

const Handyman = () => {
  const { t, language } = useLanguage();

  const sliderImages = [
    { src: sliderHandymanPlumbing, alt: 'Professional plumbing repair service' },
    { src: sliderHandymanTV, alt: 'TV wall mounting and installation' },
    { src: sliderPaintingInterior, alt: 'Interior home repairs and painting' },
    { src: sliderDriveway, alt: 'Exterior maintenance and repairs' },
  ];

  const services = [
    {
      icon: Wrench,
      title: t('handyman.services.repairs'),
      description: t('handyman.services.repairsDesc'),
    },
    {
      icon: Hammer,
      title: t('handyman.services.carpentry'),
      description: t('handyman.services.carpentryDesc'),
    },
    {
      icon: Pipette,
      title: t('handyman.services.plumbing'),
      description: t('handyman.services.plumbingDesc'),
    },
    {
      icon: Zap,
      title: t('handyman.services.electrical'),
      description: t('handyman.services.electricalDesc'),
    },
    {
      icon: Armchair,
      title: t('handyman.services.assembly'),
      description: t('handyman.services.assemblyDesc'),
    },
    {
      icon: Settings,
      title: t('handyman.services.maintenance'),
      description: t('handyman.services.maintenanceDesc'),
    },
  ];

  return (
    <>
      <SEO
        title={language === 'pt' ? 'Serviços Gerais - All Done Services' : 'Handyman Services - All Done Services'}
        description={language === 'pt' 
          ? 'Serviços profissionais de manutenção e reparos em Vancouver. De pequenos consertos a grandes reformas.'
          : 'Professional handyman and repair services in Vancouver. From minor repairs to major renovations.'}
        canonical="https://alldone-services.ca/services/handyman"
      />
      <Header />
      <main>
        <ServiceImageSlider 
          images={sliderImages}
          title={language === 'pt' ? 'Serviços Gerais' : 'Handyman & Property Care'}
          subtitle={language === 'pt' ? 'Manutenção Profissional' : 'Professional Maintenance'}
        />
        <ServiceList
          title={t('handyman.services.title')}
          services={services}
        />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default Handyman;