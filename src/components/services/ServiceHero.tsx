import { motion } from 'framer-motion';

interface ServiceHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const ServiceHero = ({ image, title, subtitle }: ServiceHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[350px] max-h-[500px] overflow-hidden">
      {/* Static Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 max-w-4xl">
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-semibold text-lg md:text-xl mb-4 drop-shadow-md"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.5)' }}
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
