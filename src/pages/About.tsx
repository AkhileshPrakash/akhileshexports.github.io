import Layout from '../components/Layout';
import { Users, Target, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold font-poppins mb-6 animate-fade-up">About Akhilesh Exports</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            A leading manufacturer and exporter of high-quality knitted garments, 
            committed to excellence and customer satisfaction for over a decade.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Akhilesh Exports was established with a vision to become a leading manufacturer 
                and exporter of premium knitted garments. Over the years, we have built a reputation 
                for quality, reliability, and innovation in the textile industry.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey began with a small manufacturing unit and has grown into a 
                state-of-the-art facility serving clients across the globe. We specialize in 
                manufacturing T-Shirts, Pull Overs, Sweat Shirts, Pyjamas, and various other 
                knitted garments.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we are proud to be associated with renowned international buyers and 
                continue to expand our global footprint while maintaining our commitment to 
                quality and sustainability.
              </p>
            </div>
            <div className="animate-fade-up">
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
                <h3 className="text-2xl font-bold text-foreground font-poppins mb-6">Key Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Quality Certified</h4>
                      <p className="text-muted-foreground">SMETA SEDEX 4 Pillar Audit certified</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Global Reach</h4>
                      <p className="text-muted-foreground">Serving clients across multiple countries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Experienced Team</h4>
                      <p className="text-muted-foreground">Skilled professionals with industry expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Customer Focus</h4>
                      <p className="text-muted-foreground">Dedicated to exceeding customer expectations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Meet the professionals driving our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="feature-card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-2">S. Prakash</h3>
              <p className="text-secondary font-medium mb-3">Proprietor</p>
              <p className="text-muted-foreground">
                Leading the company with vision and dedication, ensuring quality and customer satisfaction 
                in every aspect of our operations.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Phone: +91 9791902550</p>
                <p>Email: prakash@akhileshexports.in</p>
              </div>
            </div>

            <div className="feature-card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Target className="w-12 h-12 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-2">A. Mohamed Mujeer</h3>
              <p className="text-primary font-medium mb-3">Merchandising & Marketing</p>
              <p className="text-muted-foreground">
                Expert in merchandising and marketing strategies, building strong relationships with 
                international clients and expanding our global presence.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Email: mujeer@akhileshexports.in</p>
                <p>Email: ceo@abkgarments.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Quality Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in manufacturing, ensuring every garment meets 
                international quality requirements.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Our customers are at the heart of everything we do. We build lasting relationships 
                through trust and reliability.
              </p>
            </div>

            <div className="feature-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-poppins mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We are committed to sustainable practices and ethical manufacturing processes 
                for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;