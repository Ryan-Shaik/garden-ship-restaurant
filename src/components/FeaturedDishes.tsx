import React from 'react';
import { motion } from 'motion/react';
import { FEATURED_DISHES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedDishes = () => {
  return (
    <section id="featured" className="section-padding bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-serif italic text-lg mb-2 block">Chef's Recommendations</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Featured Delights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience classic dishes with a modern twist. Hand-picked favorites that 
            define the Garden Ship experience, from fresh seafood to succulent steaks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_DISHES.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-primary">{dish.name}</h3>
                  <span className="text-secondary font-bold">{dish.price} BDT</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {dish.description}
                </p>
                <Link to="/menu" 
                  href="#menu" 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:text-secondary transition-colors"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/menu" 
            href="#menu" 
            className="inline-block bg-primary text-white px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-secondary transition-all duration-300"
          >
            See Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
