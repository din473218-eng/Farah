import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* Floating Call Now (Expands on Hover) */}
      <a
        href={`tel:${BUSINESS_INFO.phoneDial}`}
        className="flex items-center gap-2 bg-gold-500 text-white hover:bg-gold-600 px-4 py-3 rounded-full shadow-lg transition-all duration-300 group max-w-[50px] hover:max-w-[200px] overflow-hidden whitespace-nowrap cursor-pointer self-end"
      >
        <Phone size={18} className="flex-shrink-0 animate-pulse" />
        <span className="font-sans text-xs tracking-wider uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Call {BUSINESS_INFO.phone}
        </span>
      </a>

      {/* Floating WhatsApp Chat */}
      <a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-300 relative group self-end"
        aria-label="WhatsApp Salon Support"
      >
        {/* Glow pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping -z-10" />
        <MessageCircle size={22} fill="currentColor" />
        
        {/* Custom tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#2C2121] text-white text-[10px] tracking-widest uppercase font-bold py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10">
          Chat With Us
        </span>
      </a>
    </div>
  );
}
