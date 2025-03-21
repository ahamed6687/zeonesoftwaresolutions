import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Facebook, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <img 
                src="/lovable-uploads/6f2ca793-e5f3-4798-958f-aa99818001c3.png" 
                alt="Zeone Logo" 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-2xl font-display font-bold tracking-tight">
                Zeone<span className="text-primary">Software</span>
              </h3>
            </Link>
            <p className="text-muted-foreground mb-6">
              Transforming ideas into digital reality with innovative IT solutions tailored to your business needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Web & Mobile Development
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-muted-foreground">
                  125 Velachery, Chennai-600042, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-1" />
                <a href="tel:+918667586727" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 8667586727
                </a>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-1" />
                <a href="mailto:zeonesoftware@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  zeonesoftware@gmail.com
                </a>
              </div>
            </div>

            <h3 className="text-lg font-display font-semibold mt-6 mb-4">Newsletter</h3>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-l-md border border-border bg-white/70 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-r-md transition-colors hover:bg-primary/90 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {currentYear} Zeone Software Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
