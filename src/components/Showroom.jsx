import React from 'react';
import { MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import showroomImage from '../assets/HdsAsVfB74Qk.jpg';

const Showroom = () => {
  return (
    <section id="showroom" className="py-20 bg-lunar-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-lunar-navy mb-6">
              Visit Our Showroom
            </h2>
            <p className="text-lg font-source text-lunar-charcoal mb-8 leading-relaxed">
              Our physical showroom offers the opportunity to examine pieces firsthand and discover treasures not yet listed online. 
              We welcome visitors by appointment to ensure personalized attention and expert guidance.
            </p>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-lunar-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-playfair font-semibold text-lunar-navy mb-1">Address</h3>
                  <p className="font-source text-lunar-charcoal">
                    Castlegate Antiques<br />
                    1-3 Castlegate<br />
                    Newark NG24 1AZ
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-lunar-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-playfair font-semibold text-lunar-navy mb-1">Opening Hours</h3>
                  <p className="font-source text-lunar-charcoal">
                    By appointment only<br />
                    Please call to arrange your visit
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-lunar-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-playfair font-semibold text-lunar-navy mb-1">Phone</h3>
                  <p className="font-source text-lunar-charcoal">07435 965901</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-lunar-gold mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-playfair font-semibold text-lunar-navy mb-1">Email</h3>
                  <p className="font-source text-lunar-charcoal">Contact us for email details</p>
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
                onClick={() => window.open('tel:07435965901')}
              >
                Call to Book Appointment
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
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-lunar-gold rounded-full mr-3"></div>
                  Personal consultation with our experts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-lunar-gold rounded-full mr-3"></div>
                  Hands-on examination of pieces
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-lunar-gold rounded-full mr-3"></div>
                  Detailed provenance discussions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-lunar-gold rounded-full mr-3"></div>
                  Exclusive access to new acquisitions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;

