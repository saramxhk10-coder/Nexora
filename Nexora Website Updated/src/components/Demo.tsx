import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Sheet, Timer } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  { icon: MessageCircle, text: 'Responds to a new enquiry automatically' },
  { icon: CheckCircle2, text: 'Collects the lead details your agents need' },
  { icon: Sheet, text: 'Adds structured information to your lead sheet' },
  { icon: Timer, text: 'Keeps the process moving without manual data entry' },
];

export default function Demo() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="demo" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-lavender-50/70 to-white" />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-[360px]"
          >
            <div className="rounded-[2rem] bg-deep-dark p-2.5 shadow-2xl shadow-lavender-500/25 ring-1 ring-lavender-200">
              <video
                className="w-full rounded-[1.45rem] bg-black aspect-[9/16]"
                controls
                playsInline
                preload="metadata"
                poster="/media/nexora-demo-poster.jpg"
                aria-label="Nexora lead automation demonstration"
              >
                <source src="/media/nexora-demo.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-flex px-4 py-1.5 rounded-full bg-lavender-100 text-sm font-medium text-lavender-700 mb-6">
              Live System Walkthrough · 1:28
            </span>
            <h2 className="heading-lg text-deep-dark mb-6 text-balance">
              See Nexora handle a lead <span className="gradient-text">from chat to sheet</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This real workflow shows how an incoming lead conversation is handled and how the information is automatically organised for the sales team.
            </p>
            <div className="space-y-4 mb-9">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-lavender-700" />
                  </span>
                  <span className="text-deep-dark font-medium">{text}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary inline-flex items-center justify-center">
              Discuss This System for Your Business
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
