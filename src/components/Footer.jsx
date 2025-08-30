import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-lunar-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-lunar-gold mb-4">
              Lunar Antiques
            </h3>
            <p className="font-source text-lunar-cream mb-4 leading-relaxed">
              Specialising in fine English antiques and decorative pieces from the 17th, 18th, 19th and early 20th centuries.
            </p>
            <div className="flex items-center space-x-2 text-lunar-cream">
              <Clock size={16} />
              <span className="font-source text-sm">Est. 1995 • 35+ Years Experience</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-lunar-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="font-source text-lunar-cream hover:text-lunar-gold transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="font-source text-lunar-cream hover:text-lunar-gold transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('collection')}
                  className="font-source text-lunar-cream hover:text-lunar-gold transition-colors text-left"
                >
                  Our Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="font-source text-lunar-cream hover:text-lunar-gold transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('showroom')}
                  className="font-source text-lunar-cream hover:text-lunar-gold transition-colors text-left"
                >
                  Visit Showroom
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-lunar-gold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="text-lunar-gold mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="font-source text-lunar-cream text-sm">Phone</p>
                  <a
                    href="tel:07435965901"
                    className="font-source text-white hover:text-lunar-gold transition-colors"
                  >
                    07435 965901
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-lunar-gold mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="font-source text-lunar-cream text-sm">Email</p>
                  <p className="font-source text-white">Contact us for details</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-lunar-gold mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="font-source text-lunar-cream text-sm">Address</p>
                  <p className="font-source text-white">
                    Castlegate Antiques<br />
                    1-3 Castlegate<br />
                    Newark NG24 1AZ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Services */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-lunar-gold mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com/lunarantiques"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lunar-cream hover:text-lunar-gold transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/lunarantiques"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lunar-cream hover:text-lunar-gold transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://tiktok.com/@lunarantiques"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lunar-cream hover:text-lunar-gold transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            
            <div>
              <h5 className="font-playfair font-medium text-lunar-gold mb-2">Our Services</h5>
              <ul className="space-y-1 text-sm font-source text-lunar-cream">
                <li>• Authentication & Expertise</li>
                <li>• Worldwide Shipping</li>
                <li>• Valuations & Appraisals</li>
                <li>• Trade Accounts Available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-lunar-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="font-source text-lunar-cream text-sm">
                © 2024 Lunar Antiques. All rights reserved. | Established 1995
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-source text-lunar-cream text-sm">
                Over 35 years of expertise • Worldwide shipping • Authentication guaranteed
              </p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="font-crimson italic text-lunar-gold">
              "Preserving England's heritage, one exceptional piece at a time"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

