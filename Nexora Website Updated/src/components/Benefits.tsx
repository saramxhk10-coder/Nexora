import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Clock, Zap, TrendingUp, Hand, Calendar, Scale } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: '24/7 Instant Replies',
    description: 'Your AI assistant never sleeps. Every inquiry gets an immediate response, day or night, weekends and holidays included.',
  },
  {
    icon: Zap,
    title: 'Faster Lead Response',
    description: 'Respond to leads in seconds instead of hours. Speed is the single biggest factor in converting online inquiries into appointments.',
  },
  {
    icon: TrendingUp,
    title: 'Higher Conversion Rates',
    description: 'By qualifying leads before they reach your team, you focus energy on prospects who are actually ready to buy.',
  },
  {
    icon: Hand,
    title: 'Less Manual Work',
    description: 'Automate repetitive tasks like answering FAQs, scheduling viewings, and updating CRM records. Your team focuses on selling.',
  },
  {
    icon: Calendar,
    title: 'More Qualified Appointments',
    description: 'Every meeting on your calendar is with a pre-qualified buyer who knows what they want and has the budget for it.',
  },
  {
    icon: Scale,
    title: 'Scalable Growth',
    description: 'Handle 10x more inquiries without hiring 10x more staff. Your automation scales with your marketing and lead generation.',
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="benefits" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-dark via-deep-dark/95 to-deep-dark z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: 'url(/images/3_Luxury_Penthouse_at_Dubai_Marina.png)' }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-lavender-300 mb-6">
            Why Choose Us
          </span>
          <h2 className="heading-lg text-white mb-6 text-balance">
            Why Real Estate Businesses Choose <span className="gradient-text">NexoraAI</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-balance">
            Built from the ground up for the unique demands of the UAE property market.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 h-full hover:bg-white/5 transition-all duration-500 gradient-border">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-lavender-500/10 flex items-center justify-center mb-5 group-hover:bg-lavender-500/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-lavender-400" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
