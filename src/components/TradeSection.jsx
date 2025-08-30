import React from 'react';
import { Users, Briefcase, Building, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TradeSection = () => {
  const tradeClients = [
    {
      icon: <Briefcase className="text-lunar-gold" size={32} />,
      title: "Interior Designers & Decorators",
      description: "Professional trade accounts with special pricing and priority access to new acquisitions.",
      benefits: ["Trade pricing", "Priority viewing", "Design consultation"]
    },
    {
      icon: <Users className="text-lunar-gold" size={32} />,
      title: "Established Antique Dealers",
      description: "Wholesale opportunities and dealer-to-dealer professional relationships.",
      benefits: ["Wholesale pricing", "Dealer network", "Professional support"]
    },
    {
      icon: <Building className="text-lunar-gold" size={32} />,
      title: "Museum Curators & Institutions",
      description: "Specialized service for museums, galleries, and cultural institutions.",
      benefits: ["Institutional pricing", "Documentation support", "Curatorial expertise"]
    },
    {
      icon: <GraduationCap className="text-lunar-gold" size={32} />,
      title: "Serious Collectors",
      description: "Dedicated service for collectors with specific requirements and collecting focuses.",
      benefits: ["Personalized sourcing", "Collection development", "Expert guidance"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-lunar-navy mb-6">
            For Trade Professionals
          </h2>
          <p className="text-xl font-source text-lunar-charcoal max-w-3xl mx-auto leading-relaxed">
            We offer special consideration and professional services for trade clients, 
            with dedicated support tailored to your specific business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tradeClients.map((client, index) => (
            <div
              key={index}
              className="bg-lunar-cream rounded-lg p-8 hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                {client.icon}
              </div>
              
              <h3 className="text-xl font-playfair font-semibold text-lunar-navy mb-4">
                {client.title}
              </h3>
              
              <p className="text-lunar-charcoal font-source mb-6 leading-relaxed">
                {client.description}
              </p>
              
              <div className="space-y-2">
                {client.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm font-source text-lunar-charcoal">
                    <div className="w-2 h-2 bg-lunar-gold rounded-full mr-3 flex-shrink-0"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trade Account Application */}
        <div className="bg-lunar-navy rounded-lg p-8 text-center fade-in-up">
          <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
            Apply for a Trade Account
          </h3>
          <p className="text-lunar-cream font-source mb-6 max-w-2xl mx-auto">
            Trade accounts are available with appropriate credentials. Contact us to discuss your requirements 
            and learn about the benefits of working with Lunar Antiques as your trusted antiques partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-lunar-gold hover:bg-opacity-90 text-lunar-navy font-source font-semibold"
              onClick={() => window.open('tel:07435965901')}
            >
              Call for Trade Enquiries
            </Button>
            <Button 
              variant="outline"
              className="border-lunar-gold text-lunar-gold hover:bg-lunar-gold hover:text-lunar-navy font-source font-semibold"
            >
              Request Trade Information
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-lunar-cream font-source">
            <p>Professional credentials and references required for trade account approval</p>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center fade-in-up">
          <h3 className="text-2xl font-playfair font-semibold text-lunar-navy mb-6">
            Additional Professional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6">
              <h4 className="font-playfair font-semibold text-lunar-navy mb-2">Bulk Purchasing</h4>
              <p className="text-sm font-source text-lunar-charcoal">Special rates for large orders and estate purchases</p>
            </div>
            <div className="p-6">
              <h4 className="font-playfair font-semibold text-lunar-navy mb-2">Exclusive Previews</h4>
              <p className="text-sm font-source text-lunar-charcoal">First access to new acquisitions and estate clearances</p>
            </div>
            <div className="p-6">
              <h4 className="font-playfair font-semibold text-lunar-navy mb-2">Professional Network</h4>
              <p className="text-sm font-source text-lunar-charcoal">Access to our network of specialists and craftspeople</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSection;

