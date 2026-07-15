import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  onBookClick: () => void;
  onServicesClick: () => void;
  onAboutClick: () => void;
  onGalleryClick: () => void;
  onWhyChooseClick: () => void;
  onTestimonialsClick: () => void;
  onPricingClick: () => void;
  onContactClick: () => void;
}

export default function Navbar({
  onBookClick,
  onServicesClick,
  onAboutClick,
  onGalleryClick,
  onWhyChooseClick,
  onTestimonialsClick,
  onPricingClick,
  onContactClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', onClick: onAboutClick },
    { label: 'Services', onClick: onServicesClick },
    { label: 'Why Us', onClick: onWhyChooseClick },
    { label: 'Gallery', onClick: onGalleryClick },
    { label: 'Pricing', onClick: onPricingClick },
    { label: 'Reviews', onClick: onTestimonialsClick },
    { label: 'Contact', onClick: onContactClick },
  ];

  const handleMobileNavClick = (onClick: () => void) => {
    setIsMobileMenuOpen(false);
    // Tiny delay to let the menu close smoothly before scrolling
    setTimeout(() => {
      onClick();
    }, 300);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-gold-100'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.15em] text-[#2C2121]">
                FARAH
              </span>
              <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] ml-2 text-gold-500 font-medium">
                BEAUTY
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="font-sans text-sm tracking-widest uppercase text-neutral-600 hover:text-gold-600 transition-colors cursor-pointer font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneDial}`}
                className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-neutral-700 hover:text-gold-600 transition-colors font-medium border border-gold-200 hover:border-gold-400 px-4 py-2 rounded-full"
              >
                <Phone size={14} className="text-gold-500" />
                <span>Call Now</span>
              </a>
              <button
                onClick={onBookClick}
                className="bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs tracking-widest uppercase font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-700 hover:text-gold-500 p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white p-6 shadow-xl flex flex-col z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-700 hover:text-gold-500 p-2"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col space-y-6 mb-12">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleMobileNavClick(item.onClick)}
                    className="text-left font-sans text-base tracking-widest uppercase text-neutral-700 hover:text-gold-500 transition-colors border-b border-neutral-100 pb-2 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* CTA Buttons for Mobile */}
              <div className="flex flex-col space-y-4 mt-auto">
                <a
                  href={`tel:${BUSINESS_INFO.phoneDial}`}
                  className="flex items-center justify-center gap-3 font-sans text-sm tracking-widest uppercase text-neutral-800 border border-gold-300 py-3 rounded-full hover:bg-gold-50 font-semibold"
                >
                  <Phone size={16} className="text-gold-500" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <button
                  onClick={() => handleMobileNavClick(onBookClick)}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white font-sans text-sm tracking-widest uppercase font-semibold py-3.5 rounded-full shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  <span>Book Appointment</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
