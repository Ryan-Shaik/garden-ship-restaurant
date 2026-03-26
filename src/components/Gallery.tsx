import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { url: '/images/decor.jpg', size: 'large' },
    { url: '/images/wedding.jpg', size: 'small' },
    { url: '/images/decor2.jpg', size: 'medium' },
    { url: '/images/dining_room.jpg', size: 'small' },
    { url: '/images/patio.jpg', size: 'medium' },
    { url: '/images/iftar.jpg', size: 'large' },
    { url: '/images/party.jpg', size: 'small' },
    { url: '/images/iftar_platter.jpg', size: 'medium' },
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-serif italic text-lg mb-2 block">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Garden Ship Moments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our vibrant atmosphere and culinary creations. 
            Follow us on social media for more daily updates.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={`Gallery ${index}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
