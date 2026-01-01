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
import { ServiceHero, ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';

const Handyman = () => {
  const { t, language } = useLanguage();

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
        <ServiceHero
          title={t('handyman.hero.title')}
          subtitle={t('handyman.hero.subtitle')}
          description={t('handyman.hero.description')}
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
