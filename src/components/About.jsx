import React from 'react';
import { Award, Globe, Shield, Users } from 'lucide-react';
import aboutImage from '../assets/ZdRoAbXU7wFA.jpg';

const About = () => {
  const features = [
    {
      icon: <Award className="text-lunar-gold" size={32} />,
      title: "35+ Years of Expertise",
      description: "Established in 1995, we bring decades of knowledge in English antiques and decorative arts."
    },
    {
      icon: <Globe className="text-lunar-gold" size={32} />,
      title: "Worldwide Reach",
      description: "Our pieces travel globally to collectors who appreciate authenticity and timeless beauty."
    },
    {
      icon: <Shield className="text-lunar-gold" size={32} />,
      title: "Authentication Guaranteed",
      description: "Every piece is thoroughly researched and authenticated with detailed provenance when available."
    },
    {
      icon: <Users className="text-lunar-gold" size={32} />,
      title: "Trusted by Professionals",
      description: "Serving discerning collectors, interior designers, and antique enthusiasts worldwide."
    }
  ];

  return (
    <section id="about" className="py-20 bg-lunar-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-lunar-navy mb-6">
              About Us
            </h2>
            <p className="text-lg font-source text-lunar-charcoal mb-6 leading-relaxed">
              With over 35 years of experience in the antiques and decorative arts trade, Lunar Antiques has established itself as a trusted source for discerning collectors, interior designers, and antique enthusiasts worldwide.
            </p>
            <p className="text-lg font-source text-lunar-charcoal mb-8 leading-relaxed">
              Our passion for history and craftsmanship drives us to seek out exceptional pieces that tell the story of England's rich cultural heritage. We hold a wide variety of quality stock, carefully sourced from estates, country houses, and specialist dealers throughout the UK.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 hover-lift p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lunar-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-source text-lunar-charcoal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-up">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Fine Antique Collection Display"
                className="w-full h-96 object-cover rounded-lg shadow-lg hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

