import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Star, Shirt, Package, Eye } from 'lucide-react';
import productsImage from '../assets/products-showcase.jpg';

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryName = category?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || '';

  // Mock product data for each category
  const products = [
    {
      id: 1,
      name: `Classic ${categoryName} - Style A`,
      buyer: 'OTTO',
      styleName: 'CL-001',
      description: `Premium quality ${categoryName.toLowerCase()} with excellent fit and comfort`,
      image: productsImage,
      features: ['100% Cotton', 'Pre-shrunk', 'Color-fast', 'Machine washable'],
      colors: ['White', 'Black', 'Navy', 'Grey', 'Red'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: `Premium ${categoryName} - Style B`,
      buyer: 'MR LADY',
      styleName: 'PR-002',
      description: `High-end ${categoryName.toLowerCase()} with modern design and superior quality`,
      image: productsImage,
      features: ['Cotton Blend', 'Moisture-wicking', 'Anti-bacterial', 'UV Protection'],
      colors: ['Blue', 'Green', 'Purple', 'Orange', 'Pink'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: `Eco-Friendly ${categoryName} - Style C`,
      buyer: 'FAMILY DOLLAR',
      styleName: 'EC-003',
      description: `Sustainable ${categoryName.toLowerCase()} made from organic materials`,
      image: productsImage,
      features: ['Organic Cotton', 'Eco-friendly dyes', 'Biodegradable', 'Sustainable'],
      colors: ['Natural', 'Brown', 'Khaki', 'Olive'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 4,
      name: `Sports ${categoryName} - Style D`,
      buyer: 'LPP S.A.',
      styleName: 'SP-004',
      description: `Athletic ${categoryName.toLowerCase()} designed for active lifestyle`,
      image: productsImage,
      features: ['Performance fabric', 'Quick-dry', 'Stretchable', 'Lightweight'],
      colors: ['Black', 'White', 'Royal Blue', 'Red', 'Yellow'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
    },
    {
      id: 5,
      name: `Casual ${categoryName} - Style E`,
      buyer: 'OTTO',
      styleName: 'CS-005',
      description: `Comfortable ${categoryName.toLowerCase()} perfect for everyday wear`,
      image: productsImage,
      features: ['Soft touch', 'Breathable', 'Easy care', 'Durable'],
      colors: ['Grey', 'Navy', 'Maroon', 'Dark Green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 6,
      name: `Designer ${categoryName} - Style F`,
      buyer: 'MR LADY',
      styleName: 'DS-006',
      description: `Fashion-forward ${categoryName.toLowerCase()} with contemporary styling`,
      image: productsImage,
      features: ['Designer cut', 'Premium finish', 'Trendy colors', 'Fashion fit'],
      colors: ['Rose Gold', 'Mint', 'Coral', 'Lavender', 'Teal'],
      sizes: ['S', 'M', 'L', 'XL']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              to="/products" 
              className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Products</span>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold font-poppins mb-6 animate-fade-up">{categoryName}</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
              Discover our complete range of {categoryName.toLowerCase()} manufactured with precision 
              and designed for comfort, style, and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Our {categoryName} Collection
            </h2>
            <p className="text-xl text-muted-foreground">
              Each product is crafted with attention to detail and quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="product-card animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden h-64 rounded-t-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Buyer Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {product.buyer}
                    </div>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Style Name */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.styleName}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground font-poppins mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Available Colors:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.colors.slice(0, 4).map((color, idx) => (
                        <span key={idx} className="text-xs text-muted-foreground">
                          {color}{idx < Math.min(product.colors.length, 4) - 1 ? ',' : ''}
                        </span>
                      ))}
                      {product.colors.length > 4 && (
                        <span className="text-xs text-muted-foreground">+{product.colors.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Sizes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Size Range:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size, idx) => (
                        <span key={idx} className="w-8 h-8 bg-muted text-muted-foreground text-xs rounded flex items-center justify-center">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="btn-outline flex-1 text-sm">View Details</button>
                    <button className="btn-hero flex-1 text-sm">Request Quote</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Info */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shirt className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Quality Fabric</h3>
              <p className="text-muted-foreground">
                Premium quality materials sourced from trusted suppliers ensuring 
                comfort and durability in every piece.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Package className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Custom Manufacturing</h3>
              <p className="text-muted-foreground">
                Flexible manufacturing capabilities to meet your specific requirements 
                including custom designs and private labeling.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Trusted by Global Brands</h3>
              <p className="text-muted-foreground">
                Manufactured for leading international buyers who trust our 
                quality and reliability for their brand requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">
            Interested in Our {categoryName}?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us for detailed specifications, samples, and custom manufacturing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-hero">Request Samples</Link>
            <Link to="/contact" className="btn-outline">Get Quote</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;