import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImagePlus } from 'lucide-react';

interface BeforeAfterItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  description?: string;
}

const placeholderItems: BeforeAfterItem[] = [
  { id: '1', beforeImage: '', afterImage: '', title: 'Driveway Cleaning', description: 'Residential concrete driveway transformation' },
  { id: '2', beforeImage: '', afterImage: '', title: 'House Washing', description: 'Exterior siding soft wash' },
  { id: '3', beforeImage: '', afterImage: '', title: 'Gutter Cleaning', description: 'Complete gutter debris removal' },
];

const BeforeAfter = () => {
  const [items] = useState<BeforeAfterItem[]>(placeholderItems);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Before & After</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">See the difference our services make. Real results from our satisfied customers.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-card rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3] bg-muted">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                  <ImagePlus className="w-12 h-12 mb-2 opacity-50" />
                  <span className="text-sm">Photos coming soon</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
                {item.description && <p className="text-muted-foreground text-sm mt-1">{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-12">
          <p className="text-muted-foreground">Real before and after photos will be added soon!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;