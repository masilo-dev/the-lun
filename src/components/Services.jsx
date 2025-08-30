import React from 'react';
import { Search, Truck, Palette, Calculator, Wrench, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="text-lunar-gold" size={40} />,
      title: "Authentication & Expertise",
      description: "Each piece in our collection is thoroughly researched and authenticated, with detailed provenance when available.",
      features: ["Professional authentication", "Detailed provenance research", "Expert documentation"]
    },
    {
      icon: <Truck className="text-lunar-gold" size={40} />,
      title: "Worldwide Shipping",
      description: "We arrange secure, insured shipping globally, with white-glove delivery for special pieces.",
      features: ["Secure packaging", "Global insurance coverage", "White-glove delivery"]
    },
    {
      icon: <Palette className="text-lunar-gold" size={40} />,
      title: "Interior Design Consultation",
      description: "Professional guidance for collectors and designers seeking period-appropriate pieces.",
      features: ["Period-appropriate selection", "Design consultation", "Space planning advice"]
    },
    {
      icon: <Calculator className="text-lunar-gold" size={40} />,
      title: "Valuations",
      description: "Expert appraisals for insurance, probate, or sale purposes by qualified professionals.",
      features: ["Insurance valuations", "Probate appraisals", "Market assessments"]
    },
    {
      icon: <Wrench className="text-lunar-gold" size={40} />,
      title: "Restoration Recommendations",
      description: "Trusted network of specialist conservators and restorers for your valuable pieces.",
      features: ["Specialist conservators", "Restoration guidance", "Quality assurance"]
    },
    {
      icon: <Users className="text-lunar-gold" size={40} />,
      title: "Commission Searches",
      description: "We can source specific pieces to meet your particular requirements and collecting interests.",
      features: ["Bespoke sourcing", "Specialist searches", "Personal service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-lunar-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl font-source text-lunar-cream max-w-3xl mx-auto leading-relaxed">
            Beyond our exceptional collection, we offer comprehensive services to support collectors, 
            designers, and institutions in their pursuit of fine English antiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-lunar-cream rounded-full mb-6 mx-auto">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-playfair font-semibold text-lunar-navy mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-lunar-charcoal font-source mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm font-source text-lunar-charcoal">
                    <div className="w-2 h-2 bg-lunar-gold rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up">
          <div className="bg-lunar-gold/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
              Personalized Service
            </h3>
            <p className="text-lunar-cream font-source text-lg leading-relaxed">
              Our expertise spans four centuries of English decorative arts, and we're always happy to share our knowledge with fellow enthusiasts. Whether you're a seasoned collector or just beginning your journey, we provide personalized guidance tailored to your interests and requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

