
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
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

        {/* Detailed services section */}
        <ServicesList />
        
        {/* CTA section */}
        <section className="section-container bg-primary/5 rounded-3xl my-16">
          <div className="max-w-3xl mx-auto text-center">
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
