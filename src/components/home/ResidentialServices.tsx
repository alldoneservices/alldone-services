import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Droplets, Car, PaintBucket, Wrench, Warehouse, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ResidentialServices = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Home,
      title: language === 'pt' ? 'Lavagem da Casa' : 'House Washing',
      description: language === 'pt'
        ? 'Limpeza profissional de fachadas e paredes externas'
        : 'Professional cleaning of facades and exterior walls',
    },
    {
      icon: Home,
      title: language === 'pt' ? 'Lavagem do Telhado' : 'Roof Washing',
      description: language === 'pt'
        ? 'Remoção segura de musgo, algas e sujeira do telhado'
        : 'Safe removal of moss, algae and dirt from your roof',
    },
    {
      icon: Car,
      title: language === 'pt' ? 'Lavagem de Driveway' : 'Driveway Washing',
      description: language === 'pt'
        ? 'Restaure a aparência da sua entrada e calçadas'
        : 'Restore the look of your driveway and walkways',
    },
    {
      icon: Droplets,
      title: language === 'pt' ? 'Limpeza de Calhas' : 'Gutter Cleaning',
      description: language === 'pt'
        ? 'Limpeza completa de calhas para proteger sua casa'
        : 'Complete gutter cleaning to protect your home',
      link: '/services/gutter-cleaning',
    },
    {
      icon: PaintBucket,
      title: language === 'pt' ? 'Pintura' : 'Painting',
      description: language === 'pt'
        ? 'Pintura interior e exterior com acabamento profissional'
        : 'Interior and exterior painting with professional finish',
      link: '/services/painting',
    },
    {
      icon: Warehouse,
      title: language === 'pt' ? 'Renovação de Garagem' : 'Garage Renovation',
      description: language === 'pt'
        ? 'Transforme sua garagem com pintura e organização'
        : 'Transform your garage with painting and organization',
    },
    {
      icon: Wrench,
      title: language === 'pt' ? 'Handyman' : 'Handyman',
      description: language === 'pt'
        ? 'Reparos gerais e manutenção residencial'
        : 'General repairs and residential maintenance',
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
              {language === 'pt' ? 'Clientes Residenciais' : 'Residential Clients'}
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'pt' ? 'Serviços Residenciais' : 'Residential Services'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {language === 'pt'
              ? 'Cuidamos da sua casa como se fosse nossa. Serviços completos de manutenção e limpeza para residências.'
              : 'We care for your home as if it were our own. Complete maintenance and cleaning services for residences.'}
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
            {language === 'pt' ? 'Solicite um Orçamento Grátis' : 'Get a Free Quote'}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResidentialServices;
