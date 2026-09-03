import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MessageSquare, Zap, Brain, CalendarCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Customer Sends Inquiry',
    description: 'A buyer messages your business through WhatsApp, Instagram, Facebook ads, your website, or any other channel. All inquiries flow into one unified system.',
    color: 'from-lavender-400 to-lavender-500',
  },
  {
    step: '02',
    icon: Zap,
    title: 'AI Responds Instantly',
    description: 'Instead of waiting hours for an agent, NexoraAI replies within seconds. It answers common questions about pricing, availability, locations, and property features — 24/7.',
    color: 'from-lavender-500 to-lavender-600',
  },
  {
    step: '03',
    icon: Brain,
    title: 'AI Understands Buyer Intent',
    description: 'The AI asks smart, conversational questions about budget, preferred location, property type, and timeline. It identifies serious buyers from casual browsers.',
    color: 'from-lavender-600 to-lavender-700',
  },
  {
    step: '04',
    icon: CalendarCheck,
    title: 'Sales Team Gets Qualified Leads',
    description: 'Only pre-qualified prospects with clear intent reach your team. They are ready for calls, meetings, or site visits — complete with all the buyer details your agents need.',
    color: 'from-lavender-700 to-deep-purple',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-dark via-lavender-900/10 to-deep-dark" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-lavender-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-lavender-300 mb-6">
            The Process
          </span>
          <h2 className="heading-lg text-white mb-6 text-balance">
            How Our Automation Works
          </h2>
          <p className="text-xl sm:text-2xl text-lavender-300 font-medium mb-4">
            Simple 4-Step Process
          </p>
          <p className="body-lg max-w-2xl mx-auto text-balance">
            No technical knowledge required. We handle the setup so you can focus on closing deals.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-lavender-500/30 via-lavender-400/50 to-lavender-600/30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-strong rounded-2xl p-6 lg:p-8 h-full hover:bg-white/[0.07] transition-all duration-500 group glow-lavender">
                  {/* Step Number */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg shadow-lavender-500/20 group-hover:shadow-lavender-500/40 transition-shadow`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Step Badge */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-3xl font-bold gradient-text">{item.step}</span>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-lavender-500/50 hidden lg:block" />
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>

                {/* Arrow connector - mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center lg:hidden my-4">
                    <ArrowRight className="w-6 h-6 text-lavender-500/50 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <div className="glass-strong rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto glow-lavender-strong">
            <div className="w-16 h-16 rounded-full bg-lavender-500/20 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-lavender-400" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-balance">
              Your team spends less time chasing leads and more time closing deals.
            </h3>
            <p className="text-white/60 text-lg">
              That is the power of intelligent automation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
