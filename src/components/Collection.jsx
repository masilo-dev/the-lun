import React, { useState } from 'react';
import { Eye, Info } from 'lucide-react';
import CollectionModal from './CollectionModal';
import siteInfo from '../content/general/site_info.json';

// Dynamically import all inventory JSON files
const inventoryFiles = import.meta.glob('../content/inventory/*.json', { eager: true });
const inventoryItems = Object.values(inventoryFiles).map(file => file.default || file);

const Collection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use the loaded inventory items
  const categories = inventoryItems;

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section id="collection" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-lunar-navy mb-6">
            Our Collection
          </h2>
          <p className="text-xl font-source text-lunar-charcoal max-w-3xl mx-auto leading-relaxed">
            Our showroom displays a curated selection from our extensive and ever-changing inventory,
            featuring exceptional pieces that tell the story of England's rich cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group hover-lift bg-white rounded-lg shadow-lg overflow-hidden fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(category)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-lunar-gold rounded-full p-3">
                    <Eye className="text-lunar-dark" size={24} />
                  </div>
                </div>

                {/* Info Badge */}
                <div className="absolute top-4 right-4 bg-lunar-accent rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Info className="text-lunar-dark" size={16} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-lunar-navy mb-3">
                  {category.title}
                </h3>
                <p className="text-lunar-charcoal font-source text-sm leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Quick Info */}
                <div className="flex items-center justify-between text-xs font-source text-lunar-gold">
                  <span>Click to explore</span>
                  <span>View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <p className="text-lg font-crimson italic text-lunar-charcoal mb-6">
            "Each piece in our collection is thoroughly researched and authenticated,
            with detailed provenance when available."
          </p>

          <div className="bg-lunar-cream p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-lunar-navy mb-4">
              Discover More
            </h3>
            <p className="text-lunar-charcoal font-source mb-6">
              Click on any category above to explore detailed information, multiple images,
              and comprehensive documentation for each piece in our collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteInfo.phone}`}
                className="bg-lunar-gold hover:bg-lunar-accent text-lunar-dark font-source font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Call for Private Viewing
              </a>
              <button className="border-2 border-lunar-gold text-lunar-gold hover:bg-lunar-gold hover:text-lunar-dark font-source font-semibold px-6 py-3 rounded-lg transition-colors">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <CollectionModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Collection;

