import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ImagePlus } from 'lucide-react';

interface BeforeAfterItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  description?: string;
}

// Placeholder items - these can be replaced with real data from Supabase later
const placeholderItems: BeforeAfterItem[] = [
  {
    id: '1',
    beforeImage: '',
    afterImage: '',
    title: 'Driveway Cleaning',
    description: 'Residential concrete driveway transformation',
  },
  {
    id: '2',
    beforeImage: '',
    afterImage: '',
    title: 'House Washing',
    description: 'Exterior siding soft wash',
  },
  {
    id: '3',
    beforeImage: '',
    afterImage: '',
    title: 'Gutter Cleaning',
    description: 'Complete gutter debris removal',
  },
];

const BeforeAfter = () => {
  const { language } = useLanguage();
  const [items] = useState<BeforeAfterItem[]>(placeholderItems);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'pt' ? 'Antes & Depois' : 'Before & After'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Veja a diferença que nossos serviços fazem. Resultados reais de nossos clientes satisfeitos.'
              : 'See the difference our services make. Real results from our satisfied customers.'}
          </p>
        </motion.div>

        {/* Grid of Before/After Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-lg"
            >
              {/* Before/After Slider Container */}
              <div className="relative aspect-[4/3] bg-muted">
                {item.beforeImage && item.afterImage ? (
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                    <ImagePlus className="w-12 h-12 mb-2 opacity-50" />
                    <span className="text-sm">
                      {language === 'pt' ? 'Fotos em breve' : 'Photos coming soon'}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Info */}
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            {language === 'pt' 
              ? 'Fotos reais de antes e depois serão adicionadas em breve!'
              : 'Real before and after photos will be added soon!'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Before/After Slider Component
interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-gray-400" />
            <div className="w-0.5 h-4 bg-gray-400" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
        Before
      </div>
      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
        After
      </div>

      {/* Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
};

export default BeforeAfter;
