import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ConventionHall from './components/ConventionHall';
import FeaturedDishes from './components/FeaturedDishes';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to section based on path
    const sectionId = pathname === '/' ? 'home' : pathname.substring(1);
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (pathname === '/' || pathname === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ConventionHall />
        <FeaturedDishes />
        <Menu />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
