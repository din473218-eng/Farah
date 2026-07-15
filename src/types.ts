export interface Service {
  id: string;
  name: string;
  category: 'hair' | 'makeup' | 'skincare' | 'nails' | 'other';
  description: string;
  duration: string;
  price: string;
  iconName: string; // Used to map to Lucide icons dynamically
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'makeup' | 'nails' | 'skincare' | 'interior';
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  serviceReceived: string;
  avatarUrl: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  isPopular?: boolean;
  features: string[];
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed';
}
