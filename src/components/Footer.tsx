import { MessageCircle, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto section-padding py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-5">
              <img src="/nexora-mark.png" alt="NexoraAI" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-deep-dark">
                Nexora<span className="gradient-text">AI</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI-powered automation for UAE real estate businesses. 
              Capture leads, qualify buyers, and book appointments — 24/7.
            </p>
            <div className="flex gap-3">
              <a href="www.linkedin.com/in/saram-sheikh10" className="w-10 h-10 rounded-xl bg-lavender-50 flex items-center justify-center hover:bg-lavender-100 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-xl bg-lavender-50 flex items-center justify-center hover:bg-lavender-100 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-lavender-50 flex items-center justify-center hover:bg-lavender-100 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400" />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-deep-dark font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {['AI Lead Capture', 'Lead Qualification', 'Automated Follow-Ups', 'Appointment Booking', 'CRM Integration'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 text-sm hover:text-lavender-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-deep-dark font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'How It Works', 'Case Studies', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:text-lavender-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-deep-dark font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-lavender-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">muhammad.saram@nexoraia.store</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-lavender-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">+923002502926</span>
              </li>
              {/* <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lavender-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Dubai, United Arab Emirates</span>
              </li> */}
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/923002502926" target="_blank" rel="noopener noreferrer" className="text-green-600 text-sm hover:underline">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} NexoraAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 text-sm hover:text-gray-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 text-sm hover:text-gray-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}