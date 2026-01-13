import { Home, Building2, Leaf, Shield, Droplets, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';
import heroGutter from '@/assets/slider-gutter-residential.jpg';

const GutterCleaning = () => {
  const services = [
    { icon: Home, title: 'Residential Gutters', description: 'Complete gutter cleaning for homes of all sizes' },
    { icon: Building2, title: 'Commercial Gutters', description: 'Gutter service for commercial and office buildings' },
    { icon: Leaf, title: 'Debris Removal', description: 'Removal of leaves, twigs and debris buildup' },
    { icon: Droplets, title: 'Downspout Cleaning', description: 'Unclogging and complete cleaning of downspouts' },
    { icon: Calendar, title: 'Seasonal Maintenance', description: 'Regular maintenance programs for spring and fall' },
    { icon: Shield, title: 'Damage Prevention', description: 'Protect your home from water damage and flooding' },
  ];

  return (
    <>
      <SEO title="Gutter Cleaning Services - All Done Services" description="Professional gutter cleaning services in Vancouver. Seasonal maintenance to prevent water damage and blockages." canonical="https://alldone-services.ca/services/gutter-cleaning" />
      <Header />
      <main>
        <ServiceHero image={heroGutter} title="Gutter Cleaning Services" subtitle="Seasonal Maintenance" />
        <ServiceList title="Our Gutter Services" services={services} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default GutterCleaning;