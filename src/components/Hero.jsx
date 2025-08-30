import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '../assets/YwmSsHCTdGZF.webp';

const Hero = () => {
  const scrollToCollection = () => {
    const element = document.getElementById('collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Georgian Period Mahogany Desk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
            Lunar Antiques
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-source text-lunar-cream mb-8 leading-relaxed">
            Specialising in fine English antiques and decorative pieces from the 17th, 18th, 19th and early 20th centuries
          </p>
          
          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-lunar-gold">35+</div>
              <div className="text-sm md:text-base font-source text-lunar-cream">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-lunar-gold">∞</div>
              <div className="text-sm md:text-base font-source text-lunar-cream">Worldwide Shipping</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-lunar-gold">✓</div>
              <div className="text-sm md:text-base font-source text-lunar-cream">Authentication Guaranteed</div>
            </div>
          </div>

          <Button
            onClick={scrollToCollection}
            size="lg"
            className="bg-lunar-gold hover:bg-yellow-600 text-lunar-navy font-source font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            Explore Our Collection
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowDown className="text-white" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

