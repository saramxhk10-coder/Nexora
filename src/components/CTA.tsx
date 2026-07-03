import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Calendar, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-lavender-50/20 to-white z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url(/images/dubai-marina-luxury.png)' }}
        />
      </div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-lavender-700 mb-6">
              Get Started
            </span>
            <h2 className="heading-lg text-deep-dark mb-6 text-balance">
              Ready to Stop{' '}
              <span className="gradient-text">Losing Leads?</span>
            </h2>
            <p className=" text-lavender-600 body-lg mb-8 text-balance">
              Turn every inquiry into an opportunity with AI automation. 
              Book your free consultation and see how NexoraAI can transform 
              your real estate business.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg shadow-lavender-500/5 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-lavender-50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-lavender-600" />
                </div>
                <div>
                  <p className="text-deep-dark font-medium text-sm">Free 30-Minute Demo</p>
                  <p className="text-gray-400 text-xs">See the system in action on your properties</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg shadow-lavender-500/5 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-lavender-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-lavender-600" />
                </div>
                <div>
                  <p className="text-deep-dark font-medium text-sm">No Commitment Required</p>
                  <p className="text-gray-400 text-xs">Explore the solution with zero obligation</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg shadow-lavender-500/5 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-lavender-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-lavender-600" />
                </div>
                <div>
                  <p className="text-deep-dark font-medium text-sm">Custom Setup Included</p>
                  <p className="text-gray-400 text-xs">We configure everything for your specific needs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 glow-lavender shadow-2xl shadow-lavender-500/10 border border-gray-100">
              <h3 className="text-2xl font-bold text-deep-dark mb-2">Get In Touch</h3>
              <p className="  text-lavender-600 text-sm mb-8">Ready to transform your lead management? Reach out to us.</p>
              
              <div className="space-y-6">
                <a href="mailto:hello@nexoraai.store" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-lavender-50 flex items-center justify-center group-hover:bg-lavender-100 transition-colors">
                    <Mail className="w-5 h-5 text-lavender-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="text-deep-dark font-medium">muhammad.saram@nexoraia.store</p>
                  </div>
                </a>

                <a href="tel:+971501234567" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-lavender-50 flex items-center justify-center group-hover:bg-lavender-100 transition-colors">
                    <Phone className="w-5 h-5 text-lavender-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="text-deep-dark font-medium">+923002502926</p>
                  </div>
                </a>

                <a href="https://wa.me/923002502926" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-deep-dark font-medium">Chat with us</p>
                  </div>
                </a>

                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-lavender-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-lavender-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-deep-dark font-medium">United Arab Emirates</p>
                  </div>
                </div> */}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a 
                  href="https://calendly.com/nexoraai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}