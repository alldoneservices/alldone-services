import { 
  Trash2, 
  Building2, 
  Sparkles, 
  Shield, 
  Calendar,
  Wind
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceImageSlider from '@/components/services/ServiceImageSlider';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';

// Import slider images
import sliderGarbageRoom from '@/assets/slider-garbage-room.jpg';
import sliderHotSteam from '@/assets/slider-hot-steam.jpg';
import sliderParkade from '@/assets/slider-parkade.jpg';
import sliderDriveway from '@/assets/slider-driveway-realistic.jpg';

const GarbageCleaning = () => {
  const { language } = useLanguage();

  const sliderImages = [
    { src: sliderGarbageRoom, alt: 'Commercial garbage room pressure washing' },
    { src: sliderHotSteam, alt: 'Hot pressure washing for tough stains and grease' },
    { src: sliderParkade, alt: 'Building common area cleaning' },
    { src: sliderDriveway, alt: 'Industrial concrete cleaning' },
  ];

  const services = [
    {
      icon: Trash2,
      title: language === 'pt' ? 'Limpeza de Lixeiras' : 'Dumpster Cleaning',
      description: language === 'pt' 
        ? 'Limpeza profunda e desinfecção de lixeiras e containers'
        : 'Deep cleaning and sanitization of dumpsters and bins',
    },
    {
      icon: Building2,
      title: language === 'pt' ? 'Salas de Lixo' : 'Garbage Rooms',
      description: language === 'pt'
        ? 'Lavagem completa de salas de lixo em edifícios residenciais e comerciais'
        : 'Complete washing of garbage rooms in residential and commercial buildings',
    },
    {
      icon: Wind,
      title: language === 'pt' ? 'Eliminação de Odores' : 'Odor Elimination',
      description: language === 'pt'
        ? 'Tratamento especializado para remover odores persistentes'
        : 'Specialized treatment to remove persistent odors',
    },
    {
      icon: Sparkles,
      title: language === 'pt' ? 'Desinfecção' : 'Sanitization',
      description: language === 'pt'
        ? 'Desinfecção profissional para eliminar bactérias e germes'
        : 'Professional sanitization to eliminate bacteria and germs',
    },
    {
      icon: Calendar,
      title: language === 'pt' ? 'Serviço Regular' : 'Regular Service',
      description: language === 'pt'
        ? 'Programas de limpeza semanal ou mensal para restaurantes e edifícios'
        : 'Weekly or monthly cleaning programs for restaurants and buildings',
    },
    {
      icon: Shield,
      title: language === 'pt' ? 'Conformidade Sanitária' : 'Health Compliance',
      description: language === 'pt'
        ? 'Manutenção de padrões de saúde e higiene para inspeções'
        : 'Maintaining health and hygiene standards for inspections',
    },
  ];

  return (
    <>
      <SEO
        title={language === 'pt' ? 'Limpeza de Lixeiras e Salas de Lixo - All Done Services' : 'Garbage & Dumpster Cleaning - All Done Services'}
        description={language === 'pt' 
          ? 'Serviços profissionais de limpeza de lixeiras e salas de lixo em Vancouver.'
          : 'Professional garbage room and dumpster cleaning services in Vancouver.'}
        canonical="https://alldone-services.ca/services/garbage-cleaning"
      />
      <Header />
      <main>
        <ServiceImageSlider 
          images={sliderImages}
          title={language === 'pt' ? 'Limpeza de Lixeiras' : 'Garbage & Dumpster Cleaning'}
          subtitle={language === 'pt' ? 'Higiene Profissional' : 'Professional Sanitation'}
        />
        <ServiceList
          title={language === 'pt' ? 'Nossos Serviços de Limpeza' : 'Our Cleaning Services'}
          services={services}
        />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default GarbageCleaning;
