import { Service, GalleryItem, Testimonial, PricingPackage } from './types';

export const SERVICES: Service[] = [
  {
    id: 'haircut-styling',
    name: 'Haircuts & Styling',
    category: 'hair',
    description: 'Precision cuts, personalized blowouts, and artistic styling tailored to accentuate your unique features and reflect your individual aesthetic.',
    duration: '45 - 60 mins',
    price: '$75+',
    iconName: 'Scissors',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair-coloring',
    name: 'Hair Coloring',
    category: 'hair',
    description: 'Expert custom balayage, high-definition highlights, and flawless root cover-ups using premium, nourishing hair-dye formulas.',
    duration: '120 - 180 mins',
    price: '$150+',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair-treatments',
    name: 'Hair Treatments',
    category: 'hair',
    description: 'Deep conditioning therapy, keratin smoothing, and customized scalp revitalizing treatments to restore silkiness, strength, and brilliance.',
    duration: '60 - 90 mins',
    price: '$95+',
    iconName: 'Droplet',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    category: 'makeup',
    description: 'Exquisite, long-lasting wedding makeup that ensures you look breathtaking both in person and on camera on your special day. Includes trial.',
    duration: '90 - 120 mins',
    price: '$250+',
    iconName: 'Crown',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'party-makeup',
    name: 'Party Makeup',
    category: 'makeup',
    description: 'Sophisticated event and party makeup from glamorous red-carpet contours to flawless, natural, radiant glow-ups.',
    duration: '60 mins',
    price: '$110+',
    iconName: 'Brush',
    imageUrl: 'https://images.unsplash.com/photo-1522337094846-8a8101f49413?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'facials',
    name: 'Facials',
    category: 'skincare',
    description: 'Deep-cleansing and ultra-hydrating facials designed to eliminate toxins, stimulate cellular renewal, and leave skin perfectly balanced.',
    duration: '60 mins',
    price: '$85+',
    iconName: 'Flower2',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skincare-treatments',
    name: 'Skincare Treatments',
    category: 'skincare',
    description: 'Premium anti-aging routines, microdermabrasion, and intensive serum infusions to achieve immediate luminosity and lasting firmness.',
    duration: '75 mins',
    price: '$130+',
    iconName: 'HeartPulse',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    category: 'nails',
    description: 'Indulgent, rejuvenating nail care therapy including exfoliating scrubs, hydrating massage, precise cuticle care, and perfect polish application.',
    duration: '60 mins',
    price: '$65+',
    iconName: 'Hand',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nail-art',
    name: 'Nail Art',
    category: 'nails',
    description: 'Bespoke hand-painted details, luxury gem placements, and contemporary geometric styling curated by our expert nail artisans.',
    duration: '45 - 90 mins',
    price: '$45+',
    iconName: 'Palette',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'waxing-threading',
    name: 'Waxing & Threading',
    category: 'other',
    description: 'Gentle, efficient hair removal using premium organic waxes and precise threading techniques to ensure baby-soft, flawless skin.',
    duration: '15 - 45 mins',
    price: '$25+',
    iconName: 'Flame',
    imageUrl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eyelash-extensions',
    name: 'Eyelash Extensions',
    category: 'makeup',
    description: 'Meticulously applied lash extensions that offer custom volume, incredible length, and a beautiful, eye-opening curl without mascara.',
    duration: '90 - 120 mins',
    price: '$140+',
    iconName: 'Eye',
    imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eyebrow-shaping',
    name: 'Eyebrow Shaping',
    category: 'makeup',
    description: 'Precision arch mapping, customized tinting, and professional grooming to frame your face and highlight your natural gaze.',
    duration: '30 mins',
    price: '$35+',
    iconName: 'Wand2',
    imageUrl: 'https://images.unsplash.com/photo-1522337094846-8a8101f49413?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Luxury Hair Styling',
    category: 'hair',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g2',
    title: 'Flawless Bridal Makeup',
    category: 'makeup',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g3',
    title: 'Bespoke Nail Design',
    category: 'nails',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g4',
    title: 'Refreshing Skincare Ritual',
    category: 'skincare',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g5',
    title: 'Our Premium Salon Interior',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g6',
    title: 'Glamorous Makeup Session',
    category: 'makeup',
    imageUrl: 'https://images.unsplash.com/photo-1522337094846-8a8101f49413?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g7',
    title: 'Rich Hair Coloring Art',
    category: 'hair',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g8',
    title: 'Perfect Luxury Pedicure',
    category: 'nails',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sophia Loren',
    rating: 5,
    comment: 'Farah Beauty Salon is an absolute dream! The interior is gorgeous, and the service is truly world-class. My balayage and haircut turned out exactly how I wanted. Highly recommend the hair treatments as well!',
    date: 'July 10, 2026',
    serviceReceived: 'Haircut, Balayage & Styling',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    rating: 5,
    comment: 'For my wedding, I booked the Bridal Makeup Package and it was the best decision ever! Farah and her team made me feel like royalty. The makeup was absolutely flawless, radiant, and lasted all night long.',
    date: 'June 28, 2026',
    serviceReceived: 'Luxury Bridal Makeup',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't3',
    name: 'Amina Mansour',
    rating: 5,
    comment: 'The facial treatments here are transformative! The beauticians explain every step and analyze your skin before applying products. My skin has never looked so clear and glowing. Definitely coming back.',
    date: 'May 14, 2026',
    serviceReceived: 'Advanced Hydrafacial',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't4',
    name: 'Isabella Mercer',
    rating: 5,
    comment: 'Stunning nails every single time! The nail art here is incredibly detailed and durable. The entire team is hygienic, friendly, and pays attention to every minor detail. Farah is an absolute gem.',
    date: 'April 22, 2026',
    serviceReceived: 'Manicure & Custom Nail Art',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'p1',
    name: 'Radiant Glow Ritual',
    price: '$120',
    originalPrice: '$150',
    description: 'Perfect for quick revitalization and instant skin brightness before a big event.',
    features: [
      'Deep Cleansing Facial',
      'Hydrating Serum Infusion',
      'Eyebrow Mapping & Shaping',
      'Relaxing Scalp Massage',
      'Champagne or Custom Herbal Tea'
    ]
  },
  {
    id: 'p2',
    name: 'The Ultimate Bridal Glow',
    price: '$350',
    originalPrice: '$420',
    description: 'Our signature bridal package designed to make you look unforgettable on your special day.',
    isPopular: true,
    features: [
      'Premium Bridal Makeup Trial & Day-of Session',
      'Royal Hair Styling / Elegant Updo',
      'Luxury Spa Manicure & Pedicure',
      'Eyelash Extensions (Natural Volume)',
      'Bridal Veil & Jewelry Placement',
      'Premium Custom Gift Hamper'
    ]
  },
  {
    id: 'p3',
    name: 'Sleek & Chic Makeover',
    price: '$180',
    originalPrice: '$210',
    description: 'Complete beauty rejuvenation package for haircuts, styling, and classic glamour.',
    features: [
      'Precision Haircut & Custom Styling',
      'Keratin Silk Deep Conditioning',
      'Express Glow Glamour Makeup',
      'Nail Shaping & Luxury Polish',
      'Personalized Hair & Skin Consultation'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Certified Beauty Experts',
    description: 'Our talented team of beauticians undergoes rigorous global training to master the latest luxurious trends and techniques.',
    iconName: 'Award'
  },
  {
    title: 'Premium Beauty Products',
    description: 'We exclusively select high-end, organic, hypoallergenic, and cruelty-free products to ensure your skin and hair remain flawlessly healthy.',
    iconName: 'Sparkles'
  },
  {
    title: 'Relaxing Luxury Environment',
    description: 'Immerse yourself in our serene, elegantly appointed oasis with soothing ambient music, relaxing aroma diffusers, and warm hospitality.',
    iconName: 'Milestone' // Changed to map to standard available beautiful icon
  },
  {
    title: 'Affordable Packages',
    description: 'Experience pure indulgence with customizable beauty packages that offer exceptional premium value without compromising on quality.',
    iconName: 'DollarSign'
  },
  {
    title: 'Personalized Consultation',
    description: 'Every treatment begins with a private consultation to understand your unique aspirations, hair texturing, and skin goals.',
    iconName: 'Heart'
  },
  {
    title: 'Easy Appointment Booking',
    description: 'Schedule your premium salon experience instantly using our effortless online reservation system, or with a simple click on WhatsApp.',
    iconName: 'Calendar'
  }
];

export const BUSINESS_INFO = {
  name: 'Farah Beauty Salon',
  tagline: 'Enhancing Your Natural Beauty',
  description: 'Welcome to Farah Beauty Salon, where beauty meets elegance. We provide premium hair styling, custom coloring, high-definition makeup, advanced skincare treatments, and exquisite nail art in a luxurious environment designed to relax your senses.',
  address: '102 Luxury Promenade, Suite A, Beverly Hills, CA 90210',
  phone: '+1 (310) 555-8899',
  phoneDial: '13105558899',
  whatsapp: '+1 (310) 555-8899',
  whatsappLink: 'https://wa.me/13105558899?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Farah%20Beauty%20Salon!',
  email: 'appointments@farahbeautysalon.com',
  hours: [
    { days: 'Monday - Friday', times: '9:00 AM - 8:00 PM' },
    { days: 'Saturday', times: '9:00 AM - 6:00 PM' },
    { days: 'Sunday', times: '10:00 AM - 4:00 PM' }
  ],
  socials: {
    instagram: 'https://instagram.com/farahbeautysalon',
    facebook: 'https://facebook.com/farahbeautysalon',
    pinterest: 'https://pinterest.com/farahbeautysalon'
  }
};
