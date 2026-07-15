import { Check, Flame, Crown, Heart } from 'lucide-react';
import { PRICING_PACKAGES } from '../data';

interface PricingProps {
  onBookPackage: (packageName: string) => void;
}

export default function Pricing({ onBookPackage }: PricingProps) {
  return (
    <section className="py-24 bg-[#FAF7F5] relative overflow-hidden">
      {/* Visual luxury ambient lights */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl -ml-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans tracking-[0.3em] text-gold-600 uppercase font-bold mb-2">
            Curated Indulgence
          </p>
          <h2 className="text-3xl sm:text-4xl font-cinzel text-[#2C2121] tracking-wide font-normal">
            Beauty Packages & Pricing
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4 mb-6" />
          <p className="text-neutral-500 font-sans text-sm leading-relaxed">
            Experience our bespoke treatment configurations crafted to revitalize your beauty, soothe your senses, and offer premium value for any special occasion.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-8 border relative flex flex-col justify-between transition-all duration-300 shadow-sm ${
                pkg.isPopular
                  ? 'border-gold-500 ring-2 ring-gold-200 lg:scale-105 z-10 hover:shadow-xl'
                  : 'border-gold-100 hover:border-gold-300 hover:shadow-md'
              }`}
            >
              {/* Popular Ribbon Accent */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white font-sans text-[10px] tracking-widest uppercase font-bold py-1.5 px-4 rounded-full flex items-center gap-1.5 shadow-md">
                  <Crown size={11} />
                  <span>Most Popular Package</span>
                </div>
              )}

              {/* Package Header */}
              <div>
                <div className="mb-6">
                  <h3 className="font-cinzel text-xl font-bold text-[#2C2121] mb-2 tracking-wide text-center">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans text-center min-h-[32px] px-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline justify-center gap-2 mb-8 bg-gold-50/50 py-4 rounded-2xl border border-gold-100">
                  {pkg.originalPrice && (
                    <span className="text-base text-neutral-400 line-through font-serif">
                      {pkg.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-serif font-bold text-gold-600">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-neutral-500 font-sans tracking-wide">
                    / session
                  </span>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold-50 border border-gold-200/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-gold-600" />
                      </div>
                      <span className="text-xs text-neutral-600 font-sans leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA Button */}
              <button
                onClick={() => onBookPackage(pkg.name)}
                className={`w-full py-3.5 rounded-full font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-gold-500 hover:bg-gold-600 text-white hover:shadow-md'
                    : 'bg-white hover:bg-[#FAF1F0] text-gold-600 border border-gold-300 hover:border-gold-400'
                }`}
              >
                Book Package Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
