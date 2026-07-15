import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'makeup' | 'nails' | 'skincare' | 'interior'>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Hair', value: 'hair' },
    { label: 'Makeup', value: 'makeup' },
    { label: 'Nails', value: 'nails' },
    { label: 'Skincare', value: 'skincare' },
    { label: 'Salon Interior', value: 'interior' },
  ] as const;

  const filteredItems = activeFilter === 'all'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans tracking-[0.3em] text-gold-600 uppercase font-bold mb-2">
            Visual Inspiration
          </p>
          <h2 className="text-3xl sm:text-4xl font-cinzel text-[#2C2121] tracking-wide font-normal">
            Our Luxury Gallery
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4 mb-6" />
          <p className="text-neutral-500 font-sans text-sm leading-relaxed">
            Witness the art of elegant transformations. A curated look at our real client makeovers, custom hair aesthetics, and serene physical sanctuary.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-4 py-2 rounded-full font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === option.value
                  ? 'bg-gold-500 text-white shadow-sm'
                  : 'bg-white border border-gold-200/50 text-neutral-600 hover:border-gold-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-gold-100"
                onClick={() => setLightboxImage(item)}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#2C2121]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <ZoomIn size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans tracking-widest uppercase font-bold text-gold-300 mb-1 block">
                      {item.category === 'interior' ? 'Interior' : item.category}
                    </span>
                    <h3 className="font-cinzel text-sm font-semibold text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 font-sans">No items available in this category.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#2C2121] border border-white/10 max-h-[70vh] flex items-center justify-center">
                <img
                  src={lightboxImage.imageUrl}
                  alt={lightboxImage.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title Overlay Info */}
              <div className="mt-4 text-center">
                <span className="text-[10px] font-sans tracking-widest uppercase font-bold text-gold-400 mb-1 block">
                  {lightboxImage.category}
                </span>
                <h3 className="font-cinzel text-lg text-white font-semibold tracking-wide">
                  {lightboxImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
