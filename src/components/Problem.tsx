import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MessageSquareOff, Clock, Repeat, AlertTriangle, Users, TrendingDown } from 'lucide-react';

const painPoints = [
  {
    icon: MessageSquareOff,
    title: 'Leads Get Ignored',
    description: 'Inquiries from multiple sources pile up and go unanswered. Every missed message is a lost opportunity.',
    stat: 'Up to 50%',
    statLabel: 'of leads never receive a response',
  },
  {
    icon: Clock,
    title: 'Slow Response Time',
    description: 'Buyers expect instant replies. When they wait hours, they move on to your competitors.',
    stat: '5x Less Likely',
    statLabel: 'to convert after 1 hour delay',
  },
  {
    icon: Repeat,
    title: 'Repetitive Questions',
    description: 'Agents waste hours every day answering the same questions about pricing, availability, and locations.',
    stat: '3-4 Hours',
    statLabel: 'wasted daily on repetitive tasks',
  },
  {
    icon: AlertTriangle,
    title: 'Inconsistent Follow-Up',
    description: 'Without a system, leads fall through the cracks. No follow-up means no deal.',
    stat: '80% of Sales',
    statLabel: 'require 5+ follow-up touches',
  },
  {
    icon: Users,
    title: 'Unqualified Leads',
    description: 'Your team spends time on tire-kickers instead of serious buyers ready to invest.',
    stat: '70% of Inquiries',
    statLabel: 'are low-quality or not ready to buy',
  },
  {
    icon: TrendingDown,
    title: 'Revenue Leakage',
    description: 'Every missed lead and delayed response costs your business real money in lost commissions.',
    stat: 'AED 50K+',
    statLabel: 'potential revenue lost monthly',
  },
];

export default function Problem() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="problems" className="relative py-24 lg:py-32 overflow-hidden">
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
            The Challenge
          </span>
          <h2 className="heading-lg text-white mb-6 text-balance">
            Why Real Estate Teams <span className="gradient-text">Lose Revenue</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-balance">
            The traditional way of handling leads is broken. Here is what is actually happening 
            behind the scenes in most UAE real estate agencies.
          </p>
        </motion.div>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 h-full hover:bg-white/5 transition-all duration-500 gradient-border">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-lavender-500/10 flex items-center justify-center mb-5 group-hover:bg-lavender-500/20 transition-colors">
                  <point.icon className="w-6 h-6 text-lavender-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{point.description}</p>

                {/* Stat */}
                <div className="pt-5 border-t border-white/10">
                  <p className="text-2xl font-bold gradient-text">{point.stat}</p>
                  <p className="text-sm text-white/50 mt-1">{point.statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
