
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesList from '@/components/ServicesList';
import { Briefcase } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section for Services page */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <Briefcase className="h-6 w-6 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                IT Solutions for Your Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We provide a comprehensive range of IT services tailored to help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Service highlights with images */}
        <section className="section-container my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-panel rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Custom software development" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold mb-2">Custom Software Development</h3>
                <p className="text-muted-foreground">
                  Tailored solutions designed to meet your specific business requirements and challenges.
                </p>
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Cloud Services" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold mb-2">Cloud Services</h3>
                <p className="text-muted-foreground">
                  Scalable and secure cloud infrastructure to optimize your operations and reduce costs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Data Analytics" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">Data Analytics</h3>
                <p className="text-muted-foreground">
                  Transform your data into actionable insights.
                </p>
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Cybersecurity" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">Cybersecurity</h3>
                <p className="text-muted-foreground">
                  Comprehensive security solutions to protect your digital assets.
                </p>
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9" 
                alt="Mobile App Development" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">Mobile Development</h3>
                <p className="text-muted-foreground">
                  Native and cross-platform mobile applications.
                </p>
              </div>
            </div>
          </div>

          {/* Additional service highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="IT Training" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">IT Training</h3>
                <p className="text-muted-foreground">
                  Comprehensive training programs for your team.
                </p>
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="IT Support" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">IT Support</h3>
                <p className="text-muted-foreground">
                  Reliable technical support for your systems.
                </p>
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c" 
                alt="UI/UX Design" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  User-centered design solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed services section */}
        <ServicesList />
        
        {/* CTA section with background image */}
        <section className="relative py-20 my-16">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Team collaboration" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-background/90"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10 px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss how our IT services can help your business grow and succeed.
            </p>
            <a 
              href="/contact" 
              className="button-primary inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
