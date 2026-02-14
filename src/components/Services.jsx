import homeData from '../content/pages/home.json';

const Services = () => {
  const { services: servicesData } = homeData;
  const icons = [
    <Search className="text-lunar-gold" size={40} />,
    <Truck className="text-lunar-gold" size={40} />,
    <Palette className="text-lunar-gold" size={40} />,
    <Calculator className="text-lunar-gold" size={40} />,
    <Wrench className="text-lunar-gold" size={40} />,
    <Users className="text-lunar-gold" size={40} />
  ];

  const services = servicesData.list.map((service, index) => ({
    ...service,
    icon: icons[index] || icons[0]
  }));

  return (
    <section id="services" className="py-20 bg-lunar-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            {servicesData.title}
          </h2>
          <p className="text-xl font-source text-lunar-cream max-w-3xl mx-auto leading-relaxed">
            {servicesData.subtitle}
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

