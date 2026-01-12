import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  message: string;
}

const QuoteForm = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    propertyType: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-quote', {
        body: formData,
      });

      if (error) {
        console.error('Error submitting quote:', error);
        throw error;
      }

      console.log('Quote submitted successfully:', data);
      setIsSuccess(true);
      toast({
        title: t('quote.success'),
        description: '',
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        propertyType: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to submit quote:', error);
      toast({
        title: t('quote.error'),
        description: '',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background" id="quote">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('quote.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('quote.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="bg-card rounded-2xl p-12 shadow-lg border border-border text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {t('quote.success')}
                </h3>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-4"
                >
                  {language === 'pt' ? 'Enviar Outra Solicitação' : 'Submit Another Request'}
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
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

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
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

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      {t('quote.phone')} *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {t('quote.service')} *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleSelectChange('service', value)
                      }
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={t('quote.selectService')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pressure-washing">
                          {t('services.pressure.title')}
                        </SelectItem>
                        <SelectItem value="soft-washing">
                          {language === 'pt' ? 'Lavagem Suave' : 'Soft Washing'}
                        </SelectItem>
                        <SelectItem value="gutter-cleaning">
                          {language === 'pt' ? 'Limpeza de Calhas' : 'Gutter Cleaning'}
                        </SelectItem>
                        <SelectItem value="handyman">
                          {t('services.handyman.title')}
                        </SelectItem>
                        <SelectItem value="painting">
                          {t('services.painting.title')}
                        </SelectItem>
                        <SelectItem value="others">
                          {language === 'pt' ? 'Outros' : 'Others'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Property Type */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      {t('quote.propertyType')} *
                    </label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) =>
                        handleSelectChange('propertyType', value)
                      }
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={t('quote.selectProperty')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">
                          {t('quote.commercial')}
                        </SelectItem>
                        <SelectItem value="residential">
                          {t('quote.residential')}
                        </SelectItem>
                        <SelectItem value="strata">
                          {t('quote.strata')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 md:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      {t('quote.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('quote.messagePlaceholder')}
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2" />
                        {t('quote.submitting')}
                      </>
                    ) : (
                      <>
                        {t('quote.submit')}
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
