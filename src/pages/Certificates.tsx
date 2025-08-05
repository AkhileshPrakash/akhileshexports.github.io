import Layout from '../components/Layout';
import { Award, Shield, CheckCircle, FileText, Globe, Users } from 'lucide-react';
import certificatesImage from '../assets/certificates.jpg';

const Certificates = () => {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "SMETA SEDEX 4 Pillar Audit",
      description: "Comprehensive ethical audit covering Labour Standards, Health & Safety, Environment, and Business Ethics.",
      status: "Certified",
      validity: "Valid until 2025",
      details: [
        "Labour Standards Compliance",
        "Health & Safety Management",
        "Environmental Responsibility",
        "Business Ethics & Anti-Corruption"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Quality Management System",
      description: "Internal quality management system ensuring consistent product quality and manufacturing excellence.",
      status: "Implemented",
      validity: "Ongoing",
      details: [
        "Quality Control Procedures",
        "Process Documentation",
        "Continuous Improvement",
        "Customer Satisfaction Focus"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Export Compliance",
      description: "Full compliance with international export regulations and trade requirements for global markets.",
      status: "Compliant",
      validity: "Updated Annually",
      details: [
        "Export License Compliance",
        "International Trade Standards",
        "Customs Documentation",
        "Product Safety Regulations"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Social Responsibility",
      description: "Commitment to ethical manufacturing practices and social responsibility in all business operations.",
      status: "Active",
      validity: "Ongoing Commitment",
      details: [
        "Fair Labor Practices",
        "Worker Welfare Programs",
        "Community Development",
        "Sustainable Operations"
      ]
    }
  ];

  const complianceStandards = [
    "Global Organic Textile Standard (GOTS) Ready",
    "OEKO-TEX Standard 100 Compatible",
    "WRAP (Worldwide Responsible Accredited Production) Guidelines",
    "SA8000 Social Accountability Standards",
    "ISO 14001 Environmental Management Principles",
    "CPSIA (Consumer Product Safety Improvement Act) Compliance"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={certificatesImage} 
            alt="Quality Certificates" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold font-poppins mb-6 text-white animate-fade-up">
            Certificates & Compliance
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            Our commitment to quality, ethics, and sustainability is validated through 
            internationally recognized certifications and rigorous compliance standards.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold text-accent-foreground font-poppins mb-2">4+</div>
              <div className="text-accent-foreground/80">Major Certifications</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-accent-foreground font-poppins mb-2">100%</div>
              <div className="text-accent-foreground/80">Compliance Rate</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-accent-foreground font-poppins mb-2">24/7</div>
              <div className="text-accent-foreground/80">Quality Monitoring</div>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-accent-foreground font-poppins mb-2">0</div>
              <div className="text-accent-foreground/80">Compliance Issues</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Validated by independent auditors and recognized internationally
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="feature-card animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-muted rounded-lg">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground font-poppins mb-1">
                        {cert.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {cert.status}
                        </span>
                        <span className="text-sm text-muted-foreground">{cert.validity}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Areas:</h4>
                  <ul className="space-y-1">
                    {cert.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-muted-foreground">
              We adhere to international standards and continuously work towards new certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div 
                key={standard}
                className="feature-card animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium">{standard}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">
                Quality Assurance Process
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive quality assurance process ensures that every product meets 
                the highest standards of quality, safety, and compliance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Raw Material Inspection</h3>
                    <p className="text-muted-foreground">Thorough quality check of all incoming materials</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">In-Process Monitoring</h3>
                    <p className="text-muted-foreground">Continuous quality monitoring during production</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Final Product Testing</h3>
                    <p className="text-muted-foreground">Comprehensive testing before packaging and dispatch</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-foreground font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Documentation & Traceability</h3>
                    <p className="text-muted-foreground">Complete documentation for full product traceability</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-up">
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
                <h3 className="text-2xl font-bold text-foreground font-poppins mb-6">
                  Certification Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Enhanced Credibility</h4>
                      <p className="text-muted-foreground text-sm">
                        Independent validation of our quality and ethical practices
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Risk Mitigation</h4>
                      <p className="text-muted-foreground text-sm">
                        Reduced compliance risks for our international buyers
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Market Access</h4>
                      <p className="text-muted-foreground text-sm">
                        Access to premium markets requiring certified suppliers
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <FileText className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Transparency</h4>
                      <p className="text-muted-foreground text-sm">
                        Clear documentation and reporting for all stakeholders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <div className="w-16 h-16 bg-primary-foreground rounded-full mx-auto mb-6 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary-foreground font-poppins mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We continuously invest in maintaining and upgrading our certifications to ensure 
              we meet the evolving standards of quality, ethics, and sustainability in the global textile industry.
            </p>
            <button className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Download Certificates
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificates;