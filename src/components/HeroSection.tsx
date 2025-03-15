
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center border-b border-border/40 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Innovative IT Solutions
            </div>
            
            <h1 className="scroll-m-20 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Transform Your Business with <span className="text-primary">Modern Technology</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Zeone Software delivers cutting-edge IT services and custom software solutions 
              that help businesses thrive in the digital era.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="button-primary"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              
              <Link 
                to="/services" 
                className="button-outline"
              >
                Explore Services
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/5 rounded-full"></div>
            <div className="glass-panel rounded-xl overflow-hidden shadow-xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Professional working with technology" 
                className="w-full h-full object-cover aspect-[4/3]" 
              />
            </div>
            <div className="absolute -bottom-10 -right-12 glass-panel rounded-lg p-4 shadow-lg animate-bounce-slow">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Technology closeup" 
                className="w-32 h-32 object-cover rounded" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
