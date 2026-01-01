import { motion } from 'framer-motion';
import { Award, Shield, BadgeCheck, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('why.experience'),
      description: t('why.experienceDesc'),
    },
    {
      icon: BadgeCheck,
      title: t('why.quality'),
      description: t('why.qualityDesc'),
    },
    {
      icon: Shield,
      title: t('why.licensed'),
      description: t('why.licensedDesc'),
    },
    {
      icon: DollarSign,
      title: t('why.affordable'),
      description: t('why.affordableDesc'),
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('why.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center shadow-lg">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
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
