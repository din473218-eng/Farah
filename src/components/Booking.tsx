import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Sparkles, User, Mail, Phone, FileText, CheckCircle, Trash2, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data';
import { Appointment } from '../types';

interface BookingProps {
  selectedServiceId?: string;
  selectedPackageName?: string;
  clearSelection: () => void;
}

export default function Booking({ selectedServiceId, selectedPackageName, clearSelection }: BookingProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  
  // Applet State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAppointment, setSubmittedAppointment] = useState<Appointment | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Load existing appointments from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('farah_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing appointments', e);
      }
    }
  }, []);

  // Pre-fill service/notes if selected from other sections
  useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  useEffect(() => {
    if (selectedPackageName) {
      setServiceId('custom-package');
      setNotes(`Interested in booking package: "${selectedPackageName}"`);
    }
  }, [selectedPackageName]);

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', 
    '05:00 PM', '06:00 PM', '07:00 PM'
  ];

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Full Name is required';
    if (!phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[\d\s-]{7,15}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid Phone Number';
    }
    if (!email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid Email Address';
    }
    if (!serviceId) newErrors.serviceId = 'Please select a beauty service';
    if (!date) {
      newErrors.date = 'Preferred Date is required';
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        newErrors.date = 'Preferred Date cannot be in the past';
      }
    }
    if (!time) newErrors.time = 'Preferred Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database write delay
    setTimeout(() => {
      let serviceName = 'Bespoke Beauty Consultation';
      if (serviceId === 'custom-package') {
        serviceName = selectedPackageName || 'Custom Beauty Package';
      } else {
        const found = SERVICES.find(s => s.id === serviceId);
        if (found) serviceName = found.name;
      }

      const newAppointment: Appointment = {
        id: Math.random().toString(36).substring(2, 9),
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        serviceId,
        serviceName,
        date,
        time,
        notes: notes.trim() || undefined,
        createdAt: new Date().toISOString(),
        status: 'confirmed' // Confirmed automatically for demo premium feel
      };

      const updated = [newAppointment, ...appointments];
      setAppointments(updated);
      localStorage.setItem('farah_appointments', JSON.stringify(updated));

      setSubmittedAppointment(newAppointment);
      setIsSubmitting(false);
      clearForm();
      clearSelection();
    }, 1200);
  };

  const clearForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setServiceId('');
    setDate('');
    setTime('');
    setNotes('');
    setErrors({});
  };

  const handleCancelAppointment = (id: string) => {
    const filtered = appointments.filter(a => a.id !== id);
    setAppointments(filtered);
    localStorage.setItem('farah_appointments', JSON.stringify(filtered));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Absolute decorative overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF1F0]/60 rounded-full blur-3xl -mr-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-50 rounded-full blur-3xl -ml-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans tracking-[0.3em] text-gold-600 uppercase font-bold mb-2">
            Secure Your Session
          </p>
          <h2 className="text-3xl sm:text-4xl font-cinzel text-[#2C2121] tracking-wide font-normal">
            Book An Appointment
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4 mb-6" />
          <p className="text-neutral-500 font-sans text-sm leading-relaxed">
            Reserve your luxurious escape today. Fill out our simplified online request, and our concierge desk will register your luxury treatment slot immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Booking Info Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FAF7F5] rounded-3xl p-8 border border-gold-100">
              <h3 className="font-cinzel text-lg font-bold text-[#2C2121] mb-6 tracking-wide">
                Reservations Desk
              </h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gold-200/50 flex items-center justify-center">
                    <Phone size={16} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold text-[#2C2121] uppercase tracking-wider">
                      Concierge Call Line
                    </h4>
                    <p className="text-sm font-sans text-neutral-600 mt-1">
                      +1 (310) 555-8899
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gold-200/50 flex items-center justify-center">
                    <Calendar size={16} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold text-[#2C2121] uppercase tracking-wider">
                      Consultation Hours
                    </h4>
                    <p className="text-xs text-neutral-500 font-sans mt-1">
                      Mon - Fri: 9:00 AM - 8:00 PM <br />
                      Sat - Sun: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gold-200/50 flex items-center justify-center">
                    <ShieldCheck size={16} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold text-[#2C2121] uppercase tracking-wider">
                      Hassle-Free Policy
                    </h4>
                    <p className="text-xs text-neutral-500 font-sans mt-1">
                      No prepayment required. Reschedule or cancel directly on this portal at any time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Promo Banner */}
            <div className="bg-[#FAF1F0] rounded-3xl p-8 border border-[#F5DDD9] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />
              <Sparkles className="text-gold-600 animate-bounce mb-4" size={24} />
              <h4 className="font-cinzel text-sm font-bold text-[#2C2121] uppercase tracking-wider mb-2">
                First Guest Discount
              </h4>
              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                New to Farah Beauty? Mention the code <strong className="text-gold-600">FARAHGLOW15</strong> in your Special Notes to receive <strong className="text-gold-600">15% Off</strong> your initial session.
              </p>
            </div>
          </div>

          {/* Booking Form (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-gold-100 rounded-3xl p-6 sm:p-10 shadow-sm relative">
            
            {/* Success State Overlay */}
            <AnimatePresence>
              {submittedAppointment && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 rounded-3xl flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                  >
                    <CheckCircle size={64} className="text-gold-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-cinzel text-2xl font-bold text-[#2C2121] mb-2 tracking-wide">
                    Appointment Confirmed!
                  </h3>
                  <p className="text-sm font-sans text-neutral-500 max-w-md leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-neutral-800">{submittedAppointment.name}</span>. Your reservation for <span className="font-semibold text-gold-600">{submittedAppointment.serviceName}</span> on <span className="font-semibold text-neutral-800">{submittedAppointment.date}</span> at <span className="font-semibold text-neutral-800">{submittedAppointment.time}</span> has been logged successfully.
                  </p>

                  <div className="bg-gold-50 border border-gold-100 px-6 py-4 rounded-2xl mb-8 max-w-sm w-full text-left font-sans text-xs space-y-2 text-neutral-600">
                    <p><strong>Booking Ref ID:</strong> #{submittedAppointment.id}</p>
                    <p><strong>Contact phone:</strong> {submittedAppointment.phone}</p>
                    <p><strong>Email:</strong> {submittedAppointment.email}</p>
                    {submittedAppointment.notes && <p><strong>Notes:</strong> {submittedAppointment.notes}</p>}
                  </div>

                  <button
                    onClick={() => setSubmittedAppointment(null)}
                    className="bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs tracking-widest uppercase font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Book Another Session
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actual Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-sans font-bold uppercase tracking-widest text-[#2C2121]">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                      <User size={16} />
                    </div>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                      }}
                      className={`w-full bg-[#FAF7F5] border font-sans text-sm rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                        errors.name ? 'border-red-400 focus:ring-red-400' : 'border-gold-200/60 focus:ring-gold-400 focus:border-gold-400'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-[10px] font-sans font-medium">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-sans font-bold uppercase tracking-widest text-[#2C2121]">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                      <Phone size={16} />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(310) 555-8899"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                      }}
                      className={`w-full bg-[#FAF7F5] border font-sans text-sm rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                        errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gold-200/60 focus:ring-gold-400 focus:border-gold-400'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-[10px] font-sans font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-sans font-bold uppercase tracking-widest text-[#2C2121]">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                      <Mail size={16} />
                    </div>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                      }}
                      className={`w-full bg-[#FAF7F5] border font-sans text-sm rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                        errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gold-200/60 focus:ring-gold-400 focus:border-gold-400'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-[10px] font-sans font-medium">{errors.email}</p>}
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-sans font-bold uppercase tracking-widest text-[#2C2121]">
                    Choose Service <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                      <Sparkles size={16} />
                    </div>
                    <select
                      id="service"
                      value={serviceId}
                      onChange={(e) => {
                        setServiceId(e.target.value);
                        if (errors.serviceId) setErrors(prev => ({ ...prev, serviceId: '' }));
                      }}
                      className={`w-full bg-[#FAF7F5] border font-sans text-sm rounded-xl pl-11 pr-10 py-3.5 focus:outline-none focus:ring-1 focus:bg-white transition-all appearance-none cursor-pointer ${
                        errors.serviceId ? 'border-red-400 focus:ring-red-400' : 'border-gold-200/60 focus:ring-gold-400 focus:border-gold-400'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {selectedPackageName && <option value="custom-package">Custom Package: {selectedPackageName}</option>}
                      <optgroup label="Hair Care">
                        {SERVICES.filter(s => s.category === 'hair').map(s => (
                          <option key={s.id} value={s.id}>{s.name} ({s.price})</option>
                        ))}
                      </optgroup>
                      <optgroup label="Makeup Artistry">
                        {SERVICES.filter(s => s.category === 'makeup').map(s => (
                          <option key={s.id} value={s.id}>{s.name} ({s.price})</option>
                        ))}
                      </optgroup>
                      <optgroup label="Skincare Treatment">
                        {SERVICES.filter(s => s.category === 'skincare').map(s => (
                          <option key={s.id} value={s.id}>{s.name} ({s.price})</option>
                        ))}
                      </optgroup>
                      <optgroup label="Nails Care">
                        {SERVICES.filter(s => s.category === 'nails').map(s => (
                          <option key={s.id} value={s.id}>{s.name} ({s.price})</option>
                        ))}
                      </optgroup>
                      <optgroup label="Other services">
                        {SERVICES.filter(s => s.category === 'other').map(s => (
                          <option key={s.id} value={s.id}>{s.name} ({s.price})</option>
                        ))}
                      </optgroup>
                    </select>
                    {/* Select custom arrow */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  {errors.serviceId && <p className="text-red-400 text-[10px] font-sans font-medium">{errors.serviceId}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Date Selection */}
                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs font-sans font-bold uppercase tracking-widest text-[#2C2121]">
                    Preferred Date <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                      <Calendar size={16} />
                    </div>
                    <input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        if (errors.date) setErrors(prev => ({ ...prev, date: '' }));
                      }}
                      className={`w-full bg-[#FAF7F5] border font-sans text-sm rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-1 focus:bg-white transition-all cursor-pointer ${
                        errors.date ? 'border-red-400 focus:ring-red-400' : 'border-gold-200/60 focus:ring-gold-400 focus:border-gold-400'
                      }`}
                    />
                  </div>
                  {errors.date && <p className="text-red-400 text-[10px] font-sans font-medium">{errors.date}</p>}
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <label htmlFor="time" className="text-xs font-sans font-bold uppercase tracking-widest text-[#2C2121]">
                    Preferred Time <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                      <Clock size={16} />
                    </div>
                    <select
                      id="time"
                      value={time}
                      onChange={(e) => {
                        setTime(e.target.value);
                        if (errors.time) setErrors(prev => ({ ...prev, time: '' }));
                      }}
                      className={`w-full bg-[#FAF7F5] border font-sans text-sm rounded-xl pl-11 pr-10 py-3.5 focus:outline-none focus:ring-1 focus:bg-white transition-all appearance-none cursor-pointer ${
                        errors.time ? 'border-red-400 focus:ring-red-400' : 'border-gold-200/60 focus:ring-gold-400 focus:border-gold-400'
                      }`}
                    >
                      <option value="">Select a time...</option>
                      {availableTimes.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  {errors.time && <p className="text-red-400 text-[10px] font-sans font-medium">{errors.time}</p>}
                </div>
              </div>

              {/* Special Notes */}
              <div className="space-y-2">
                <label htmlFor="notes" className="text-xs font-sans font-bold uppercase tracking-widest text-[#2C2121]">
                  Special Notes & Custom Requests
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none text-neutral-400">
                    <FileText size={16} />
                  </div>
                  <textarea
                    id="notes"
                    placeholder="Enter skin allergies, custom wedding theme notes, or hair textures here..."
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#FAF7F5] border border-gold-200/60 font-sans text-sm rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-neutral-300 text-white font-sans text-xs tracking-widest uppercase font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Securing Slot...</span>
                  </>
                ) : (
                  <>
                    <Calendar size={16} />
                    <span>Confirm Luxury Booking</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

        {/* Guest Portal: My Bookings Portal */}
        {appointments.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto border-t border-gold-100 pt-16">
            <h3 className="font-cinzel text-lg font-bold text-[#2C2121] mb-6 tracking-wide text-center">
              My Scheduled Appointments
            </h3>
            
            <div className="space-y-4">
              {appointments.map((appt) => (
                <div
                  key={appt.id}
                  className="bg-[#FAF7F5] border border-gold-100 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-gold-200 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-cinzel text-sm font-bold text-[#2C2121]">{appt.serviceName}</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200/50 px-2 py-0.5 rounded-full font-sans font-bold uppercase tracking-wider">
                        Registered
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 font-sans">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-gold-500" />
                        {appt.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-gold-500" />
                        {appt.time}
                      </span>
                    </div>
                    {appt.notes && (
                      <p className="text-xs italic text-neutral-400 font-sans leading-relaxed">
                        Notes: "{appt.notes}"
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-neutral-200/60 pt-4 sm:pt-0">
                    <span className="text-[10px] font-mono text-neutral-400">ID: #{appt.id}</span>
                    <button
                      onClick={() => handleCancelAppointment(appt.id)}
                      className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2.5 rounded-full transition-all cursor-pointer flex items-center justify-center"
                      title="Cancel Booking"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
