import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative floral blush background details */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#FAF1F0]/50 rounded-full blur-3xl -mr-64 -mt-32" />
      <div className="absolute bottom-12 left-0 w-96 h-96 bg-gold-50/50 rounded-full blur-3xl -ml-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans tracking-[0.3em] text-gold-600 uppercase font-bold mb-2">
            Guest Experiences
          </p>
          <h2 className="text-3xl sm:text-4xl font-cinzel text-[#2C2121] tracking-wide font-normal">
            Client Testimonials
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4 mb-6" />
          <p className="text-neutral-500 font-sans text-sm leading-relaxed">
            Discover what our distinguished guests say about their luxurious experiences, personalized consultations, and exquisite transformations at Farah.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAF7F5] rounded-3xl p-8 sm:p-10 border border-gold-100 shadow-sm relative flex flex-col justify-between group hover:border-gold-300 hover:shadow-md transition-all duration-300"
            >
              {/* Elegant Quote Icon on Background */}
              <div className="absolute top-6 right-8 text-gold-200/40 pointer-events-none group-hover:text-gold-300/40 transition-colors">
                <Quote size={56} />
              </div>

              {/* Main review */}
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      className={i < testimonial.rating ? 'text-gold-500' : 'text-neutral-300'}
                    />
                  ))}
                </div>

                {/* Review comments */}
                <p className="text-neutral-600 font-sans italic text-sm leading-relaxed mb-6 relative z-10">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Client Profile Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gold-200/30">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-300 flex-shrink-0 bg-neutral-200">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#2C2121] tracking-wider uppercase">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-sans text-neutral-400">
                      {testimonial.date}
                    </span>
                    <span className="text-[10px] text-gold-300">•</span>
                    <span className="text-[10px] font-sans text-gold-600 font-semibold uppercase tracking-wider">
                      {testimonial.serviceReceived}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
