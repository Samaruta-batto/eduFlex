'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero';
import Features from './Features';
import Benefits from './Benefits';
import CTA from './CTA';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <ParallaxProvider>
      <div className="bg-white">
        <Hero />
        <Features />
        <Benefits />
        <CTA />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
