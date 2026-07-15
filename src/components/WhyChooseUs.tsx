import * as Icons from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent size={24} className="text-gold-600" />;
    }
    return <Icons.Sparkles size={24} className="text-gold-600" />;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative luxury circles */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FAF1F0]/40 rounded-full blur-3xl -mr-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans tracking-[0.3em] text-gold-600 uppercase font-bold mb-2">
            Why Farah Beauty
          </p>
          <h2 className="text-3xl sm:text-4xl font-cinzel text-[#2C2121] tracking-wide font-normal">
            An Unparalleled Luxury Experience
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4 mb-6" />
          <p className="text-neutral-500 font-sans text-sm leading-relaxed">
            We transcend standard cosmetic pampering. By blending professional precision with an immersive oasis of tranquility, we ensure every reservation becomes a memorable escape.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF7F5] rounded-2xl p-8 border border-gold-100 hover:border-gold-300 transition-all duration-300 hover:shadow-lg group"
            >
              {/* Icon container with border */}
              <div className="w-12 h-12 rounded-xl bg-white border border-gold-200/60 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-gold-50 transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-base font-bold text-[#2C2121] mb-3 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
