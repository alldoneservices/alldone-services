import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import CommercialStrata from '@/components/home/CommercialStrata';
import WhyUs from '@/components/home/WhyUs';
import QuoteForm from '@/components/home/QuoteForm';
import CTA from '@/components/home/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEO
        title={language === 'pt' 
          ? 'All Done Services - Serviços Profissionais de Manutenção em Vancouver'
          : 'All Done Services - Professional Property Care in Vancouver'}
        description={language === 'pt'
          ? 'Uma ligação, tudo resolvido! Serviços profissionais de lavagem de alta pressão, manutenção e pintura para propriedades comerciais, residenciais e condomínios na região de Vancouver.'
          : 'One call, all done! Professional pressure washing, handyman, and painting services for commercial, residential, and strata properties in Greater Vancouver Area.'}
        canonical="https://alldone-services.ca"
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <CommercialStrata />
        <WhyUs />
        <QuoteForm />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
