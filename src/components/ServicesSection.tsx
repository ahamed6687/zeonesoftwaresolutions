
import React, { useEffect, useRef } from 'react';
import ServicesList from './ServicesList';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            entry.target.classList.add('animate-fade-in');
          } else if (entry.target === contentRef.current) {
            entry.target.classList.add('animate-slide-up');
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="services" className="section-container" ref={sectionRef}>
      <div 
        ref={titleRef}
        className="text-center mb-16 opacity-0"
        style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
      >
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We provide comprehensive IT solutions to help your business succeed
        </p>
      </div>
      
      <div 
        ref={contentRef}
        className="opacity-0 relative"
        style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
      >
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div className="md:col-span-2">
            <ServicesList />
          </div>
          
          <div className="glass-panel rounded-xl overflow-hidden h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Software Development" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-display font-semibold text-white">Expert Tech Solutions</h3>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <p className="mb-4">
                  Our team of experienced IT professionals is dedicated to delivering tailored solutions 
                  that meet your unique business needs.
                </p>
                <p className="mb-6">
                  Whether you're looking for custom software development, IT training, or technical support, 
                  we have the expertise to help you succeed.
                </p>
              </div>
              
              <Link to="/services" className="button-primary inline-flex self-start">
                View All Services
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="glass-panel rounded-xl overflow-hidden mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/40">
            <div className="p-8 flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Team Collaboration" 
                className="w-32 h-32 object-cover rounded-lg mr-6" 
              />
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Collaborative Approach</h3>
                <p className="text-muted-foreground">
                  We work closely with you to understand your goals and create solutions that align with your vision.
                </p>
              </div>
            </div>
            <div className="p-8 flex items-center">
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Innovative Technology</h3>
                <p className="text-muted-foreground">
                  We leverage the latest technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758" 
                alt="Innovative Technology" 
                className="w-32 h-32 object-cover rounded-lg ml-6" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
