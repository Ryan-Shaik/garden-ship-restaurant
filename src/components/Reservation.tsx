import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Phone, Mail, MapPin } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
  };

  return (
    <section id="reservation" className="section-padding bg-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Reservation Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <span className="text-secondary font-serif italic text-lg mb-2 block">Table Booking</span>
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">Reserve Your Table</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    placeholder="+880 1XXX XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Time</label>
                  <input 
                    type="time" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Guests</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all bg-white"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8,10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                    ))}
                    <option value="large">Large Group (10+)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Special Requests</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                  placeholder="Any allergies, special occasions, or seating preferences?"
                  value={formData.requests}
                  onChange={(e) => setFormData({...formData, requests: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-secondary transition-all duration-300 shadow-lg"
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                    <p className="text-lg font-medium text-primary">01302-640504</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                    <p className="text-lg font-medium text-primary">gardenshipbosila@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Location</p>
                    <p className="text-lg font-medium text-primary">Rab 2 Battalion Headquarter, P9W3+H24, Boshila, Dhaka, Bangladesh, 1207</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Opening Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Monday - Thursday</span>
                  <span className="text-secondary font-bold">12:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Friday - Saturday</span>
                  <span className="text-secondary font-bold">12:00 PM - 12:00 AM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-secondary font-bold">1:00 PM - 10:00 PM</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500 italic">
                * Kitchen closes 30 minutes before closing time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
