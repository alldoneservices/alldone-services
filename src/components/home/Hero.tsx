import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Import slider images
import sliderHotPressure from '@/assets/slider-hot-pressure.jpg';
import sliderStrataBuilding from '@/assets/slider-strata-building.jpg';
import sliderParkade from '@/assets/slider-parkade.jpg';
import sliderTruckWash from '@/assets/slider-truck-wash.jpg';
import sliderGutterCleaning from '@/assets/slider-gutter-cleaning.jpg';
import sliderSoftwashPro from '@/assets/slider-softwash-pro.jpg';

const Hero = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: sliderHotPressure,
      alt: 'Hot pressure washing with visible steam',
    },
    {
      image: sliderStrataBuilding,
      alt: 'Pressure washing multi-storey strata building',
    },
    {
      image: sliderParkade,
      alt: 'Commercial parkade and walkway cleaning',
    },
    {
      image: sliderTruckWash,
      alt: 'Truck and heavy equipment washing',
    },
    {
      image: sliderGutterCleaning,
      alt: 'Professional gutter cleaning service',
    },
    {
      image: sliderSoftwashPro,
      alt: 'Professional soft washing on residential siding',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image Slider Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Slider Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-lg"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
          >
            {language === 'pt' ? 'Cuidado Completo da Propriedade' : 'Complete Property Care'}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white font-heading font-semibold text-xl md:text-2xl mb-3 drop-shadow-md"
          >
            {language === 'pt' 
              ? 'Residencial, Comercial e Condomínios' 
              : 'Residential, Commercial & Strata'}
          </motion.p>

          {/* Hot Pressure Washing Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm md:text-base">
                {language === 'pt' 
                  ? 'Lavagem de Alta Pressão com Água Quente Disponível' 
                  : 'Hot Pressure Washing Available'}
              </span>
            </div>
            <p className="text-white/70 mt-3 text-base md:text-lg max-w-xl">
              {language === 'pt'
                ? 'Limpeza poderosa para graxa, óleo e manchas difíceis'
                : 'Powerful cleaning for grease, oil & tough stains'}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild variant="hero" size="xl" className="text-lg px-8 py-6">
              <a href="#quote">
                {language === 'pt' ? 'Orçamento Grátis' : 'Get a Free Estimate'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
