import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Surgeons from './components/Surgeons';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Program from './components/Program';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-off-white pb-20 lg:pb-0">
      <Header />
      <Hero />
      <About />
      <Surgeons />
      <Methodology />
      <Testimonials />
      <Problems />
      <Solution />
      <Benefits />
      <Program />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;