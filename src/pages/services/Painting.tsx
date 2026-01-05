import { 
  Paintbrush, 
  Home, 
  Building2, 
  PaintBucket, 
  Palette, 
  Brush 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceImageSlider from '@/components/services/ServiceImageSlider';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';

// Import slider images for painting
import sliderPainting from '@/assets/slider-painting.jpg';
import servicePainting from '@/assets/service-painting-new.jpg';
import sliderHouseWashing from '@/assets/slider-house-washing.jpg';
import sliderDriveway from '@/assets/slider-driveway-realistic.jpg';

const Painting = () => {
  const { t, language } = useLanguage();

  const sliderImages = [
    { src: sliderPainting, alt: 'Professional interior and exterior painting' },
    { src: servicePainting, alt: 'Commercial and residential painting services' },
    { src: sliderHouseWashing, alt: 'House exterior preparation and painting' },
    { src: sliderDriveway, alt: 'Garage and property painting' },
  ];

  const services = [
    {
      icon: Home,
      title: t('painting.services.interior'),
      description: t('painting.services.interiorDesc'),
    },
    {
      icon: Building2,
      title: t('painting.services.exterior'),
      description: t('painting.services.exteriorDesc'),
    },
    {
      icon: PaintBucket,
      title: t('painting.services.cabinets'),
      description: t('painting.services.cabinetsDesc'),
    },
    {
      icon: Brush,
      title: t('painting.services.staining'),
      description: t('painting.services.stainingDesc'),
    },
    {
      icon: Paintbrush,
      title: t('painting.services.commercial'),
      description: t('painting.services.commercialDesc'),
    },
    {
      icon: Palette,
      title: t('painting.services.specialty'),
      description: t('painting.services.specialtyDesc'),
    },
  ];

  return (
    <>
      <SEO
        title={language === 'pt' ? 'Serviços de Pintura - All Done Services' : 'Painting Services - All Done Services'}
        description={language === 'pt' 
          ? 'Serviços profissionais de pintura em Vancouver. Pintura interna e externa com materiais premium.'
          : 'Professional painting services in Vancouver. Interior and exterior painting with premium materials.'}
        canonical="https://alldone-services.ca/services/painting"
      />
      <Header />
      <main>
        <ServiceImageSlider 
          images={sliderImages}
          title={language === 'pt' ? 'Serviços de Pintura' : 'Painting Services'}
          subtitle={language === 'pt' ? 'Qualidade Profissional' : 'Professional Quality'}
        />
        <ServiceList
          title={t('painting.services.title')}
          services={services}
        />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default Painting;