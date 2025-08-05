import { Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-poppins">Akhilesh Exports</h2>
                <p className="text-sm text-accent-foreground/80">Manufacturer & Exporters of Knitted Garments</p>
              </div>
            </div>
            <p className="text-accent-foreground/80 mb-4 max-w-md">
              Leading manufacturer and exporter of high-quality knitted garments including T-Shirts, 
              Pull Overs, Sweat Shirts, and Pyjamas. Committed to quality and customer satisfaction 
              since our establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">About Us</Link></li>
              <li><Link to="/infrastructure" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Infrastructure</Link></li>
              <li><Link to="/products" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Products</Link></li>
              <li><Link to="/buyers" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Our Buyers</Link></li>
              <li><Link to="/certificates" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Certificates</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div className="text-sm text-accent-foreground/80">
                  74, Palani Andavar Nagar,<br />
                  K.Chettipalayam, Saravana Mahal,<br />
                  Dharapuram Road, Tirupur 641608, INDIA
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-sm text-accent-foreground/80">+91 9791902550</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-sm text-accent-foreground/80">prakash@akhileshexports.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-accent-foreground/80">
            © 2024 Akhilesh Exports. All rights reserved. | Designed with care for quality textile manufacturing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;