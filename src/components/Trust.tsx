import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Database, MessageSquare, Route } from 'lucide-react';

const proofPoints = [
  { icon: MessageSquare, title: 'Natural lead conversations', copy: 'Questions and replies follow your business rules, tone, and qualification criteria.' },
  { icon: Database, title: 'Structured lead records', copy: 'Key details move into your sheet or CRM so agents have context before they respond.' },
  { icon: Route, title: 'Built around your workflow', copy: 'The system connects to the tools and handover process your team already uses.' },
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
            Built for Real Operations
          </span>
          <h2 className="heading-lg text-white mb-6 text-balance">
            Automation Your Team Can <span className="gradient-text">Actually Use</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-balance">
            Clear handovers, organised information, and fewer repetitive tasks between enquiry and agent follow-up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 h-full hover:bg-white/5 transition-all duration-500 gradient-border flex flex-col">
                <point.icon className="w-9 h-9 text-lavender-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{point.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
