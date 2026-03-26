import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#convention-hall' },
    { name: 'Featured', href: '#featured' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="bg-secondary text-white text-center py-1.5 text-[10px] font-bold uppercase tracking-widest">
        This is a demo website
      </div>
      <div 
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <UtensilsCrossed className={`w-8 h-8 ${scrolled ? 'text-primary' : 'text-white'}`} />
          <span className={`text-2xl font-serif font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
            Garden Ship
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest hover:text-secondary transition-colors ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservation" 
            className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-primary transition-all duration-300"
          >
            Book Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
          )}
        </button>
      </div>
      </div>
      

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-primary text-lg font-serif font-medium hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reservation" 
                onClick={() => setIsOpen(false)}
                className="bg-secondary text-white px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-widest"
              >
                Book Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
