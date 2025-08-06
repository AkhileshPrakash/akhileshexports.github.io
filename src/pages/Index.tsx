import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Award, Users, Globe, ShoppingBag, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import aboutImage from '../assets/about-image.jpg';
import heroImage from '../assets/hero-image.jpg';
import ottoLogo from '../assets/buyers/otto.png';
import mrLadyLogo from '../assets/buyers/mr-lady.png';
import familyDollarLogo from '../assets/buyers/family-dollar.png';
import lppLogo from '../assets/buyers/lpp.png';
import tshirtsImg from '../assets/categories/tshirts.jpg';
import pulloversImg from '../assets/categories/pullovers.jpg';
import sweatshirtsImg from '../assets/categories/sweatshirts.jpg';
import pyjamasImg from '../assets/categories/pyjamas.jpg';
import poloshirtsImg from '../assets/categories/poloshirts.jpg';
import tanktopsImg from '../assets/categories/tanktops.jpg';



const categoryImages = {
  "T-Shirts": tshirtsImg,
  "Pull Overs": pulloversImg,
  "Sweat Shirts": sweatshirtsImg,
  "Pyjamas": pyjamasImg,
  "Polo Shirts": poloshirtsImg,
  "Tank Tops": tanktopsImg,
};


const buyerLogos = {
  'OTTO': ottoLogo,
  'MR LADY': mrLadyLogo,
  'FAMILY DOLLAR': familyDollarLogo,
  'LPP S.A.': lppLogo,
};


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
              20+ Years of Excellence in Knitted Garments. Akhilesh Exports is a Tirupur-based knitted garment manufacturer and exporter, trusted by global brands for our quality and consistency. Leading textile manufacturer specializing in high-quality knitted garments for global markets. Committed to excellence, sustainability, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* About Us Hint Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">About Akhilesh Exports</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 20 years of experience in the textile industry, we have established ourselves as a reliable partner for global brands seeking high-quality knitted garments.
              </p>
              <p className="text-muted-foreground mb-8">
                Our state-of-the-art manufacturing facility in Tirupur, combined with skilled craftsmanship and modern technology, ensures that every garment meets international quality standards.
              </p>
              <Link to="/about" className="btn-hero group flex items-center space-x-2 w-fit">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
              <img 
                src={aboutImage}  
                alt="Textile Manufacturing" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buyers Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">Our Global Buyers</h2>
            <p className="text-xl text-muted-foreground">Trusted by leading brands worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['OTTO', 'MR LADY', 'FAMILY DOLLAR', 'LPP S.A.'].map((buyer, index) => (
              <div key={buyer} className="feature-card text-center animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <img 
                  src={buyerLogos[buyer]} 
                  alt={buyer}
                  className="w-full h-20 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-foreground">{buyer}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/buyers" className="btn-outline">View All Buyers</Link>
          </div>
        </div>
      </section>

      {/* Product Categories Scrolling */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">Our Product Categories</h2>
            <p className="text-xl text-muted-foreground">Premium quality knitted garments for every need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {['T-Shirts', 'Pull Overs', 'Sweat Shirts', 'Pyjamas', 'Polo Shirts', 'Tank Tops'].map((product, index) => (
              <Link 
                key={product}
                to="/products"
                className="product-card animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img 
                  src={categoryImages[product]} 
                  alt={product}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground font-poppins mb-2">{product}</h3>
                  <p className="text-muted-foreground text-sm">High-quality {product.toLowerCase()} in various styles and colors</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="btn-hero group flex items-center space-x-2 w-fit mx-auto">
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
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
                to={`${feature.link}#top`}
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

      {/* Contact Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your textile manufacturing needs and discover how we can help bring your vision to life.
            </p>
            <Link to="/contact" className="btn-hero group flex items-center space-x-2 w-fit mx-auto">
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold text-primary-foreground font-poppins mb-2">20+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-primary-foreground font-poppins mb-2">50+</div>
              <div className="text-primary-foreground/80">Global Buyers</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-primary-foreground font-poppins mb-2">150000+</div>
              <div className="text-primary-foreground/80">Month</div>
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
