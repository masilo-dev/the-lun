import homeData from '../content/pages/home.json';

const About = () => {
  const { about } = homeData;
  const icons = [
    <Award className="text-lunar-gold" size={32} />,
    <Globe className="text-lunar-gold" size={32} />,
    <Shield className="text-lunar-gold" size={32} />,
    <Users className="text-lunar-gold" size={32} />
  ];

  const features = about.features.map((feature, index) => ({
    ...feature,
    icon: icons[index] || icons[0]
  }));

  return (
    <section id="about" className="py-20 bg-lunar-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-lunar-navy mb-6">
              {about.title}
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg font-source text-lunar-charcoal mb-6 leading-relaxed">
                {p}
              </p>
            ))}

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

