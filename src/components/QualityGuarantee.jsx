import { FileText, MapPin, Award, Ruler, Camera } from 'lucide-react';
import homeData from '../content/pages/home.json';
import siteInfo from '../content/general/site_info.json';

const QualityGuarantee = () => {
  const { qualities } = homeData;
  const icons = [
    <FileText className="text-lunar-gold" size={32} />,
    <MapPin className="text-lunar-gold" size={32} />,
    <Award className="text-lunar-gold" size={32} />,
    <Ruler className="text-lunar-gold" size={32} />,
    <Camera className="text-lunar-gold" size={32} />
  ];

  const guarantees = qualities.items.map((item, index) => ({
    ...item,
    icon: icons[index] || icons[0]
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-lunar-navy mb-6">
            {qualities.title}
          </h2>
          <p className="text-xl font-source text-lunar-charcoal max-w-3xl mx-auto leading-relaxed">
            {qualities.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="text-center hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-lunar-cream rounded-full mb-6 mx-auto">
                {guarantee.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-lunar-navy mb-4">
                {guarantee.title}
              </h3>
              <p className="text-lunar-charcoal font-source leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-lunar-cream rounded-lg p-8 fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-playfair font-bold text-lunar-navy mb-2">{siteInfo.experience.split('+')[0]}+</div>
              <div className="text-lunar-charcoal font-source">Years of Expertise</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-lunar-navy mb-2">{siteInfo.established}</div>
              <div className="text-lunar-charcoal font-source">Established</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-lunar-navy mb-2">100%</div>
              <div className="text-lunar-charcoal font-source">Authentication Guaranteed</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 fade-in-up">
          <blockquote className="text-xl font-crimson italic text-lunar-charcoal max-w-4xl mx-auto">
            "Our reputation has been built on trust, expertise, and an unwavering commitment to authenticity.
            When you purchase from Lunar Antiques, you're not just acquiring a beautiful object –
            you're investing in a piece of history with complete confidence in its provenance and quality."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default QualityGuarantee;

