import { useState } from 'react';
import Layout from '../components/Layout';
import { X, ZoomIn } from 'lucide-react';
import productsImage from '../assets/products-showcase.jpg';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const productCategories = [
    {
      id: 1,
      name: "T-Shirts",
      description: "High-quality cotton and cotton-blend t-shirts in various styles, colors, and sizes for men, women, and children.",
      image: productsImage,
      specifications: [
        "100% Cotton and Cotton Blends",
        "Single Jersey, Pique, and Rib Fabrics",
        "Sizes: XS to 5XL",
        "Various Colors Available",
        "Custom Printing Options"
      ]
    },
    {
      id: 2,
      name: "Pull Overs",
      description: "Comfortable and stylish pullovers in fleece and cotton materials, perfect for casual and semi-formal wear.",
      image: productsImage,
      specifications: [
        "Cotton Fleece and Terry",
        "Hooded and Non-hooded Styles",
        "Zipper and Pullover Options",
        "Custom Embroidery Available",
        "All Age Groups"
      ]
    },
    {
      id: 3,
      name: "Sweat Shirts",
      description: "Premium quality sweatshirts designed for comfort and durability, suitable for all seasons.",
      image: productsImage,
      specifications: [
        "Heavy Weight Cotton Fleece",
        "Crew Neck and V-Neck Styles",
        "Pre-shrunk Fabric",
        "Reinforced Seams",
        "Custom Logo Placement"
      ]
    },
    {
      id: 4,
      name: "Pyjamas",
      description: "Soft and comfortable sleepwear made from breathable fabrics for a good night's rest.",
      image: productsImage,
      specifications: [
        "100% Cotton and Cotton Blends",
        "Lightweight and Breathable",
        "Various Prints and Patterns",
        "Elastic Waistbands",
        "Set and Separate Options"
      ]
    },
    {
      id: 5,
      name: "Polo Shirts",
      description: "Classic polo shirts in pique and jersey fabrics, ideal for corporate and casual wear.",
      image: productsImage,
      specifications: [
        "Pique and Jersey Fabrics",
        "Collar and Button Placket",
        "Various Colors Available",
        "Embroidered Logo Options",
        "Professional Finish"
      ]
    },
    {
      id: 6,
      name: "Tank Tops",
      description: "Comfortable tank tops and vests for summer wear and sports activities.",
      image: productsImage,
      specifications: [
        "Lightweight Cotton Jersey",
        "Sleeveless Design",
        "Ribbed Neckline and Armholes",
        "Moisture Wicking Options",
        "Athletic and Casual Styles"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold font-poppins mb-6 animate-fade-up">Our Products</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            Premium quality knitted garments manufactured with precision and care. 
            Explore our diverse range of products designed for comfort, style, and durability.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Click on any product to view detailed specifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <div 
                key={product.id}
                className="product-card animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white font-poppins">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <button className="btn-outline w-full">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to quality ensures every garment meets international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Quality Materials</h3>
              <p className="text-muted-foreground">
                We use only premium quality fabrics sourced from trusted suppliers to ensure 
                durability and comfort in every garment.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-secondary-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Precision Manufacturing</h3>
              <p className="text-muted-foreground">
                Advanced machinery and skilled craftsmanship ensure precise cutting, stitching, 
                and finishing for perfect garment construction.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Rigorous Testing</h3>
              <p className="text-muted-foreground">
                Every product undergoes thorough quality testing including fabric strength, 
                color fastness, and dimensional stability checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">
            Custom Solutions
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We offer customization options to meet your specific requirements including 
            private labeling, custom designs, and bulk manufacturing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="feature-card">
              <h3 className="text-xl font-bold text-foreground font-poppins mb-4">
                Private Labeling
              </h3>
              <p className="text-muted-foreground">
                Complete private label solutions with your brand name, labels, and packaging 
                requirements for retail and wholesale distribution.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-xl font-bold text-foreground font-poppins mb-4">
                Bulk Orders
              </h3>
              <p className="text-muted-foreground">
                Large volume manufacturing capabilities with competitive pricing and 
                flexible delivery schedules to meet your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-foreground font-poppins mb-4">
                {selectedProduct.name}
              </h2>
              <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Specifications:</h3>
              <ul className="space-y-2">
                {selectedProduct.specifications.map((spec: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{spec}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex gap-4">
                <button className="btn-hero flex-1">Request Quote</button>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="btn-outline flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Products;