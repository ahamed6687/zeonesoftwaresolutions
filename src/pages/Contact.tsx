
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle mx-auto">
              Have questions or want to discuss a project? Reach out to our team, and we'll get back to you promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>

          <div className="mt-20">
            <div className="glass-panel rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold mb-6">Our Location</h2>
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <div className="h-full w-full flex items-center justify-center bg-muted/30">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">Zeone Software Solutions</h3>
                    <p className="text-muted-foreground">
                      125 Velachery, Chennai-600042, Tamil nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
