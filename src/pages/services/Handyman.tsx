import { Wrench, Hammer, Pipette, Zap, Armchair, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';
import heroHandyman from '@/assets/menu-handyman.jpg';

const Handyman = () => {
  const { t } = useLanguage();
  const services = [
    { icon: Wrench, title: t('handyman.services.repairs'), description: t('handyman.services.repairsDesc') },
    { icon: Hammer, title: t('handyman.services.carpentry'), description: t('handyman.services.carpentryDesc') },
    { icon: Pipette, title: t('handyman.services.plumbing'), description: t('handyman.services.plumbingDesc') },
    { icon: Zap, title: t('handyman.services.electrical'), description: t('handyman.services.electricalDesc') },
    { icon: Armchair, title: t('handyman.services.assembly'), description: t('handyman.services.assemblyDesc') },
    { icon: Settings, title: t('handyman.services.maintenance'), description: t('handyman.services.maintenanceDesc') },
  ];

  return (
    <>
      <SEO title="Handyman Services - All Done Services" description="Professional handyman and repair services in Vancouver. From minor repairs to major renovations." canonical="https://alldone-services.ca/services/handyman" />
      <Header />
      <main>
        <ServiceHero image={heroHandyman} title="Handyman & Property Care" subtitle="Professional Maintenance" />
        <ServiceList title={t('handyman.services.title')} services={services} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default Handyman;