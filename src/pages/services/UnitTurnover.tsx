import { motion } from 'framer-motion';
import { 
  Building2, 
  Clock, 
  Phone, 
  Shield, 
  FileCheck, 
  Paintbrush, 
  Wrench, 
  DoorOpen, 
  Droplets, 
  Tv, 
  Hammer,
  CheckCircle,
  ArrowRight,
  Users,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';

const benefits = [
  {
    icon: Clock,
    title: 'Fast Unit Turnover',
    description: 'Reduce vacancy time with efficient, same-week turnovers'
  },
  {
    icon: Phone,
    title: 'One Point of Contact',
    description: 'Single contact for all your maintenance needs'
  },
  {
    icon: Users,
    title: 'On-Call Availability',
    description: 'Reliable support for buildings without full-time staff'
  },
  {
    icon: Shield,
    title: 'Insured & Professional',
    description: 'Licensed, insured, and background-checked technicians'
  },
  {
    icon: FileCheck,
    title: 'Flexible Agreements',
    description: 'On-call, per unit, or monthly maintenance contracts'
  },
  {
    icon: Calendar,
    title: 'Scheduled Maintenance',
    description: 'Preventive care to avoid costly emergency repairs'
  }
];

const services = [
  {
    icon: Paintbrush,
    title: 'Interior Painting & Touch-ups',
    description: 'Fresh walls for every new tenant'
  },
  {
    icon: Hammer,
    title: 'Drywall Repair & Patching',
    description: 'Holes, cracks, and caulking fixes'
  },
  {
    icon: DoorOpen,
    title: 'Door, Lock & Hardware',
    description: 'Adjustments and replacements'
  },
  {
    icon: Droplets,
    title: 'Minor Plumbing & Electrical',
    description: 'Faucets, outlets, and fixture repairs'
  },
  {
    icon: Tv,
    title: 'TV Mounting & Fixtures',
    description: 'Professional installation services'
  },
  {
    icon: Wrench,
    title: 'General Handyman',
    description: 'Preventive maintenance and repairs'
  }
];

const UnitTurnover = () => {
  return (
    <>
      <SEO 
        title="Unit Turnover & Building Maintenance | All Done Services"
        description="Professional unit turnover and on-call building maintenance for property managers and building owners. Fast turnovers, flexible agreements, and reliable service."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary-dark overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Building2 className="w-4 h-4" />
              Contract & On-Call Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Unit Turnover &<br />
              <span className="text-accent">Building Maintenance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
            >
              We help building owners and property managers keep units move-in ready and buildings running smoothly. From full unit turnovers to on-call maintenance, we act as your reliable maintenance partner when you don't have a dedicated onsite technician.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild variant="hero" size="xl" className="text-lg">
                <a href="#quote">
                  Schedule Free Walkthrough
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="text-lg border-white/30 text-white hover:bg-white/10">
                <a href="tel:+16045551234">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trusted by Property Managers & Building Owners
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you manage a single rental property or a portfolio of buildings, we provide the maintenance support you need without the overhead of full-time staff.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {['Property Managers', 'Building Owners', 'Strata Councils'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 text-center shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Your Reliable Maintenance Partner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges of property management. Our services are designed to minimize vacancy, reduce stress, and keep your buildings in top condition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background rounded-2xl p-6 shadow-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Comprehensive Maintenance Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From unit turnovers to ongoing building maintenance, we handle it all so you can focus on managing your properties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 flex items-start gap-4 shadow-sm border border-border hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Flexible Options</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Choose What Works for You
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'On-Call Service',
                description: 'Pay per job when you need us. Perfect for occasional maintenance needs.',
                features: ['No commitment required', 'Priority scheduling available', 'Emergency response']
              },
              {
                title: 'Per Unit Turnover',
                description: 'Fixed pricing for complete unit turnovers. Budget with confidence.',
                features: ['Complete unit refresh', 'Consistent quality', 'Fast turnaround'],
                featured: true
              },
              {
                title: 'Monthly Agreement',
                description: 'Ongoing maintenance partnership with preferred rates and priority service.',
                features: ['Dedicated support', 'Discounted rates', 'Preventive maintenance']
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  option.featured 
                    ? 'bg-gradient-to-br from-primary to-primary-dark text-white ring-4 ring-accent/30 scale-105' 
                    : 'bg-background border border-border'
                }`}
              >
                <h3 className={`font-heading font-bold text-xl mb-3 ${option.featured ? 'text-white' : 'text-foreground'}`}>
                  {option.title}
                </h3>
                <p className={`mb-6 ${option.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {option.description}
                </p>
                <ul className="space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${option.featured ? 'text-accent' : 'text-primary'}`} />
                      <span className={option.featured ? 'text-white/90' : 'text-foreground'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Simplify Your Building Maintenance?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Schedule a free walkthrough or request a maintenance agreement tailored to your building. Let us show you how we can become your trusted maintenance partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl" className="text-lg">
                <a href="/#quote">
                  Request Free Estimate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="text-lg border-white/30 text-white hover:bg-white/10">
                <a href="tel:+16045551234">
                  <Phone className="w-5 h-5 mr-2" />
                  Speak to a Manager
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UnitTurnover;
