import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Award, Users, Globe, ShoppingBag, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import heroImage from '../assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Infrastructure",
      description: "State-of-the-art manufacturing facility with modern machinery and quality control systems.",
      link: "/infrastructure"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-secondary" />,
      title: "Products",
      description: "Wide range of knitted garments including T-Shirts, Pull Overs, Sweat Shirts, and Pyjamas.",
      link: "/products"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Our Buyers",
      description: "Trusted by international clients including OTTO, MR LADY, FAMILY DOLLAR, and LPP S.A.",
      link: "/buyers"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Certificates",
      description: "SMETA SEDEX 4 Pillar Audit certified ensuring ethical and quality manufacturing standards.",
      link: "/certificates"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "About Us",
      description: "Established company with years of experience in textile manufacturing and global exports.",
      link: "/about"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
      title: "Contact",
      description: "Get in touch with our team for inquiries, orders, and partnerships worldwide.",
      link: "/contact"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Akhilesh Exports Manufacturing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-poppins mb-6">
              Akhilesh Exports
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-medium">
              Manufacturer & Exporters of Knitted Garments
            </p>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Leading textile manufacturer specializing in high-quality knitted garments for global markets. 
              Committed to excellence, sustainability, and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/products" 
                className="btn-hero group flex items-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/contact" 
                className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-gradient textile-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Why Choose Akhilesh Exports?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive services and capabilities that make us a trusted partner 
              in the global textile industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={feature.title}
                to={feature.link}
                className="feature-card group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-primary group-hover:text-secondary transition-colors duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold text-primary-foreground font-poppins mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-primary-foreground font-poppins mb-2">50+</div>
              <div className="text-primary-foreground/80">Global Buyers</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-primary-foreground font-poppins mb-2">100K+</div>
              <div className="text-primary-foreground/80">Garments Monthly</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-primary-foreground font-poppins mb-2">24/7</div>
              <div className="text-primary-foreground/80">Quality Control</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
