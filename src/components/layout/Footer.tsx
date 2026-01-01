import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-lg">AD</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl">All Done</span>
                <span className="block text-xs text-primary-foreground/70 font-medium -mt-1">Services</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services/pressure-washing" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('nav.pressureWashing')}
                </Link>
              </li>
              <li>
                <Link to="/services/handyman" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('nav.handyman')}
                </Link>
              </li>
              <li>
                <Link to="/services/painting" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('nav.painting')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">{t('quote.commercial')}</li>
              <li className="text-primary-foreground/80">{t('quote.residential')}</li>
              <li className="text-primary-foreground/80">{t('quote.strata')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:604-900-7172"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  {t('common.phone')}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@alldone-services.ca"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {t('common.email')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                {t('common.address')}
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Clock className="w-5 h-5 flex-shrink-0" />
                {t('footer.hoursText')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} All Done Services. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
