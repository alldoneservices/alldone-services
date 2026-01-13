import { Building2, Truck, ParkingMeter, Users, Wrench, CalendarCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';
import heroStrata from '@/assets/slider-strata-realistic.jpg';

const CommercialStrata = () => {
  const { t } = useLanguage();
  const services = [
    { icon: Building2, title: 'Building Washing', description: 'Complete washing of 3-4 storey apartment and strata buildings' },
    { icon: ParkingMeter, title: 'Parkades & Common Areas', description: 'Deep cleaning of parkades, walkways and common areas' },
    { icon: Truck, title: 'Fleet Washing', description: 'Washing of trucks, vans and work vehicles' },
    { icon: Wrench, title: 'Heavy Equipment', description: 'Cleaning of tractors, machinery and industrial equipment' },
    { icon: Users, title: 'Strata Managers', description: 'Specialized services for strata managers and building councils' },
    { icon: CalendarCheck, title: 'Maintenance Contracts', description: 'Regular maintenance programs for commercial properties' },
  ];

  return (
    <>
      <SEO title="Commercial & Strata Services - All Done Services" description="Professional cleaning services for commercial buildings and strata properties in Vancouver." canonical="https://alldone-services.ca/services/commercial-strata" />
      <Header />
      <main>
        <ServiceHero image={heroStrata} title="Commercial & Strata Services" subtitle="Large-Scale Solutions" />
        <ServiceList title="Our Commercial Services" services={services} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default CommercialStrata;