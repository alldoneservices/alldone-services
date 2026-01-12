import { 
  Home, 
  Building2, 
  TreeDeciduous, 
  Shield, 
  Droplets,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';

// Import hero image - soft washing specific
import heroSoftwash from '@/assets/slider-softwash-pro.jpg';

const SoftWashing = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Home,
      title: language === 'pt' ? 'Lavagem de Fachadas' : 'Siding Cleaning',
      description: language === 'pt' 
        ? 'Limpeza suave e eficaz para todos os tipos de revestimento exterior'
        : 'Gentle yet effective cleaning for all types of exterior siding',
    },
    {
      icon: Building2,
      title: language === 'pt' ? 'Limpeza de Telhados' : 'Roof Cleaning',
      description: language === 'pt'
        ? 'Remoção segura de musgo, algas e manchas sem danificar as telhas'
        : 'Safe removal of moss, algae and stains without damaging shingles',
    },
    {
      icon: TreeDeciduous,
      title: language === 'pt' ? 'Remoção de Mofo' : 'Mold & Mildew Removal',
      description: language === 'pt'
        ? 'Tratamento especializado para eliminar mofo e bolor'
        : 'Specialized treatment to eliminate mold and mildew growth',
    },
    {
      icon: Shield,
      title: language === 'pt' ? 'Superfícies Delicadas' : 'Delicate Surfaces',
      description: language === 'pt'
        ? 'Limpeza segura para madeira, stucco e superfícies pintadas'
        : 'Safe cleaning for wood, stucco and painted surfaces',
    },
    {
      icon: Droplets,
      title: language === 'pt' ? 'Limpeza de Decks' : 'Deck Cleaning',
      description: language === 'pt'
        ? 'Restauração suave de decks de madeira e compostos'
        : 'Gentle restoration of wood and composite decks',
    },
    {
      icon: Sparkles,
      title: language === 'pt' ? 'Limpeza de Cercas' : 'Fence Cleaning',
      description: language === 'pt'
        ? 'Revitalização de cercas de madeira e vinil'
        : 'Revitalization of wood and vinyl fencing',
    },
  ];

  return (
    <>
      <SEO
        title={language === 'pt' ? 'Lavagem Suave - All Done Services' : 'Soft Washing Services - All Done Services'}
        description={language === 'pt' 
          ? 'Serviços profissionais de lavagem suave em Vancouver. Limpeza segura para revestimentos, telhados e superfícies delicadas.'
          : 'Professional soft washing services in Vancouver. Safe cleaning for siding, roofs and delicate surfaces.'}
        canonical="https://alldone-services.ca/services/soft-washing"
      />
      <Header />
      <main>
        <ServiceHero 
          image={heroSoftwash}
          title={language === 'pt' ? 'Lavagem Suave' : 'Soft Washing Services'}
          subtitle={language === 'pt' ? 'Limpeza Segura e Eficaz' : 'Safe & Effective Cleaning'}
        />
        <ServiceList
          title={language === 'pt' ? 'Nossos Serviços de Lavagem Suave' : 'Our Soft Washing Services'}
          services={services}
        />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default SoftWashing;
