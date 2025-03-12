
import React, { useEffect, useRef } from 'react';
import { Code, CloudCog, Database, Shield, Globe, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your specific business requirements and challenges.'
  },
  {
    icon: <CloudCog className="h-8 w-8 text-primary" />,
    title: 'Cloud Services',
    description: 'Scalable and secure cloud infrastructure to optimize your operations and reduce costs.'
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights to drive strategic business decisions.'
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your valuable digital assets and data.'
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Web Development',
    description: 'Engaging and responsive websites that deliver exceptional user experiences.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications tailored to your business needs.'
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerSection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerSection.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observerCards = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-up');
            }, index * 100);
            observerCards.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observerSection.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) {
        observerCards.observe(card);
      }
    });

    return () => {
      if (sectionRef.current) {
        observerSection.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) {
          observerCards.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section id="services" className="section-container" ref={sectionRef}>
      <div className="text-center mb-16 opacity-0">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle mx-auto">
          We provide a comprehensive range of IT services to help your business thrive in the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="glass-card rounded-xl p-8 opacity-0"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-md bg-primary/10">
              {service.icon}
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
