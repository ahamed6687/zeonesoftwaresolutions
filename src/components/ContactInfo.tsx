
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="glass-panel rounded-xl p-8">
        <h2 className="text-xl font-display font-semibold mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <a href="mailto:zeonesoftware@gmail.com" className="hover:text-primary transition-colors">
                zeonesoftware@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <a href="tel:+918667586727" className="hover:text-primary transition-colors">
                +91 8667586727
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Address</p>
              <address className="not-italic">
                125 Velachery<br />
                Chennai-600042<br />
                Tamil Nadu, India
              </address>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-panel rounded-xl p-8">
        <h2 className="text-xl font-display font-semibold mb-4">Business Hours</h2>
        
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 mr-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Our Working Hours</p>
            <p>We're available to assist you during these times</p>
          </div>
        </div>
        
        <div className="space-y-2 ml-14">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
