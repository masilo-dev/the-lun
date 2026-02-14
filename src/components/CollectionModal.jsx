import React from 'react';
import { X, Calendar, Ruler, MapPin, Award, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import siteInfo from '../content/general/site_info.json';

const CollectionModal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-lunar-cream">
          <h2 className="text-2xl font-playfair font-bold text-lunar-navy">
            {item.title}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-lunar-charcoal hover:text-lunar-navy"
          >
            <X size={24} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Additional Images */}
              {item.additionalImages && (
                <div className="grid grid-cols-3 gap-2">
                  {item.additionalImages.map((img, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded">
                      <img
                        src={img}
                        alt={`${item.title} detail ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-playfair font-semibold text-lunar-navy mb-2">
                  Description
                </h3>
                <p className="text-lunar-charcoal font-source leading-relaxed">
                  {item.fullDescription}
                </p>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-lunar-cream p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-lunar-gold mr-2" size={16} />
                    <span className="font-playfair font-medium text-lunar-navy">Period</span>
                  </div>
                  <p className="text-sm font-source text-lunar-charcoal">{item.period}</p>
                </div>

                <div className="bg-lunar-cream p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Ruler className="text-lunar-gold mr-2" size={16} />
                    <span className="font-playfair font-medium text-lunar-navy">Dimensions</span>
                  </div>
                  <p className="text-sm font-source text-lunar-charcoal">{item.dimensions}</p>
                </div>

                <div className="bg-lunar-cream p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-lunar-gold mr-2" size={16} />
                    <span className="font-playfair font-medium text-lunar-navy">Origin</span>
                  </div>
                  <p className="text-sm font-source text-lunar-charcoal">{item.origin}</p>
                </div>

                <div className="bg-lunar-cream p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award className="text-lunar-gold mr-2" size={16} />
                    <span className="font-playfair font-medium text-lunar-navy">Condition</span>
                  </div>
                  <p className="text-sm font-source text-lunar-charcoal">{item.condition}</p>
                </div>
              </div>

              {/* Provenance */}
              {item.provenance && (
                <div>
                  <h4 className="font-playfair font-semibold text-lunar-navy mb-2">Provenance</h4>
                  <p className="text-sm font-source text-lunar-charcoal leading-relaxed">
                    {item.provenance}
                  </p>
                </div>
              )}

              {/* Authentication */}
              <div className="bg-lunar-accent/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Award className="text-lunar-gold mr-2" size={20} />
                  <span className="font-playfair font-semibold text-lunar-navy">Authentication Guarantee</span>
                </div>
                <p className="text-sm font-source text-lunar-charcoal">
                  This piece has been thoroughly researched and authenticated by our experts.
                  Detailed condition report and provenance documentation available.
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="bg-lunar-gold hover:bg-lunar-accent text-lunar-dark font-source font-semibold flex-1"
                  onClick={() => window.open(`tel:${siteInfo.phone}`)}
                >
                  Enquire About This Piece
                </Button>
                <Button
                  variant="outline"
                  className="border-lunar-gold text-lunar-gold hover:bg-lunar-gold hover:text-lunar-dark font-source font-semibold flex-1"
                >
                  Request More Images
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionModal;

