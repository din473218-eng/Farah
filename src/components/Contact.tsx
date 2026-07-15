import { MapPin, Phone, Mail, Clock, MessageSquareShare, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  return (
    <section className="py-24 bg-[#FAF7F5] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold-50 rounded-full blur-3xl -ml-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans tracking-[0.3em] text-gold-600 uppercase font-bold mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-cinzel text-[#2C2121] tracking-wide font-normal">
            Contact & Location
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4 mb-6" />
          <p className="text-neutral-500 font-sans text-sm leading-relaxed">
            Have questions about our bridal packages, specialized skin treatments, or styling slots? Reach out to our front desk via call, email, or a quick WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gold-100 shadow-sm flex-grow space-y-8">
              <h3 className="font-cinzel text-lg font-bold text-[#2C2121] tracking-wide mb-2">
                Salon Contact
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold text-[#2C2121] uppercase tracking-wider">
                      Location Address
                    </h4>
                    <p className="text-xs text-neutral-500 font-sans mt-1.5 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={16} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold text-[#2C2121] uppercase tracking-wider">
                      Direct Telephone
                    </h4>
                    <p className="text-xs text-neutral-500 font-sans mt-1.5">
                      <a href={`tel:${BUSINESS_INFO.phoneDial}`} className="hover:text-gold-600 transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={16} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold text-[#2C2121] uppercase tracking-wider">
                      General Enquiries
                    </h4>
                    <p className="text-xs text-neutral-500 font-sans mt-1.5 break-all">
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-gold-600 transition-colors">
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours section */}
              <div className="pt-6 border-t border-gold-200/30">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-gold-500" />
                  <h4 className="font-cinzel text-xs font-bold text-[#2C2121] uppercase tracking-wider">
                    Opening Hours
                  </h4>
                </div>
                <div className="space-y-2">
                  {BUSINESS_INFO.hours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-xs font-sans">
                      <span className="text-neutral-500 font-medium">{item.days}</span>
                      <span className="text-[#2C2121] font-bold">{item.times}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium WhatsApp quick card */}
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-2xl p-5 flex items-center justify-between gap-4 group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm">
                  <MessageCircle size={20} fill="currentColor" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider">
                    Chat on WhatsApp
                  </h4>
                  <p className="text-[10px] text-emerald-600 font-sans mt-0.5">
                    Average response: under 5 minutes
                  </p>
                </div>
              </div>
              <svg className="w-4 h-4 text-emerald-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>

          {/* Interactive Google Map Frame (7 Cols) */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-2 border border-gold-300 rounded-3xl -rotate-1 scale-[1.01] pointer-events-none" />
            
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gold-200 bg-neutral-100">
              {/* Actual Zoomable Google Map embedded safely */}
              <iframe
                title="Farah Beauty Salon Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1m4!2m2!1d-118.4003563!2d34.0736204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc07b34b1df1%3A0x633d45de996b5c31!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
