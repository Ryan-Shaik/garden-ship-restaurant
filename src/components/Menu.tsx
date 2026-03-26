import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, MENU_ITEMS } from '../constants';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-serif italic text-lg mb-2 block">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Culinary Selection</h2>
          <p className="text-gray-500 text-sm italic">* 5% VAT applies to all prices</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat.id 
                ? 'bg-secondary text-white shadow-lg' 
                : 'bg-accent/30 text-primary hover:bg-accent/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="contents"
            >
              {filteredItems.map((item, index) => (
                <motion.div 
                  key={`${item.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-accent/10 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-accent/30"
                >
                  {item.image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-serif font-bold text-primary group-hover:text-secondary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">{item.price} BDT</span>
                    </div>
                    
                    {item.serves && (
                      <span className="inline-block text-[10px] font-sans font-bold text-secondary uppercase tracking-widest mb-3 bg-secondary/10 px-2 py-0.5 rounded">
                        Serves {item.serves}
                      </span>
                    )}

                    {item.description && (
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 p-8 bg-primary rounded-3xl text-center text-white">
          <h3 className="text-2xl font-serif mb-4 italic">Planning a large gathering?</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            We offer special platters and customized menus for family events and corporate gatherings. 
            Contact us to learn more about our group dining options.
          </p>
          <Link to="/reservation"
            className="inline-block bg-secondary text-white px-10 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
