import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Import service images
import servicePressure from '@/assets/service-pressure.jpg';
import serviceSoftwash from '@/assets/service-softwash.jpg';
import serviceGutter from '@/assets/service-gutter.jpg';
import servicePainting from '@/assets/service-painting.jpg';
import serviceHandyman from '@/assets/service-handyman.jpg';

const Services = () => {
  const { language } = useLanguage();

  const services = [
    {
      image: servicePressure,
      title: language === 'pt' ? 'Lavagem de Alta Pressão' : 'Hot & Cold Pressure Washing',
      description: language === 'pt' 
        ? 'Limpeza profunda para óleo, graxa e acúmulo pesado'
        : 'Deep cleaning for oil, grease and heavy buildup',
      href: '/services/pressure-washing',
    },
    {
      image: serviceSoftwash,
      title: language === 'pt' ? 'Lavagem Suave' : 'Soft Washing',
      description: language === 'pt'
        ? 'Limpeza segura para revestimentos, telhados e superfícies delicadas'
        : 'Safe cleaning for siding, roofs and delicate surfaces',
      href: '/services/pressure-washing',
    },
    {
      image: serviceGutter,
      title: language === 'pt' ? 'Limpeza de Calhas' : 'Gutter Cleaning',
      description: language === 'pt'
        ? 'Limpeza sazonal de calhas para prevenir danos e bloqueios'
        : 'Seasonal gutter cleaning to prevent water damage and blockages',
      href: '/services/handyman',
    },
    {
      image: servicePainting,
      title: language === 'pt' ? 'Serviços de Pintura' : 'Painting Services',
      description: language === 'pt'
        ? 'Pintura interna e externa bem feita'
        : 'Interior and exterior painting done right',
      href: '/services/painting',
    },
    {
      image: serviceHandyman,
      title: language === 'pt' ? 'Manutenção de Propriedades' : 'Handyman & Property Care',
      description: language === 'pt'
        ? 'Reparos, manutenção e cuidado contínuo da propriedade'
        : 'Repairs, maintenance and ongoing property care',
      href: '/services/handyman',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'pt' ? 'Nossos Serviços' : 'Our Services'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Soluções completas de cuidado de propriedade para todas as necessidades'
              : 'Comprehensive property care solutions for every need'}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Button asChild variant="ghost" className="p-0 h-auto hover:bg-transparent self-start">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      {language === 'pt' ? 'Saiba Mais' : 'Learn More'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
