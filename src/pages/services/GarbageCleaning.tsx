import { Trash2, Building2, Sparkles, Shield, Calendar, Wind } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import { ServiceList, ServiceCTA } from '@/components/services/ServiceComponents';
import heroGarbage from '@/assets/slider-garbage-room.jpg';

const GarbageCleaning = () => {
  const services = [
    { icon: Trash2, title: 'Dumpster Cleaning', description: 'Deep cleaning and sanitization of dumpsters and bins' },
    { icon: Building2, title: 'Garbage Rooms', description: 'Complete washing of garbage rooms in residential and commercial buildings' },
    { icon: Wind, title: 'Odor Elimination', description: 'Specialized treatment to remove persistent odors' },
    { icon: Sparkles, title: 'Sanitization', description: 'Professional sanitization to eliminate bacteria and germs' },
    { icon: Calendar, title: 'Regular Service', description: 'Weekly or monthly cleaning programs for restaurants and buildings' },
    { icon: Shield, title: 'Health Compliance', description: 'Maintaining health and hygiene standards for inspections' },
  ];

  return (
    <>
      <SEO title="Garbage & Dumpster Cleaning - All Done Services" description="Professional garbage room and dumpster cleaning services in Vancouver." canonical="https://alldone-services.ca/services/garbage-cleaning" />
      <Header />
      <main>
        <ServiceHero image={heroGarbage} title="Garbage & Dumpster Cleaning" subtitle="Professional Sanitation" />
        <ServiceList title="Our Cleaning Services" services={services} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default GarbageCleaning;