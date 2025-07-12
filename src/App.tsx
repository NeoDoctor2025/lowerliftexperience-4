import React, { Suspense } from 'react';

const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Surgeons = React.lazy(() => import('./components/Surgeons'));
const Methodology = React.lazy(() => import('./components/Methodology'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Problems = React.lazy(() => import('./components/Problems'));
const Solution = React.lazy(() => import('./components/Solution'));
const Benefits = React.lazy(() => import('./components/Benefits'));
const Program = React.lazy(() => import('./components/Program'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Guarantee = React.lazy(() => import('./components/Guarantee'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const FinalCTA = React.lazy(() => import('./components/FinalCTA'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-off-white pb-20 lg:pb-0">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;