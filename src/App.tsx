import React from 'react';
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
