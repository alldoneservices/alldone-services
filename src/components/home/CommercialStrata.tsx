import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Truck, Droplets, ParkingMeter, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CommercialStrata = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: language === 'pt' ? 'Lavagem de Edifícios' : 'Apartment & Strata Building Washing',
      description: language === 'pt'
        ? 'Limpeza profissional de edifícios residenciais e comerciais'
        : 'Professional cleaning for residential and commercial buildings',
    },
    {
      icon: ParkingMeter,
      title: language === 'pt' ? 'Estacionamentos e Áreas Comuns' : 'Parkades, Walkways & Common Areas',
      description: language === 'pt'
        ? 'Manutenção de áreas de alto tráfego'
        : 'Maintenance for high-traffic areas',
    },
    {
      icon: Truck,
      title: language === 'pt' ? 'Lavagem de Frotas' : 'Fleet Washing',
      description: language === 'pt'
        ? 'Caminhões, vans e veículos de trabalho'
        : 'Trucks, vans and work vehicles',
    },
    {
      icon: Wrench,
      title: language === 'pt' ? 'Equipamentos Pesados' : 'Heavy Equipment & Machinery',
      description: language === 'pt'
        ? 'Limpeza de tratores, escavadeiras e maquinário'
        : 'Tractors, excavators and machinery cleaning',
    },
    {
      icon: Droplets,
      title: language === 'pt' ? 'Calhas Multi-Unidades' : 'Multi-Unit Gutter Cleaning',
      description: language === 'pt'
        ? 'Limpeza sazonal de calhas para edifícios de múltiplas unidades'
        : 'Seasonal gutter cleaning for multi-unit buildings',
    },
  ];

  return (
    <section className="py-24 bg-muted/50" id="commercial">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              {language === 'pt' ? 'Grandes Projetos' : 'Large Scale Projects'}
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'pt' ? 'Serviços Comerciais e Condomínios' : 'Commercial & Strata Services'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'pt'
              ? 'Soluções de limpeza em grande escala para administradores de propriedades, condomínios e clientes comerciais'
              : 'Large-scale cleaning solutions for property managers, strata councils and commercial clients'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
          <Button asChild size="lg" className="gap-2">
            <Link to="/services/commercial-strata">
              {language === 'pt' ? 'Ver Todos os Serviços Comerciais' : 'View All Commercial Services'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommercialStrata;
