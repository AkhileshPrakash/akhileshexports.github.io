import { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We will get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      setIsLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Our Location",
      details: [
        "74, Palani Andavar Nagar,",
        "K.Chettipalayam, Saravana Mahal,",
        "Dharapuram Road, Tirupur 641608,",
        "Tamil Nadu, INDIA"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      title: "Phone Numbers",
      details: [
        "+91 9791902550 (S. Prakash)",
        "Available: Mon-Sat, 9 AM - 6 PM IST"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Addresses",
      details: [
        "prakash@akhileshexports.in",
        "mujeer@akhileshexports.in",
        "ceo@abkgarments.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-secondary" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
        "Time Zone: IST (GMT +5:30)"
      ]
    }
  ];

  const keyContacts = [
    {
      name: "S. Prakash",
      position: "Proprietor",
      phone: "+91 9791902550",
      email: "prakash@akhileshexports.in",
      specialization: "Business Development & Operations"
    },
    {
      name: "A. Mohamed Mujeer",
      position: "Merchandising & Marketing",
      phone: "Available on request",
      email: "mujeer@akhileshexports.in",
      specialization: "International Sales & Client Relations"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold font-poppins mb-6 animate-fade-up">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            Ready to start your partnership with us? Get in touch for inquiries, 
            orders, and business opportunities worldwide.
          </p>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.144441675044!2d77.37465970909504!3d11.063555989057773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9a9d57086ad4b%3A0x179a21ee59b564d8!2sAkhilesh%20Exports!5e1!3m2!1sen!2sin!4v1754410320890!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Akhilesh Exports Location"
        ></iframe>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
                <h2 className="text-3xl font-bold text-foreground font-poppins mb-6">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent inquiries, please call us directly.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="bulk-order">Bulk Order Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="quality-query">Quality Related Query</option>
                      <option value="general">General Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground resize-none"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-hero w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-up">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-poppins mb-8">
                  Get in Touch
                </h2>
                
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={info.title}
                      className="feature-card animate-fade-up"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-muted rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contacts */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Key Contacts
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect directly with our leadership team for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {keyContacts.map((contact, index) => (
              <div 
                key={contact.name}
                className="feature-card text-center animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-poppins mb-1">
                  {contact.name}
                </h3>
                <p className="text-primary font-medium mb-4">{contact.position}</p>
                <p className="text-muted-foreground text-sm mb-4">{contact.specialization}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">{contact.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{contact.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="feature-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What is your minimum order quantity?
              </h3>
              <p className="text-muted-foreground">
                Our minimum order quantity varies by product type. Generally, we accept orders 
                starting from 500 pieces per style per color. Please contact us for specific requirements.
              </p>
            </div>
            
            <div className="feature-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What are your typical lead times?
              </h3>
              <p className="text-muted-foreground">
                Standard lead times range from 15-30 days depending on order quantity and complexity. 
                We provide exact timelines upon order confirmation.
              </p>
            </div>
            
            <div className="feature-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do you provide samples?
              </h3>
              <p className="text-muted-foreground">
                Yes, we provide samples for quality evaluation. Sample costs and shipping charges 
                apply, which can be adjusted against future bulk orders.
              </p>
            </div>
            
            <div className="feature-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What certifications do you have?
              </h3>
              <p className="text-muted-foreground">
                We are SMETA SEDEX 4 Pillar Audit certified and comply with international 
                quality and ethical manufacturing standards. Visit our Certificates page for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;