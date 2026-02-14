import React from 'react';
import { MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import showroomImage from '../assets/HdsAsVfB74Qk.jpg';
import homeData from '../content/pages/home.json';
import siteInfo from '../content/general/site_info.json';

const Showroom = () => {
  const { showroom } = homeData;
  return (
    <section id="showroom" className="py-20 bg-lunar-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-lunar-navy mb-6">
              {showroom.title}
            </h2>
            <p className="text-lg font-source text-lunar-charcoal mb-8 leading-relaxed">
              {showroom.description}
            </p>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-lunar-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-playfair font-semibold text-lunar-navy mb-1">Address</h3>
                  <p className="font-source text-lunar-charcoal">
                    {siteInfo.address.line1}<br />
                    {siteInfo.address.line2}<br />
                    {siteInfo.address.city} {siteInfo.address.postcode}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-lunar-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-playfair font-semibold text-lunar-navy mb-1">Opening Hours</h3>
                  <p className="font-source text-lunar-charcoal">
                    {showroom.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-lunar-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-playfair font-semibold text-lunar-navy mb-1">Phone</h3>
                  <p className="font-source text-lunar-charcoal">{siteInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-lunar-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-playfair font-semibold text-lunar-navy mb-1">Email</h3>
                  <p className="font-source text-lunar-charcoal">{siteInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair font-semibold text-lunar-navy mb-3 flex items-center">
                <Calendar className="text-lunar-gold mr-2" size={20} />
                Schedule Your Visit
              </h3>
              <p className="font-source text-lunar-charcoal mb-4 text-sm">
                Experience our collection in person and receive expert guidance from our knowledgeable team.
              </p>
              <Button
                className="bg-lunar-gold hover:bg-yellow-600 text-lunar-navy font-source font-semibold"
                onClick={() => window.open(`tel:${siteInfo.phone.replace(/\s+/g, '')}`)}
              >
                {showroom.cta_text}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-up">
            <div className="relative">
              <img
                src={showroomImage}
                alt="Elegant Antique Showroom Interior"
                className="w-full h-96 object-cover rounded-lg shadow-lg hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-crimson italic text-lg">
                  "Discover treasures in our carefully curated showroom"
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-playfair font-semibold text-lunar-navy mb-3">What to Expect</h4>
              <ul className="space-y-2 text-sm font-source text-lunar-charcoal">
                {showroom.expectations.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-lunar-gold rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;

