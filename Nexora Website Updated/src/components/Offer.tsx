import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';

const offerFeatures = [
  'Instant lead response on WhatsApp',
  'Smart qualification conversations',
  'Automated follow-up sequences',
  'Direct calendar booking integration',
  'CRM sync with your existing tools',
  'Multi-language support (English & Arabic)',
  'Custom conversation flows for your properties',
  'Real-time lead notifications to your team',
];

export default function Offer() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offer" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-dark via-lavender-900/10 to-deep-dark" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-lavender-300 mb-6">
              Our Initial Offer
            </span>
            <h2 className="heading-lg text-white mb-6 text-balance">
              WhatsApp Automation for{' '}
              <span className="gradient-text">Real Estate Businesses</span>
            </h2>
            <p className="body-lg mb-8 text-balance">
              We currently specialize in one thing and we do it exceptionally well: 
              WhatsApp-based AI automation designed specifically for UAE real estate agencies, 
              brokers, and property developers.
            </p>

            <div className="space-y-4 mb-10">
              {offerFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-lavender-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-lavender-400" />
                  </div>
                  <span className="text-white/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={scrollToContact}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="glass-strong rounded-3xl p-4 glow-lavender max-w-sm mx-auto">
                <div className="bg-white/5 rounded-2xl overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">NexoraAI Assistant</p>
                      <p className="text-green-400 text-xs">Online</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 bg-[#0b141a]/80 min-h-[320px]">
                    {/* AI Message */}
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-lavender-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-lavender-300 text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-[#202c33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                        <p className="text-white/90 text-xs leading-relaxed">
                          Hello! Welcome to [Agency Name]. I can help you find your dream property in Dubai. 
                          What type of property are you looking for?
                        </p>
                        <p className="text-white/40 text-[10px] mt-1">10:32 AM</p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-2 justify-end">
                      <div className="bg-lavender-600/30 rounded-lg rounded-tr-none px-3 py-2 max-w-[80%]">
                        <p className="text-white/90 text-xs leading-relaxed">
                          I am looking for a 2-bedroom apartment in Dubai Marina
                        </p>
                        <p className="text-white/40 text-[10px] mt-1 text-right">10:33 AM</p>
                      </div>
                    </div>

                    {/* AI Message */}
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-lavender-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-lavender-300 text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-[#202c33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                        <p className="text-white/90 text-xs leading-relaxed">
                          Great choice! Dubai Marina has excellent options. What is your budget range?
                        </p>
                        <div className="flex gap-2 mt-2">
                          <span className="px-2 py-1 bg-lavender-500/20 rounded text-lavender-300 text-[10px]">AED 1-2M</span>
                          <span className="px-2 py-1 bg-lavender-500/20 rounded text-lavender-300 text-[10px]">AED 2-3M</span>
                          <span className="px-2 py-1 bg-lavender-500/20 rounded text-lavender-300 text-[10px]">AED 3M+</span>
                        </div>
                        <p className="text-white/40 text-[10px] mt-1">10:33 AM</p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-lavender-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-lavender-300 text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-[#202c33] rounded-lg rounded-tl-none px-3 py-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-strong rounded-xl px-4 py-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-sm font-semibold text-white">Lead Qualified</p>
                <p className="text-xs text-lavender-400">Ready for agent handoff</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
