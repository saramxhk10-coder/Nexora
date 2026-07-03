import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MessageSquare, Filter, RotateCcw, CalendarDays, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'AI Lead Capture',
    description: 'Instantly capture inquiries from WhatsApp, Instagram, Facebook ads, Google Ads, your website, and social media. Every message becomes a tracked lead.',
    features: ['WhatsApp Business API', 'Social Media Integration', 'Website Chat Widget', 'Ad Form Auto-Capture'],
  },
  {
    icon: Filter,
    title: 'AI Lead Qualification',
    description: 'Smart conversational AI asks the right questions to identify serious buyers. It determines budget, location preference, property type, and buying timeline.',
    features: ['Conversational Qualification', 'Intent Scoring', 'Budget Assessment', 'Timeline Detection'],
  },
  {
    icon: RotateCcw,
    title: 'Automated Follow-Ups',
    description: 'No lead gets forgotten. The AI sends timely, personalized follow-up messages to nurture prospects until they are ready to buy or book a viewing.',
    features: ['Scheduled Messages', 'Personalized Content', 'Multi-Channel Follow-Up', 'Smart Reminders'],
  },
  {
    icon: CalendarDays,
    title: 'Appointment Booking',
    description: 'Qualified prospects are automatically booked into your sales team calendars. No back-and-forth messaging to find a suitable time.',
    features: ['Calendar Integration', 'Auto-Scheduling', 'Reminder Notifications', 'Rescheduling Support'],
  },
  {
    icon: Database,
    title: 'CRM Updates',
    description: 'All conversations, lead details, and appointment data are automatically organized in your CRM. Your team always has the full picture.',
    features: ['Auto Data Entry', 'Conversation Logs', 'Lead Scoring', 'Pipeline Tracking'],
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    description: 'Built with UAE data protection standards in mind. Secure handling of client information with full conversation audit trails.',
    features: ['Data Encryption', 'Audit Trails', 'GDPR Ready', 'UAE Compliance'],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
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
            What We Do
          </span>
          <h2 className="heading-lg text-white mb-6 text-balance">
            What <span className="gradient-text">NexoraAI</span> Does
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-balance">
            A complete AI automation suite designed specifically for the way UAE real estate businesses operate.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 h-full hover:bg-white/5 transition-all duration-500 gradient-border flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lavender-500/20 to-lavender-600/20 flex items-center justify-center mb-6 group-hover:from-lavender-500/30 group-hover:to-lavender-600/30 transition-all">
                  <service.icon className="w-7 h-7 text-lavender-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-lavender-400" />
                      <span className="text-sm text-white/50">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
