
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
        
        {/* Main services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="glass-panel rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Software Development" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2">Software Development</h3>
              <p className="text-muted-foreground mb-4">
                Tailored solutions designed to meet your specific business requirements.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary hover:underline">
                Learn more 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="glass-panel rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
              alt="Cloud Services" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2">Cloud Services</h3>
              <p className="text-muted-foreground mb-4">
                Scalable and secure cloud infrastructure to optimize your operations.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary hover:underline">
                Learn more 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="glass-panel rounded-xl overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
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
                </div>
                
                <Link to="/services" className="button-primary inline-flex self-start">
                  View All Services
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional services showcase */}
        <div className="glass-panel rounded-xl overflow-hidden mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/40">
            <div className="p-8 flex flex-col md:flex-row items-center">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Team Collaboration" 
                className="w-32 h-32 object-cover rounded-lg mb-6 md:mb-0 md:mr-6" 
              />
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Collaborative Approach</h3>
                <p className="text-muted-foreground">
                  We work closely with you to understand your goals and create solutions that align with your vision.
                </p>
              </div>
            </div>
            <div className="p-8 flex flex-col-reverse md:flex-row items-center">
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Innovative Technology</h3>
                <p className="text-muted-foreground">
                  We leverage the latest technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Innovative Technology" 
                className="w-32 h-32 object-cover rounded-lg mb-6 md:mb-0 md:ml-6" 
              />
            </div>
          </div>
        </div>
        
        {/* Data analytics and Cybersecurity section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="glass-panel rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
              alt="Data Analytics" 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2">Data Analytics</h3>
              <p className="text-muted-foreground">
                Transform your data into actionable insights to drive strategic business decisions.
              </p>
              <Link to="/services" className="inline-flex items-center mt-4 text-primary hover:underline">
                Learn more 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="glass-panel rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
              alt="Cybersecurity" 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2">Cybersecurity</h3>
              <p className="text-muted-foreground">
                Comprehensive security solutions to protect your valuable digital assets and data.
              </p>
              <Link to="/services" className="inline-flex items-center mt-4 text-primary hover:underline">
                Learn more 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* IT Training, IT Support, and UI/UX Design sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-panel rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="IT Training" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2">IT Training</h3>
              <p className="text-muted-foreground">
                Comprehensive training programs to enhance your team's technical skills and knowledge.
              </p>
              <Link to="/services" className="inline-flex items-center mt-4 text-primary hover:underline">
                Learn more 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
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
                Reliable technical support services to keep your systems running smoothly and efficiently.
              </p>
              <Link to="/services" className="inline-flex items-center mt-4 text-primary hover:underline">
                Learn more 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
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
                User-centered design solutions that enhance user satisfaction and engagement.
              </p>
              <Link to="/services" className="inline-flex items-center mt-4 text-primary hover:underline">
                Learn more 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
