import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-serif italic text-lg mb-2 block">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Visit Garden Ship</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-accent/30 p-4 rounded-2xl text-primary h-fit">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-primary mb-1">Our Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Rab 2 Battalion Headquarter, P9W3+H24,<br />
                    Boshila, Dhaka, Bangladesh, 1207
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Rab+2+Battalion+Headquarter,+Boshila,+Dhaka,+Bangladesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest mt-3 hover:text-primary transition-colors"
                  >
                    Get Directions <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-accent/30 p-4 rounded-2xl text-primary h-fit">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-primary mb-1">Reservations</h4>
                  <p className="text-gray-600">01302-640504</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-accent/30 p-4 rounded-2xl text-primary h-fit">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-primary mb-1">Dining Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-gray-600">
                    <span>Mon - Thu:</span>
                    <span>12:00 PM - 11:00 PM</span>
                    <span>Fri - Sat:</span>
                    <span>12:00 PM - 12:00 AM</span>
                    <span>Sunday:</span>
                    <span>1:00 PM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Rab%202%20Battalion%20Headquarter,%20Boshila,%20Dhaka,%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</p>
                  <p className="text-sm font-serif font-bold text-primary">Garden Ship, Boshila</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
