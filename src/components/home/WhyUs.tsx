import { motion } from 'framer-motion';
import { Flame, Wrench, Building2, ShieldCheck, Phone, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUs = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Flame,
      title: language === 'pt' ? 'Lavagem com Água Quente' : 'Hot Pressure Washing',
      description: language === 'pt' 
        ? 'Melhores resultados para manchas difíceis'
        : 'Better results for tough stains',
    },
    {
      icon: Home,
      title: language === 'pt' ? 'Pequeno ao Grande' : 'Small to Large',
      description: language === 'pt'
        ? 'Casas pequenas a grandes propriedades comerciais'
        : 'Capable of small homes to large commercial properties',
    },
    {
      icon: Wrench,
      title: language === 'pt' ? 'Equipamento Profissional' : 'Professional Equipment',
      description: language === 'pt'
        ? 'Equipamento comercial de alta qualidade'
        : 'Professional commercial-grade equipment',
    },
    {
      icon: Building2,
      title: language === 'pt' ? 'Especialistas' : 'Specialists',
      description: language === 'pt'
        ? 'Residencial, comercial e condomínios'
        : 'Residential, commercial & strata specialists',
    },
    {
      icon: ShieldCheck,
      title: language === 'pt' ? 'Confiável e Segurado' : 'Reliable & Insured',
      description: language === 'pt'
        ? 'Totalmente segurado e orientado aos detalhes'
        : 'Reliable, insured and detail-oriented',
    },
    {
      icon: Phone,
      title: language === 'pt' ? 'Uma Ligação' : 'One Call',
      description: language === 'pt'
        ? 'Cuidado completo da propriedade'
        : 'One call for complete property care',
    },
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {language === 'pt' ? 'Por Que Nos Escolher?' : 'Why Choose Us?'}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {language === 'pt'
              ? 'Somos especialistas em cuidados de propriedade na região de Vancouver'
              : 'We are property care specialists in the Greater Vancouver Area'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-accent mx-auto mb-4 flex items-center justify-center shadow-lg">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-base font-bold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
