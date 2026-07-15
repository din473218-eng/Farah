import { motion } from 'motion/react';
import { Sparkles, Users, Award, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function About() {
  const corePillars = [
    {
      title: 'Experienced Beauticians',
      description: 'Our team consists of highly trained and licensed professionals with decades of combined global experience in aesthetics.',
      icon: Users,
    },
    {
      title: 'Premium Beauty Products',
      description: 'We use exclusive organic, cruelty-free, and high-performance products from world-renowned luxury brands.',
      icon: Sparkles,
    },
    {
      title: 'Hygienic Environment',
      description: 'We follow hospital-grade sanitization protocols for all tools, equipment, and salon surfaces for your absolute peace of mind.',
      icon: ShieldCheck,
    },
    {
      title: 'Personalized Care',
      description: 'No two clients are identical. We curate and custom-tailor each skin, makeup, and hair experience to match your unique self.',
      icon: Award,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-gold-50 rounded-full blur-3xl -ml-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Layered Images */}
          <div className="relative">
            {/* Background luxury gold border block */}
            <div className="absolute -bottom-6 -left-6 w-1/2 h-2/3 border border-gold-300 rounded-2xl pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-1/2 h-2/3 border border-gold-200 rounded-2xl pointer-events-none" />

            {/* Main Overlap Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square bg-gold-50">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                alt="Stylist washing clients hair"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Small Overlay Image Card */}
            <div className="absolute -bottom-8 right-6 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-gold-100 hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80"
                alt="Client facial skincare"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Elegant Header */}
            <div className="mb-6">
              <p className="text-sm font-sans tracking-[0.3em] text-gold-600 uppercase font-bold mb-2">
                Discover Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-cinzel text-[#2C2121] tracking-wide font-normal">
                About Farah Beauty Salon
              </h2>
              <div className="w-16 h-[2px] bg-gold-400 mt-4" />
            </div>

            {/* Biography */}
            <p className="text-neutral-600 font-sans leading-relaxed mb-6">
              {BUSINESS_INFO.description}
            </p>
            <p className="text-neutral-600 font-sans leading-relaxed mb-8">
              Founded on the belief that beauty should empower and elevate, Farah Beauty Salon has been Beverly Hills’ premium sanctuary for over a decade. We combine advanced cosmetic science with time-honored organic remedies to treat your hair, skin, and nails with the reverence they deserve.
            </p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FAF1F0] border border-gold-200 flex items-center justify-center">
                      <Icon size={18} className="text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-cinzel text-sm font-bold text-[#2C2121] mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
