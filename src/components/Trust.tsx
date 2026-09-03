import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, Quote, Building2, Users, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    quote: "NexoraAI transformed how we handle inquiries. Our response time went from hours to seconds, and our agents now only speak to qualified buyers.",
    author: "Ahmed Al-Rashid",
    role: "Managing Director",
    company: "Elite Properties Dubai",
    rating: 5,
  },
  {
    quote: "The WhatsApp automation is incredibly natural. Our clients think they are chatting with a real person. The qualification accuracy is remarkable.",
    author: "Sarah Mitchell",
    role: "Sales Director",
    company: "Marina Heights Realty",
    rating: 5,
  },
  {
    quote: "We were skeptical at first, but the results speak for themselves. Our team is closing more deals with the same number of agents.",
    author: "Khalid Hassan",
    role: "CEO",
    company: "Palm Luxury Estates",
    rating: 5,
  },
];

const metrics = [
  { icon: Building2, label: 'UAE Real Estate Agencies', value: '25+' },
  { icon: Users, label: 'Leads Processed Monthly', value: '10,000+' },
  { icon: MessageSquare, label: 'Conversations Automated', value: '50,000+' },
];

export default function Trust() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="trust" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-dark via-lavender-900/5 to-deep-dark" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-lavender-300 mb-6">
            Client Success
          </span>
          <h2 className="heading-lg text-white mb-6 text-balance">
            Trusted by UAE Real Estate <span className="gradient-text">Professionals</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-balance">
            See what industry leaders say about working with NexoraAI.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 lg:gap-8 mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="glass-strong rounded-2xl p-4 lg:p-6 text-center glow-lavender">
              <metric.icon className="w-6 h-6 text-lavender-400 mx-auto mb-3" />
              <p className="text-2xl lg:text-3xl font-bold gradient-text">{metric.value}</p>
              <p className="text-xs lg:text-sm text-white/50 mt-1">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 h-full hover:bg-white/5 transition-all duration-500 gradient-border flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-lavender-400 fill-lavender-400" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-8 h-8 text-lavender-500/20 mb-4" />
                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-white/10">
                  <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                  <p className="text-white/50 text-xs">{testimonial.role}</p>
                  <p className="text-lavender-400 text-xs mt-0.5">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 lg:mt-24"
        >
          <div className="glass-strong rounded-3xl overflow-hidden glow-lavender">
            <div className="p-4 lg:p-6 border-b border-white/10">
              <p className="text-sm font-semibold text-white">Your Command Center</p>
              <p className="text-xs text-white/50">Real-time overview of all automated conversations</p>
            </div>
            <img 
              src="/images/9_Dark_Mode_AI_Admin_Dashboard_by_Tech.png" 
              alt="NexoraAI Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
