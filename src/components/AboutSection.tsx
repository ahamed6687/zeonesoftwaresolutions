
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const features = [
  'Expert team of certified IT professionals',
  'Proven track record with 200+ successful projects',
  'Cutting-edge technologies and methodologies',
  'Tailored solutions for your unique business needs',
  'Ongoing support and maintenance services',
  'Transparent communication and project management'
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === imageRef.current) {
            entry.target.classList.add('animate-fade-in');
          } else if (entry.target === contentRef.current) {
            entry.target.classList.add('animate-fade-in-right');
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="about" className="section-container bg-secondary/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div 
          ref={imageRef} 
          className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
            alt="Software Development" 
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl"></div>
          <div className="absolute inset-4 glass-panel rounded-lg overflow-hidden flex items-center justify-center">
            <div className="absolute top-6 left-6 w-20 h-20 bg-primary/10 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-primary/20 rounded-full"></div>
            <div className="relative z-10 text-center p-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-display font-bold text-primary">15+</span>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-2">Years of Excellence</h3>
              <p className="text-muted-foreground">Delivering exceptional IT solutions since 2008</p>
            </div>
          </div>
        </div>

        <div 
          ref={contentRef} 
          className="opacity-0"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <h2 className="section-title">About Zeone Software</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Zeone Software is a forward-thinking IT company dedicated to helping businesses
            harness the power of technology to achieve their goals and drive growth.
          </p>
          <p className="text-lg mb-8 text-muted-foreground">
            Our team of expert developers, designers, and consultants work
            collaboratively to deliver innovative solutions that address your unique
            challenges and opportunities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="button-primary inline-flex">
            Get to Know Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
