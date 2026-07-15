import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  // References for scroll anchoring
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Deep interaction states (Pre-selected booking items)
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedPackageName, setSelectedPackageName] = useState<string | undefined>(undefined);

  // Scroll Actions
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Triggers Booking with a specific service
  const handleBookService = (serviceId: string) => {
    setSelectedPackageName(undefined);
    setSelectedServiceId(serviceId);
    scrollTo(bookingRef);
  };

  // Triggers Booking with a specific package
  const handleBookPackage = (packageName: string) => {
    setSelectedServiceId(undefined);
    setSelectedPackageName(packageName);
    scrollTo(bookingRef);
  };

  const handleGeneralBooking = () => {
    setSelectedServiceId(undefined);
    setSelectedPackageName(undefined);
    scrollTo(bookingRef);
  };

  const clearSelection = () => {
    setSelectedServiceId(undefined);
    setSelectedPackageName(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] relative text-neutral-800">
      {/* Dynamic Sticky Header */}
      <Navbar
        onBookClick={handleGeneralBooking}
        onServicesClick={() => scrollTo(servicesRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onGalleryClick={() => scrollTo(galleryRef)}
        onWhyChooseClick={() => scrollTo(whyChooseRef)}
        onTestimonialsClick={() => scrollTo(testimonialsRef)}
        onPricingClick={() => scrollTo(pricingRef)}
        onContactClick={() => scrollTo(contactRef)}
      />

      {/* Hero Welcome banner */}
      <Hero
        onBookClick={handleGeneralBooking}
        onServicesClick={() => scrollTo(servicesRef)}
      />

      {/* About Section */}
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Services Section */}
      <div ref={servicesRef}>
        <Services onBookService={handleBookService} />
      </div>

      {/* Why Choose Us Section */}
      <div ref={whyChooseRef}>
        <WhyChooseUs />
      </div>

      {/* Gallery Showcase */}
      <div ref={galleryRef}>
        <Gallery />
      </div>

      {/* Testimonials Review Slider / Grid */}
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>

      {/* Curated Package Pricing */}
      <div ref={pricingRef}>
        <Pricing onBookPackage={handleBookPackage} />
      </div>

      {/* Interactive Booking Portal */}
      <div ref={bookingRef}>
        <Booking
          selectedServiceId={selectedServiceId}
          selectedPackageName={selectedPackageName}
          clearSelection={clearSelection}
        />
      </div>

      {/* Contact & Map Coordinates */}
      <div ref={contactRef}>
        <Contact />
      </div>

      {/* Full detail Footer */}
      <Footer
        onServicesClick={() => scrollTo(servicesRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onGalleryClick={() => scrollTo(galleryRef)}
        onWhyChooseClick={() => scrollTo(whyChooseRef)}
        onTestimonialsClick={() => scrollTo(testimonialsRef)}
        onPricingClick={() => scrollTo(pricingRef)}
        onContactClick={() => scrollTo(contactRef)}
      />

      {/* Floating Call & WhatsApp Action Triggers */}
      <FloatingButtons />
    </div>
  );
}
