import { motion } from 'framer-motion';
import { Home, Droplets, Car, PaintBucket, Wrench, Warehouse, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResidentialServices = () => {
  const services = [
    {
      icon: Home,
      title: 'House Washing',
      description: 'Professional cleaning of facades and exterior walls',
    },
    {
      icon: Home,
      title: 'Roof Washing',
      description: 'Safe removal of moss, algae and dirt from your roof',
    },
    {
      icon: Car,
      title: 'Driveway Washing',
      description: 'Restore the look of your driveway and walkways',
    },
    {
      icon: Droplets,
      title: 'Gutter Cleaning',
      description: 'Complete gutter cleaning to protect your home',
      link: '/services/gutter-cleaning',
    },
    {
      icon: PaintBucket,
      title: 'Painting',
      description: 'Interior and exterior painting with professional finish',
      link: '/services/painting',
    },
    {
      icon: Warehouse,
      title: 'Garage Renovation',
      description: 'Transform your garage with painting and organization',
    },
    {
      icon: Wrench,
      title: 'Handyman',
      description: 'General repairs and residential maintenance',
      link: '/services/handyman',
    },
  ];

  return (
    <section className="py-24 bg-background" id="residential">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Home className="w-5 h-5 text-accent-foreground" />
            <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wide">
              Residential Clients
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Residential Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We care for your home as if it were our own. Complete maintenance and cleaning services for residences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => {
              const element = document.getElementById('quote');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResidentialServices;
