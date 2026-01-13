import { Paintbrush, Home, Building2, PaintBucket, Palette, Brush } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';
import heroPainting from '@/assets/menu-painting.jpg';

const Painting = () => {
  const { t } = useLanguage();
  const services = [
    { icon: Home, title: t('painting.services.interior'), description: t('painting.services.interiorDesc') },
    { icon: Building2, title: t('painting.services.exterior'), description: t('painting.services.exteriorDesc') },
    { icon: PaintBucket, title: t('painting.services.cabinets'), description: t('painting.services.cabinetsDesc') },
    { icon: Brush, title: t('painting.services.staining'), description: t('painting.services.stainingDesc') },
    { icon: Paintbrush, title: t('painting.services.commercial'), description: t('painting.services.commercialDesc') },
    { icon: Palette, title: t('painting.services.specialty'), description: t('painting.services.specialtyDesc') },
  ];

  return (
    <>
      <SEO title="Painting Services - All Done Services" description="Professional painting services in Vancouver. Interior and exterior painting with premium materials." canonical="https://alldone-services.ca/services/painting" />
      <Header />
      <main>
        <ServiceHero image={heroPainting} title="Painting Services" subtitle="Professional Quality" />
        <ServiceList title={t('painting.services.title')} services={services} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default Painting;