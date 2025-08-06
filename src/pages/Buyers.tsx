import Layout from '../components/Layout';
import { Globe, Star, TrendingUp, Users } from 'lucide-react';
import ottoLogo from '../assets/buyers/otto.png';
import mrLadyLogo from '../assets/buyers/mr-lady.png';
import familyDollarLogo from '../assets/buyers/family-dollar.png';
import lppLogo from '../assets/buyers/lpp.png';


const buyerLogos = {
  "OTTO": ottoLogo,
  "MR LADY": mrLadyLogo,
  "FAMILY DOLLAR": familyDollarLogo,
  "LPP S.A.": lppLogo,
};


const Buyers = () => {
  const majorBuyers = [
    {
      name: "OTTO",
      country: "Germany",
      category: "Fashion Retail",
      description: "Leading European e-commerce and retail company specializing in fashion and lifestyle products.",
      partnership: "Long-term strategic partner for premium knitted garments"
    },
    {
      name: "MR LADY",
      country: "Europe",
      category: "Women's Fashion",
      description: "Prominent women's fashion retailer known for quality and contemporary designs.",
      partnership: "Regular supplier for seasonal collections and custom designs"
    },
    {
      name: "FAMILY DOLLAR",
      country: "USA",
      category: "Retail Chain",
      description: "Major American discount retail chain serving communities across the United States.",
      partnership: "Bulk supplier for everyday essentials and value-oriented products"
    },
    {
      name: "LPP S.A.",
      country: "Poland",
      category: "Fashion Group",
      description: "One of the largest fashion companies in Central and Eastern Europe.",
      partnership: "Trusted manufacturer for multiple brand portfolios and seasonal lines"
    }
  ];

  const globalReach = [
    { region: "Europe", percentage: 45, buyers: 25 },
    { region: "North America", percentage: 30, buyers: 18 },
    { region: "Asia Pacific", percentage: 15, buyers: 12 },
    { region: "Others", percentage: 10, buyers: 8 }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold font-poppins mb-6 animate-fade-up">Our Global Buyers</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            Trusted by leading international brands and retailers worldwide. 
            Building lasting partnerships through quality, reliability, and exceptional service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold text-accent-foreground font-poppins mb-2">50+</div>
              <div className="text-accent-foreground/80">Global Clients</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-accent-foreground font-poppins mb-2">25+</div>
              <div className="text-accent-foreground/80">Countries</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-accent-foreground font-poppins mb-2">15+</div>
              <div className="text-accent-foreground/80">Years Partnership</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-accent-foreground font-poppins mb-2">98%</div>
              <div className="text-accent-foreground/80">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Buyers */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Major International Buyers
            </h2>
            <p className="text-xl text-muted-foreground">
              Proudly serving some of the world's leading retail brands and fashion companies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majorBuyers.map((buyer, index) => (
              <div 
                key={buyer.name}
                className="feature-card animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-poppins mb-1">
                      {buyer.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Globe className="w-4 h-4" />
                      <span>{buyer.country}</span>
                      <span className="text-primary">•</span>
                      <span>{buyer.category}</span>
                    </div>
                  </div>
                  <img 
                    src={buyerLogos[buyer.name]} 
                    alt={`${buyer.name} logo`}
                    className="w-12 h-12 object-cover rounded-lg border border-border"
                  />
                </div>
                
                <p className="text-muted-foreground mb-4">{buyer.description}</p>
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-primary font-medium">Partnership:</p>
                  <p className="text-sm text-muted-foreground">{buyer.partnership}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Global Market Presence
            </h2>
            <p className="text-xl text-muted-foreground">
              Our international reach spans across multiple continents and markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalReach.map((region, index) => (
              <div 
                key={region.region}
                className="feature-card text-center animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">{region.percentage}%</span>
                </div>
                <h3 className="text-xl font-bold text-foreground font-poppins mb-2">
                  {region.region}
                </h3>
                <p className="text-muted-foreground">
                  {region.buyers} Active Buyers
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Why International Buyers Choose Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to excellence has earned us the trust of global partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Consistent Quality</h3>
              <p className="text-muted-foreground">
                Unwavering commitment to maintaining the highest quality standards 
                across all product lines and manufacturing processes.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Reliable Partnership</h3>
              <p className="text-muted-foreground">
                Building long-term relationships based on trust, transparency, 
                and mutual growth with our international partners.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Global Standards</h3>
              <p className="text-muted-foreground">
                Adherence to international quality standards and certifications 
                ensuring compliance with global market requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <div className="w-16 h-16 bg-primary-foreground rounded-full mx-auto mb-6 flex items-center justify-center">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <blockquote className="text-2xl font-medium text-primary-foreground mb-6">
              "Akhilesh Exports has been our trusted manufacturing partner for over 8 years. 
              Their consistent quality, timely delivery, and professional service make them 
              an invaluable part of our supply chain."
            </blockquote>
            <cite className="text-primary-foreground/80">
              — Leading International Fashion Retailer
            </cite>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our growing network of satisfied international buyers and experience 
            the difference of working with a reliable manufacturing partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">Start Partnership</button>
            <button className="btn-outline">Download Catalog</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Buyers;