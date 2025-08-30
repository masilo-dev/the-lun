import React, { useState } from 'react';
import { Eye, Info } from 'lucide-react';
import CollectionModal from './CollectionModal';
import furnitureImage from '../assets/jYOOf3ss6zAO.jpg';
import ceramicsImage from '../assets/myuLo0rbBqRR.jpeg';
import silverImage from '../assets/M3JsQLHD4KZj.jpg';
import artImage from '../assets/aBv2DwYixBWh.jpg';
import sculptureImage from '../assets/v6L5EkKzDOmG.jpg';
import printsImage from '../assets/rXEImDtyVoQz.webp';
import treenImage from '../assets/tTxDyhjdkgBB.jpg';
import decorativeImage from '../assets/WcoOb2Va6M9c.jpg';
import furniture2Image from '../assets/FXEakS1kbaiW.jpg';
import ceramics2Image from '../assets/4IbGPUezU3dh.jpg';
import silver2Image from '../assets/2ZciSPCwGKyu.png';

const Collection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    {
      title: "Period Furniture",
      description: "From elegant Georgian mahogany to refined Regency pieces",
      image: furnitureImage,
      details: "Exceptional examples of English craftsmanship spanning centuries",
      fullDescription: "Our period furniture collection represents the finest examples of English craftsmanship from the Georgian, Regency, and Victorian eras. Each piece has been carefully selected for its historical significance, exceptional quality, and authentic provenance. From elegant mahogany writing desks to refined dining sets, our furniture tells the story of English domestic life through the centuries.",
      period: "Georgian - Victorian (1714-1901)",
      dimensions: "Varies by piece",
      origin: "England",
      condition: "Excellent, professionally conserved",
      provenance: "Sourced from English country houses and private estates",
      additionalImages: [furniture2Image, furnitureImage, furniture2Image]
    },
    {
      title: "Fine Art",
      description: "Original paintings, watercolours, and prints by established artists",
      image: artImage,
      details: "Carefully curated works showcasing English artistic heritage",
      fullDescription: "Our fine art collection features original paintings, watercolours, and prints by established English artists. From romantic landscape paintings to detailed botanical studies, each work represents the rich tradition of English art. We specialize in 18th and 19th-century works that capture the essence of the English countryside and cultural life.",
      period: "18th - 19th Century",
      dimensions: "Various sizes available",
      origin: "England",
      condition: "Excellent, professionally framed",
      provenance: "Private collections and estate sales",
      additionalImages: [artImage, artImage, artImage]
    },
    {
      title: "Ceramics & Porcelain",
      description: "Including pieces from renowned English manufactories",
      image: ceramicsImage,
      details: "Worcester, Derby, and Chelsea - the finest English porcelain",
      fullDescription: "Our ceramics and porcelain collection features exceptional pieces from England's most prestigious manufactories including Worcester, Derby, and Chelsea. These pieces represent the pinnacle of English ceramic artistry, with hand-painted decorations, gilded details, and perfect craftsmanship that has endured for centuries.",
      period: "18th - 19th Century",
      dimensions: "Various sizes",
      origin: "Worcester, Derby, Chelsea",
      condition: "Excellent, no chips or cracks",
      provenance: "Private collections, documented history",
      additionalImages: [ceramics2Image, ceramicsImage, ceramics2Image]
    },
    {
      title: "Silver & Old Sheffield Plate",
      description: "Georgian and Victorian pieces, from tea services to decorative items",
      image: silverImage,
      details: "Hallmarked silver and Sheffield plate of exceptional quality",
      fullDescription: "Our silver collection encompasses the finest examples of Georgian and Victorian silversmithing. From elegant tea services to decorative serving pieces, each item bears the hallmarks of quality and authenticity. We specialize in pieces by renowned silversmiths and Sheffield plate of exceptional craftsmanship.",
      period: "Georgian - Victorian (1714-1901)",
      dimensions: "Various sizes",
      origin: "London, Birmingham, Sheffield",
      condition: "Excellent, professionally polished",
      provenance: "English estates and private collections",
      additionalImages: [silver2Image, silverImage, silver2Image]
    },
    {
      title: "Sculpture & Bronzes",
      description: "Classical and contemporary works in bronze, marble, and other materials",
      image: sculptureImage,
      details: "Sculptural works that embody artistic excellence",
      fullDescription: "Our sculpture collection features classical and neoclassical works in bronze, marble, and other fine materials. These pieces represent the height of sculptural artistry, from classical figures to contemporary interpretations of traditional themes. Each sculpture has been carefully authenticated and documented.",
      period: "19th - Early 20th Century",
      dimensions: "Various sizes",
      origin: "England, Europe",
      condition: "Excellent, original patina",
      provenance: "Private collections and estates",
      additionalImages: [sculptureImage, sculptureImage, sculptureImage]
    },
    {
      title: "Antique Prints & Engravings",
      description: "Historical maps, botanical prints, architectural drawings, and sporting scenes",
      image: printsImage,
      details: "Rare prints documenting England's natural and cultural history",
      fullDescription: "Our collection of antique prints and engravings includes rare botanical studies, historical maps, architectural drawings, and sporting scenes. These works document England's natural and cultural history through the eyes of skilled engravers and artists. Each print is professionally matted and framed.",
      period: "18th - 19th Century",
      dimensions: "Various sizes, professionally framed",
      origin: "England",
      condition: "Excellent, minimal foxing",
      provenance: "Private libraries and collections",
      additionalImages: [printsImage, printsImage, printsImage]
    },
    {
      title: "Treen",
      description: "Rare wooden objects showcasing traditional English craftsmanship",
      image: treenImage,
      details: "Functional art pieces carved from native English woods",
      fullDescription: "Our treen collection features rare wooden objects that showcase traditional English craftsmanship. From turned bowls to carved boxes, these functional art pieces were crafted from native English woods by skilled artisans. Each piece represents centuries-old woodworking traditions.",
      period: "17th - 19th Century",
      dimensions: "Various sizes",
      origin: "England",
      condition: "Excellent, original finish",
      provenance: "Country houses and private collections",
      additionalImages: [treenImage, treenImage, treenImage]
    },
    {
      title: "Decorative Arts",
      description: "Carefully selected quality pieces spanning four centuries of English design",
      image: decorativeImage,
      details: "Unique decorative objects that enhance any collection",
      fullDescription: "Our decorative arts collection encompasses unique objects that span four centuries of English design. From ornamental boxes to decorative vessels, each piece has been selected for its exceptional quality, historical significance, and aesthetic appeal. These objects represent the evolution of English decorative arts.",
      period: "17th - 20th Century",
      dimensions: "Various sizes",
      origin: "England",
      condition: "Excellent, carefully preserved",
      provenance: "Private collections and estates",
      additionalImages: [decorativeImage, decorativeImage, decorativeImage]
    }
  ];

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
                href="tel:07435965901"
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

