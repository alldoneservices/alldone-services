import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: t('quote.success'),
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast({
        title: t('quote.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'pt' ? 'Telefone' : 'Phone',
      value: '604-900-7172',
      href: 'tel:604-900-7172',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@alldone-services.ca',
      href: 'mailto:info@alldone-services.ca',
    },
    {
      icon: MapPin,
      title: language === 'pt' ? 'Localização' : 'Location',
      value: t('common.address'),
    },
    {
      icon: Clock,
      title: language === 'pt' ? 'Horário' : 'Hours',
      value: t('footer.hoursText'),
    },
  ];

  return (
    <>
      <SEO
        title={language === 'pt' ? 'Contato - All Done Services' : 'Contact Us - All Done Services'}
        description={language === 'pt' 
          ? 'Entre em contato com a All Done Services. Ligue 604-900-7172 para orçamento grátis.'
          : 'Contact All Done Services. Call 604-900-7172 for a free quote.'}
        canonical="https://alldone-services.ca/contact"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-primary">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, hsl(220 100% 18% / 0.95) 0%, hsl(220 80% 22% / 0.9) 50%, hsl(152 100% 26% / 0.85) 100%)',
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center"
            >
              {t('nav.contact')}
            </motion.h1>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                  {language === 'pt' ? 'Fale Conosco' : 'Get In Touch'}
                </h2>
                <p className="text-muted-foreground text-lg mb-10">
                  {language === 'pt' 
                    ? 'Estamos prontos para ajudar com seu projeto. Entre em contato para um orçamento gratuito.'
                    : 'We\'re ready to help with your project. Contact us for a free quote.'}
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl p-8 shadow-lg border border-border"
                >
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    {language === 'pt' ? 'Envie uma Mensagem' : 'Send a Message'}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                        {t('quote.name')} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                        {t('quote.email')} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                        {t('quote.phone')}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        {t('quote.message')} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2" />
                          {t('quote.submitting')}
                        </>
                      ) : (
                        <>
                          {language === 'pt' ? 'Enviar Mensagem' : 'Send Message'}
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
