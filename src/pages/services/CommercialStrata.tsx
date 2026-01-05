import { 
  Building2, 
  Truck, 
  ParkingMeter, 
  Users, 
  Wrench,
  CalendarCheck
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceImageSlider from '@/components/services/ServiceImageSlider';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';

// Import slider images - brand-safe, realistic
import sliderSoftwashBuilding from '@/assets/slider-softwash-building.jpg';
import sliderParkade from '@/assets/slider-parkade-clean.jpg';
import sliderHotWash from '@/assets/slider-hot-wash-clean.jpg';
import sliderGarbageClean from '@/assets/slider-garbage-clean.jpg';

const CommercialStrata = () => {
  const { language } = useLanguage();

  const sliderImages = [
    { src: sliderSoftwashBuilding, alt: 'Multi-storey strata building washing' },
    { src: sliderParkade, alt: 'Parkade and common area cleaning' },
    { src: sliderHotWash, alt: 'Commercial concrete cleaning' },
    { src: sliderGarbageClean, alt: 'Building garbage room cleaning' },
  ];

  const services = [
    {
      icon: Building2,
      title: language === 'pt' ? 'Lavagem de Edifícios' : 'Building Washing',
      description: language === 'pt' 
        ? 'Lavagem completa de edifícios de apartamentos e condomínios de 3-4 andares'
        : 'Complete washing of 3-4 storey apartment and strata buildings',
    },
    {
      icon: ParkingMeter,
      title: language === 'pt' ? 'Estacionamentos e Garagens' : 'Parkades & Common Areas',
      description: language === 'pt'
        ? 'Limpeza profunda de estacionamentos, passarelas e áreas comuns'
        : 'Deep cleaning of parkades, walkways and common areas',
    },
    {
      icon: Truck,
      title: language === 'pt' ? 'Lavagem de Frotas' : 'Fleet Washing',
      description: language === 'pt'
        ? 'Lavagem de caminhões, vans e veículos de trabalho'
        : 'Washing of trucks, vans and work vehicles',
    },
    {
      icon: Wrench,
      title: language === 'pt' ? 'Equipamentos Pesados' : 'Heavy Equipment',
      description: language === 'pt'
        ? 'Limpeza de tratores, máquinas e equipamentos industriais'
        : 'Cleaning of tractors, machinery and industrial equipment',
    },
    {
      icon: Users,
      title: language === 'pt' ? 'Gestores de Strata' : 'Strata Managers',
      description: language === 'pt'
        ? 'Serviços especializados para gestores e síndicos de condomínios'
        : 'Specialized services for strata managers and building councils',
    },
    {
      icon: CalendarCheck,
      title: language === 'pt' ? 'Contratos de Manutenção' : 'Maintenance Contracts',
      description: language === 'pt'
        ? 'Programas de manutenção regular para propriedades comerciais'
        : 'Regular maintenance programs for commercial properties',
    },
  ];

  return (
    <>
      <SEO
        title={language === 'pt' ? 'Serviços Comerciais e Strata - All Done Services' : 'Commercial & Strata Services - All Done Services'}
        description={language === 'pt' 
          ? 'Serviços profissionais de limpeza para edifícios comerciais e condomínios em Vancouver.'
          : 'Professional cleaning services for commercial buildings and strata properties in Vancouver.'}
        canonical="https://alldone-services.ca/services/commercial-strata"
      />
      <Header />
      <main>
        <ServiceImageSlider 
          images={sliderImages}
          title={language === 'pt' ? 'Serviços Comerciais & Strata' : 'Commercial & Strata Services'}
          subtitle={language === 'pt' ? 'Soluções em Grande Escala' : 'Large-Scale Solutions'}
        />
        <ServiceList
          title={language === 'pt' ? 'Nossos Serviços Comerciais' : 'Our Commercial Services'}
          services={services}
        />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default CommercialStrata;
