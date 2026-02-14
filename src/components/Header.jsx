import React, { useState } from 'react';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import siteInfo from '../content/general/site_info.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {siteInfo.logo ? (
              <img
                src={siteInfo.logo}
                alt={siteInfo.name}
                className="h-12 w-auto object-contain"
              />
            ) : (
              <h1 className="text-2xl md:text-3xl font-playfair font-bold text-lunar-navy">
                {siteInfo.name}
              </h1>
            )}
            <div className="hidden sm:block">
              <p className="text-[10px] text-lunar-charcoal font-source leading-none mb-1 opacity-70">
                FINE ENGLISH ANTIQUES
              </p>
              <p className="text-[8px] text-lunar-gold font-source font-bold tracking-[0.2em]">
                EST. {siteInfo.established}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('collection')}
              className="text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('showroom')}
              className="text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium"
            >
              Showroom
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-lunar-navy">
              <Phone size={16} />
              <span className="font-source font-medium">{siteInfo.phone}</span>
            </div>
            <div className="flex space-x-2">
              <a
                href={siteInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lunar-charcoal hover:text-lunar-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lunar-charcoal hover:text-lunar-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-lunar-navy"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('collection')}
                className="block px-3 py-2 text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium w-full text-left"
              >
                Collection
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('showroom')}
                className="block px-3 py-2 text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium w-full text-left"
              >
                Showroom
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-lunar-charcoal hover:text-lunar-gold transition-colors font-source font-medium w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2 border-t">
                <div className="flex items-center space-x-2 text-lunar-navy mb-2">
                  <Phone size={16} />
                  <span className="font-source font-medium">07435 965901</span>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://instagram.com/lunarantiques"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lunar-charcoal hover:text-lunar-gold transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com/lunarantiques"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lunar-charcoal hover:text-lunar-gold transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

