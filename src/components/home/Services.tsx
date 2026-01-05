import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Import service images
import servicePressure from '@/assets/service-pressure.jpg';
import serviceSoftwash from '@/assets/service-softwash.jpg';
import servicePainting from '@/assets/service-painting.jpg';
import serviceHandyman from '@/assets/service-handyman.jpg';

const Services = () => {
  const { language } = useLanguage();

  const services = [
    {
      image: servicePressure,
      title: language === 'pt' ? 'Lavagem de Alta Pressão' : 'Hot & Cold Pressure Washing',
      description: language === 'pt' 
        ? 'Equipamento comercial de alta pressão para remover sujeira, graxa e manchas de qualquer superfície.'
        : 'Commercial-grade hot and cold pressure washing to remove dirt, grease, and stains from any surface.',
      href: '/services/pressure-washing',
    },
    {
      image: serviceSoftwash,
      title: language === 'pt' ? 'Lavagem Suave' : 'Soft Washing',
      description: language === 'pt'
        ? 'Limpeza suave para superfícies delicadas como revestimentos, telhados e decks.'
        : 'Gentle low-pressure cleaning for delicate surfaces like siding, roofs, and decks.',
      href: '/services/pressure-washing',
    },
    {
      image: servicePainting,
      title: language === 'pt' ? 'Serviços de Pintura' : 'Painting Services',
      description: language === 'pt'
        ? 'Pintura profissional interna e externa com materiais premium e acabamento especializado.'
        : 'Professional interior and exterior painting with premium materials and expert craftsmanship.',
      href: '/services/painting',
    },
    {
      image: serviceHandyman,
      title: language === 'pt' ? 'Manutenção de Propriedades' : 'Handyman & Property Care',
      description: language === 'pt'
        ? 'Serviços completos de manutenção e reparos para propriedades residenciais e comerciais.'
        : 'Complete property maintenance and repair services for residential and commercial properties.',
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
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
