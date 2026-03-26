import React from 'react';
import { UtensilsCrossed, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {/* <UtensilsCrossed className="w-8 h-8 text-secondary" /> */}
              <img src="/images/logo.jpg" alt="logo" className="w-12 h-12 rounded-full" />
              <span className="text-2xl font-serif font-bold tracking-tight">Garden Ship</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Bringing the best of Asian and Continental flavors to Dhaka. 
              A place for family, friends, and unforgettable dining experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/GardenShipbosila" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">Our Menu</a></li>
              <li><a href="#reservation" className="hover:text-secondary transition-colors">Reservations</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Our Menu</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#menu" className="hover:text-secondary transition-colors">Asian Fusion</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">Continental Steaks</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">Seafood Specialties</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">Fresh Juices & Shakes</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">Signature Biryanis</a></li>
            </ul>
          </div>

          <div>
                <div>
                  <h4 className="text-lg font-serif font-bold  mb-1">Reservations</h4>
                  <p className="text-white/60" mb-6>01302-640504</p>
                  <h4 className="text-lg font-serif font-bold  mb-1">Our Address</h4>
                  <p className="text-white/60 leading-relaxed">
                    Rab 2 Battalion Headquarter, P9W3+H24,<br />
                    Boshila, Dhaka, Bangladesh, 1207
                  </p>
                </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © 2026 Garden Ship Restaurant. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-secondary p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
