import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-serif italic text-lg mb-2 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
            Exceptional Service & <br /> Unforgettable Experiences
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Welcome to Garden Ship Restaurant & Convention Hall. We are a premier dining and event space dedicated to providing exceptional service and unforgettable experiences. Our team of talented chefs and event coordinators work together to create mouthwatering cuisine and seamless events.
            </p>
            <p>
              Come visit us for a delicious meal in our cozy restaurant, where we serve up classic dishes with a modern twist. From fresh seafood to succulent steaks, our menu has something for everyone. Don't forget to save room for dessert - our pastry chef creates decadent treats that are sure to satisfy your sweet tooth.
            </p>
            <p>
              Follow us for updates on our latest specials, upcoming events, and behind-the-scenes looks at what goes on in our kitchen. We can't wait to host you at our restaurant & convention hall!
            </p>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="text-center">
              <span className="block text-3xl font-serif font-bold text-primary">10+</span>
              <span className="text-sm text-gray-500 uppercase tracking-widest">Years of Service</span>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <span className="block text-3xl font-serif font-bold text-primary">50+</span>
              <span className="text-sm text-gray-500 uppercase tracking-widest">Signature Dishes</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/dining_room.jpg" 
              alt="Garden Ship Interior - Warm Upscale Dining Area" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-2xl shadow-xl hidden lg:block">
            <p className="text-white font-serif italic text-xl max-w-[200px]">
              "The best memories are made around the table."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
