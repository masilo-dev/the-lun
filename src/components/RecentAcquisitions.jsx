import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import homeData from '../content/pages/home.json';
import siteInfo from '../content/general/site_info.json';

const RecentAcquisitions = () => {
  const { recent_acquisitions } = homeData;
  const socialPlatforms = [
    {
      icon: <Instagram className="text-white" size={24} />,
      name: "Instagram",
      handle: siteInfo.social.instagram.split('/').pop(),
      description: "Daily posts featuring our latest finds, detailed close-ups, and the stories behind each piece.",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      link: siteInfo.social.instagram
    },
    {
      icon: <MessageCircle className="text-white" size={24} />,
      name: "TikTok",
      handle: siteInfo.social.tiktok.split('@').pop(),
      description: "Behind-the-scenes content, antique identification tips, and fascinating historical insights.",
      bgColor: "bg-black",
      link: siteInfo.social.tiktok
    },
    {
      icon: <Facebook className="text-white" size={24} />,
      name: "Facebook",
      handle: siteInfo.name,
      description: "In-depth posts about our collection, educational content, and community discussions.",
      bgColor: "bg-blue-600",
      link: siteInfo.social.facebook
    }
  ];

  return (
    <section className="py-20 bg-lunar-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-lunar-navy mb-6">
            {recent_acquisitions.title}
          </h2>
          <p className="text-xl font-source text-lunar-charcoal max-w-3xl mx-auto leading-relaxed">
            {recent_acquisitions.subtitle}
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${platform.bgColor} p-6 text-center`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-white/90 font-source">
                  {platform.handle}
                </p>
              </div>
              <div className="p-6">
                <p className="text-lunar-charcoal font-source mb-6 leading-relaxed">
                  {platform.description}
                </p>
                <Button
                  className="w-full bg-lunar-gold hover:bg-opacity-90 text-lunar-navy font-source font-semibold"
                  onClick={() => window.open(platform.link, '_blank')}
                >
                  Follow Us
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="bg-white rounded-lg p-8 fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-lunar-navy mb-4">
                What You'll Discover
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lunar-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-playfair font-medium text-lunar-navy">Estate Clearance Finds</h4>
                    <p className="text-sm font-source text-lunar-charcoal">Exclusive access to pieces from country houses and private collections</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lunar-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-playfair font-medium text-lunar-navy">Auction Discoveries</h4>
                    <p className="text-sm font-source text-lunar-charcoal">Rare pieces acquired from prestigious auction houses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lunar-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-playfair font-medium text-lunar-navy">Historical Insights</h4>
                    <p className="text-sm font-source text-lunar-charcoal">Educational content about periods, makers, and provenance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-lunar-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-playfair font-medium text-lunar-navy">Behind the Scenes</h4>
                    <p className="text-sm font-source text-lunar-charcoal">The process of authentication, restoration, and curation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-lunar-cream p-8 rounded-lg">
                <h4 className="text-xl font-playfair font-semibold text-lunar-navy mb-4">
                  Stay Connected
                </h4>
                <p className="font-source text-lunar-charcoal mb-6">
                  Be the first to see our latest acquisitions and learn about the fascinating world of English antiques.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    className="bg-lunar-navy hover:bg-opacity-90 text-white font-source font-semibold"
                    onClick={() => window.open('https://instagram.com/lunarantiques', '_blank')}
                  >
                    Follow on Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="border-lunar-navy text-lunar-navy hover:bg-lunar-navy hover:text-white font-source font-semibold"
                    onClick={() => window.open('https://facebook.com/lunarantiques', '_blank')}
                  >
                    Like on Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-12 fade-in-up">
          <div className="bg-lunar-navy rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
              Newsletter Updates
            </h3>
            <p className="text-lunar-cream font-source mb-6">
              Receive exclusive updates about new acquisitions, upcoming events, and special offers directly to your inbox.
            </p>
            <Button
              className="bg-lunar-gold hover:bg-opacity-90 text-lunar-navy font-source font-semibold"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentAcquisitions;

