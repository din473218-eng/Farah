import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Share2, Sparkles, X, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

interface FooterProps {
  onServicesClick: () => void;
  onAboutClick: () => void;
  onGalleryClick: () => void;
  onWhyChooseClick: () => void;
  onTestimonialsClick: () => void;
  onPricingClick: () => void;
  onContactClick: () => void;
}

export default function Footer({
  onServicesClick,
  onAboutClick,
  onGalleryClick,
  onWhyChooseClick,
  onTestimonialsClick,
  onPricingClick,
  onContactClick,
}: FooterProps) {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { label: 'About Our Salon', onClick: onAboutClick },
    { label: 'Bespoke Services', onClick: onServicesClick },
    { label: 'Why Choose Us', onClick: onWhyChooseClick },
    { label: 'Inspiration Gallery', onClick: onGalleryClick },
    { label: 'Pricing Packages', onClick: onPricingClick },
    { label: 'Guest Reviews', onClick: onTestimonialsClick },
    { label: 'Contact Location', onClick: onContactClick },
  ];

  // Pick 5 unique services to display in footer list
  const footerServices = SERVICES.slice(0, 5);

  return (
    <footer className="bg-[#2C2121] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Subtle bottom glowing lights */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info Block (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <span className="font-cinzel text-xl font-bold tracking-[0.15em] text-white">
                FARAH
              </span>
              <span className="font-cinzel text-xs tracking-[0.3em] ml-2 text-gold-400 font-medium">
                BEAUTY
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
              An elegant sanctuary in Beverly Hills dedicated to enhancing your natural aesthetics. Experience world-class styling, luxury organic facials, and high-fashion makeup artistry.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-gold-400 hover:bg-gold-500 hover:text-white transition-all flex items-center justify-center text-neutral-300"
                aria-label="Instagram Profile"
              >
                <Instagram size={16} />
              </a>
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-gold-400 hover:bg-gold-500 hover:text-white transition-all flex items-center justify-center text-neutral-300"
                aria-label="Facebook Profile"
              >
                <Facebook size={16} />
              </a>
              <a
                href={BUSINESS_INFO.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-gold-400 hover:bg-gold-500 hover:text-white transition-all flex items-center justify-center text-neutral-300"
                aria-label="Pinterest Profile"
              >
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Block (3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-cinzel text-xs font-bold tracking-widest text-gold-400 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-xs text-neutral-400">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={link.onClick}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronRight size={12} className="text-gold-500/60" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Block (3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-cinzel text-xs font-bold tracking-widest text-gold-400 uppercase">
              Key Offerings
            </h4>
            <ul className="space-y-3 font-sans text-xs text-neutral-400">
              {footerServices.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={onServicesClick}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer text-left"
                  >
                    <ChevronRight size={12} className="text-gold-500/60" />
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Location Short (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-cinzel text-xs font-bold tracking-widest text-gold-400 uppercase">
              The Oasis
            </h4>
            <div className="space-y-4 font-sans text-xs text-neutral-400">
              <div className="flex gap-2 items-start">
                <MapPin size={12} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={12} className="text-gold-500 flex-shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-neutral-500">
          <p>© {new Date().getFullYear()} Farah Beauty Salon. All rights reserved.</p>
          
          <div className="flex gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-gold-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-gold-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Privacy / Terms modal popups */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-white text-neutral-800 max-w-xl w-full rounded-2xl p-6 sm:p-8 shadow-xl max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 p-2"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              {activeModal === 'privacy' ? (
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#2C2121] mb-4">
                    Privacy Policy
                  </h3>
                  <div className="space-y-4 font-sans text-xs text-neutral-600 leading-relaxed">
                    <p><strong>Effective Date:</strong> July 15, 2026</p>
                    <p>At Farah Beauty Salon, accessible from our application portal, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Farah Beauty Salon and how we use it.</p>
                    <p><strong>1. Information We Collect</strong></p>
                    <p>We only collect name, email address, phone number, and preferences which you actively submit when reserving a beauty session. This information is saved strictly in your client-side browser storage (localStorage) or utilized temporarily to populate scheduling drafts.</p>
                    <p><strong>2. Third-Party Services</strong></p>
                    <p>We do not sell, trade, or transfer your contact parameters or session history to external marketing agencies or profiling suites.</p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#2C2121] mb-4">
                    Terms of Service
                  </h3>
                  <div className="space-y-4 font-sans text-xs text-neutral-600 leading-relaxed">
                    <p><strong>Last Updated:</strong> July 15, 2026</p>
                    <p>By scheduling an appointment at Farah Beauty Salon, you acknowledge and agree to the following operational parameters:</p>
                    <p><strong>1. Reservations & Grace Period</strong></p>
                    <p>We operate on a rigid reservation map. To ensure premium hospitality for every client, we offer a 15-minute grace period. If you arrive later than 15 minutes, we may offer a truncated version of your service or reschedule.</p>
                    <p><strong>2. Cancellations</strong></p>
                    <p>Please use our online portal, or message our WhatsApp line at least 2 hours in advance if you need to reschedule or cancel your session.</p>
                  </div>
                </div>
              )}

              <button
                onClick={() => setActiveModal(null)}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs tracking-widest uppercase font-bold py-3.5 rounded-xl mt-8 cursor-pointer"
              >
                Close Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
