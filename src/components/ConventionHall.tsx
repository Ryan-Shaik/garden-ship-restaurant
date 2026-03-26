import React from 'react';
import { motion } from 'motion/react';
import { Users, Monitor, Utensils, Sparkles } from 'lucide-react';

const ConventionHall = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Versatile Space",
      description: "Accommodating groups of all sizes for weddings, corporate meetings, and special occasions."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Modern AV Equipment",
      description: "State-of-the-art audiovisual equipment to ensure your presentations and events are seamless."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Customizable Menus",
      description: "Our talented chefs work with you to create the perfect menu for your specific event."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Stunning Decor",
      description: "Elegant and customizable decor options to make your event truly unforgettable."
    }
  ];

  return (
    <section id="convention-hall" className="section-padding bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-serif italic text-lg mb-2 block">Event Excellence</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Garden Ship <br /> Convention Hall
            </h2>
            <p className="text-white/80 text-lg mb-12 leading-relaxed">
              Whether you're looking to host a corporate meeting, wedding, or any other special occasion, 
              our versatile space can accommodate groups of all sizes. We guarantee to make your event 
              one to remember with our professional team and world-class facilities.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-secondary">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
              <img 
                src="/images/642840088_851899734527167_175672677912977299_n.jpg" 
                alt="Convention Hall Setup" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-secondary text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="font-serif italic text-lg">Perfect for any occasion</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConventionHall;
