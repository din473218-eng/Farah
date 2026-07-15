import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onBookService: (serviceId: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'makeup' | 'skincare' | 'nails' | 'other'>('all');

  // Helper to dynamically get Lucide icons by name
  const renderIcon = (iconName: string) => {
    // Map custom naming safely to avoid runtime errors
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent size={20} className="text-gold-600" />;
    }
    return <Icons.Sparkles size={20} className="text-gold-600" />;
  };

  const categories = [
    { label: 'All Services', value: 'all' },
    { label: 'Hair Styling', value: 'hair' },
    { label: 'Makeup Artistry', value: 'makeup' },
    { label: 'Skincare', value: 'skincare' },
    { label: 'Nails', value: 'nails' },
    { label: 'Waxing & Shaping', value: 'other' },
  ] as const;

  const filteredServices = activeFilter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeFilter);

  return (
    <section className="py-24 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans tracking-[0.3em] text-gold-600 uppercase font-bold mb-2">
            Our Signature Offerings
          </p>
          <h2 className="text-3xl sm:text-4xl font-cinzel text-[#2C2121] tracking-wide font-normal">
            Bespoke Salon Services
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4 mb-6" />
          <p className="text-neutral-500 font-sans text-sm leading-relaxed">
            From precision coloring to advanced cellular skincare, we offer a comprehensive suite of premium treatments designed to bring out your absolute best self.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === category.value
                  ? 'bg-gold-500 text-white shadow-md'
                  : 'bg-white border border-gold-200 text-neutral-600 hover:border-gold-400 hover:bg-gold-50/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Entry Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gold-100 flex flex-col group h-full"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Label */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-gold-200/50 px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase font-bold text-gold-700">
                    {service.category === 'other' ? 'Other' : service.category}
                  </div>
                  {/* Glassmorphism Icon */}
                  <div className="absolute -bottom-6 right-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-gold-100 z-10">
                    {renderIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <h3 className="font-cinzel text-lg text-[#2C2121] group-hover:text-gold-600 transition-colors duration-300 font-bold leading-snug">
                        {service.name}
                      </h3>
                      <span className="text-lg font-serif font-bold text-gold-600 whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    
                    <p className="text-xs text-neutral-500 font-sans leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Footing detail & button */}
                  <div className="border-t border-neutral-100 pt-4 flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-sans text-[11px] tracking-wider uppercase">
                      <Icons.Clock size={12} className="text-gold-400" />
                      <span>{service.duration}</span>
                    </div>
                    
                    <button
                      onClick={() => onBookService(service.id)}
                      className="text-gold-600 hover:text-gold-700 font-sans text-xs tracking-widest uppercase font-bold flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Book Service</span>
                      <Icons.ChevronRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Fallback (just in case) */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gold-200">
            <p className="text-neutral-500 font-sans">No services available in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}
