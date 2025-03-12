
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-blur-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block px-3 py-1 mb-6 glass-panel rounded-full opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <span className="text-sm font-medium text-primary">Innovative IT Solutions</span>
        </div>
        
        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          Transforming Ideas Into <br className="hidden md:inline" />
          <span className="text-primary">Digital Reality</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          We help businesses grow and innovate with cutting-edge technology solutions 
          tailored to meet your unique challenges and opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a 
            href="#contact" 
            className="button-primary w-full sm:w-auto flex items-center justify-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a 
            href="#services" 
            className="button-secondary w-full sm:w-auto"
          >
            Explore Services
          </a>
        </div>
      </div>
      
      {/* Animated gradient circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
