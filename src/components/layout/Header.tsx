import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

// Service menu images - LOCKED, do not auto-generate
import menuPressure from '@/assets/menu-pressure-washing.jpg';
import menuPainting from '@/assets/menu-painting.jpg';
import menuHandyman from '@/assets/menu-handyman.jpg';
import serviceGutter from '@/assets/service-gutter-new.jpg';
import serviceSoftwash from '@/assets/service-softwash-new.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // LOCKED menu images - do not change without explicit instruction
  const serviceMenuItems = [
    { href: '/services/pressure-washing', label: t('nav.pressureWashing'), image: menuPressure },
    { href: '/services/soft-washing', label: 'Soft Washing', image: serviceSoftwash },
    { href: '/services/gutter-cleaning', label: 'Gutter Cleaning', image: serviceGutter },
    { href: '/services/painting', label: t('nav.painting'), image: menuPainting },
    { href: '/services/handyman', label: t('nav.handyman'), image: menuHandyman },
  ];

  const navLinks = [
    { href: '/', label: t('nav.home') },
    {
      href: '/services',
      label: t('nav.services'),
      children: serviceMenuItems,
    },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Slogan */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={logo} 
              alt="All Done Services - Professional Property Care in Vancouver" 
              className="h-14 md:h-16 w-auto object-contain rounded-lg"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-primary-foreground font-heading font-bold text-sm md:text-base leading-tight">
                All Done Services
              </span>
              <span className="text-accent text-xs md:text-sm font-medium">
                One Call, All Done!
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.children ? (
                  <button
                    className={`flex items-center gap-1 font-medium transition-colors hover:text-accent ${
                      link.children.some(child => isActive(child.href)) ? 'text-accent' : 'text-primary-foreground'
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-medium transition-colors hover:text-accent ${
                      isActive(link.href) ? 'text-accent' : 'text-primary-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {link.children && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => {
                          setServicesOpen(false);
                          setHoveredService(null);
                        }}
                      >
                        <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden flex">
                          {/* Service Links */}
                          <div className="min-w-[220px]">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onMouseEnter={() => setHoveredService(child.href)}
                                className={`block px-4 py-3 font-medium transition-colors hover:bg-muted ${
                                  isActive(child.href) ? 'text-primary bg-muted' : 'text-foreground'
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                          {/* Service Image Preview */}
                          <div className="w-48 h-auto overflow-hidden">
                            <AnimatePresence mode="wait">
                              {hoveredService && (
                                <motion.img
                                  key={hoveredService}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  src={link.children.find(c => c.href === hoveredService)?.image}
                                  alt="Service preview"
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </AnimatePresence>
                            {!hoveredService && (
                              <img
                                src={link.children[0]?.image}
                                alt="Service preview"
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:604-900-7172"
              className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">604-900-7172</span>
            </a>
            <Button 
              variant="hero" 
              size="default"
              onClick={() => {
                const quoteSection = document.getElementById('quote');
                if (quoteSection) {
                  quoteSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#quote';
                }
              }}
            >
              {t('nav.getQuote')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-card rounded-b-2xl"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 font-medium text-foreground"
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-8 py-2 text-muted-foreground hover:text-primary"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 font-medium ${
                          isActive(link.href) ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <a
                    href="tel:604-900-7172"
                    className="flex items-center gap-2 text-foreground font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    604-900-7172
                  </a>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      const quoteSection = document.getElementById('quote');
                      if (quoteSection) {
                        quoteSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = '/#quote';
                      }
                    }}
                  >
                    {t('nav.getQuote')}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
