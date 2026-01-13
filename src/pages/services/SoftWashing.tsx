import { Home, Building2, TreeDeciduous, Shield, Droplets, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';
import heroSoftwash from '@/assets/slider-softwash-pro.jpg';

const SoftWashing = () => {
  const services = [
    { icon: Home, title: 'Siding Cleaning', description: 'Gentle yet effective cleaning for all types of exterior siding' },
    { icon: Building2, title: 'Roof Cleaning', description: 'Safe removal of moss, algae and stains without damaging shingles' },
    { icon: TreeDeciduous, title: 'Mold & Mildew Removal', description: 'Specialized treatment to eliminate mold and mildew growth' },
    { icon: Shield, title: 'Delicate Surfaces', description: 'Safe cleaning for wood, stucco and painted surfaces' },
    { icon: Droplets, title: 'Deck Cleaning', description: 'Gentle restoration of wood and composite decks' },
    { icon: Sparkles, title: 'Fence Cleaning', description: 'Revitalization of wood and vinyl fencing' },
  ];

  return (
    <>
      <SEO title="Soft Washing Services - All Done Services" description="Professional soft washing services in Vancouver. Safe cleaning for siding, roofs and delicate surfaces." canonical="https://alldone-services.ca/services/soft-washing" />
      <Header />
      <main>
        <ServiceHero image={heroSoftwash} title="Soft Washing Services" subtitle="Safe & Effective Cleaning" />
        <ServiceList title="Our Soft Washing Services" services={services} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default SoftWashing;