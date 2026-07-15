import { motion } from 'motion/react';
import { Calendar, Eye, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onBookClick, onServicesClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden luxury-gradient">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-100/30 rounded-full blur-3xl -mr-64 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FAF1F0]/80 rounded-full blur-3xl -ml-48 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Elegant luxury tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gold-100/60 border border-gold-200/50 px-4 py-1.5 rounded-full mb-6"
            >
              <Sparkles size={14} className="text-gold-600 animate-pulse" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-gold-700">
                Welcome to Luxury Beauty
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel font-normal tracking-wide text-[#2C2121] leading-tight mb-6">
              Enhancing Your <br />
              <span className="font-serif italic font-medium text-gold-600 relative inline-block">
                Natural Beauty
                {/* Custom golden line accent */}
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gold-400" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-neutral-600 font-sans max-w-xl leading-relaxed mb-8">
              Professional Hair, Makeup, Skincare & Beauty Services. Experience unmatched indulgence with custom formulas in a relaxing luxury environment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="bg-gold-500 hover:bg-gold-600 text-white font-sans text-sm tracking-widest uppercase font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>
              
              <button
                onClick={onServicesClick}
                className="border-2 border-gold-500 text-[#2C2121] hover:text-white hover:bg-gold-500 font-sans text-sm tracking-widest uppercase font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2.5 cursor-pointer bg-white/50 backdrop-blur-sm"
              >
                <Eye size={18} />
                <span>View Services</span>
              </button>
            </div>

            {/* Micro stats banner for credibility */}
            <div className="mt-12 pt-8 border-t border-gold-200/40 w-full grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl font-cinzel text-gold-700 font-bold">10k+</p>
                <p className="text-xs tracking-wider uppercase text-neutral-500 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-cinzel text-gold-700 font-bold">15+</p>
                <p className="text-xs tracking-wider uppercase text-neutral-500 mt-1">Beauticians</p>
              </div>
              <div>
                <p className="text-2xl font-cinzel text-gold-700 font-bold">4.9★</p>
                <p className="text-xs tracking-wider uppercase text-neutral-500 mt-1">Google Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Banner Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant frame decoration */}
            <div className="absolute -inset-3 border border-gold-300 rounded-3xl -rotate-2 scale-[1.02] pointer-events-none" />
            <div className="absolute -inset-3 border border-gold-100 rounded-3xl rotate-2 pointer-events-none" />

            {/* Main Visual Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-[#FAF1F0]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                alt="Farah Beauty Salon Interior"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Gold gradient vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2121]/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Small floating testimonial banner */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-gold-500">
                <div className="flex gap-1 text-gold-500 mb-1">
                  {"★".repeat(5)}
                </div>
                <p className="text-xs text-neutral-600 font-serif italic">
                  "The finest beauty oasis in Beverly Hills. Exceptionally clean and highly professional!"
                </p>
                <p className="text-[10px] font-sans font-bold tracking-widest text-[#2C2121] uppercase mt-2">
                  — Sophia Loren, Client
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
