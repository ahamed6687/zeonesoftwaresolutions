
import React from 'react';
import { 
  Code, 
  CloudCog, 
  Database, 
  Shield, 
  Globe, 
  Smartphone,
  ArrowRight,
  GraduationCap,
  Headphones,
  Paintbrush
} from 'lucide-react';

// Extended service information
const servicesData = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your specific business requirements and challenges.',
    details: [
      'Enterprise Applications',
      'Legacy System Modernization',
      'API Development & Integration',
      'DevOps & CI/CD Implementation',
      'Maintenance & Support'
    ]
  },
  {
    icon: <CloudCog className="h-10 w-10 text-primary" />,
    title: 'Cloud Services',
    description: 'Scalable and secure cloud infrastructure to optimize your operations and reduce costs.',
    details: [
      'Cloud Migration & Adoption',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Cloud Security & Compliance'
    ]
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights to drive strategic business decisions.',
    details: [
      'Business Intelligence',
      'Big Data Processing',
      'Predictive Analytics',
      'Machine Learning Integration',
      'Data Visualization & Reporting'
    ]
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your valuable digital assets and data.',
    details: [
      'Security Assessment & Audit',
      'Threat Detection & Monitoring',
      'Incident Response & Recovery',
      'Identity & Access Management',
      'Security Training & Awareness'
    ]
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'Engaging and responsive websites that deliver exceptional user experiences.',
    details: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Progressive Web Applications',
      'Web Performance Optimization'
    ]
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications tailored to your business needs.',
    details: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform Solutions',
      'UI/UX Design',
      'Mobile App Maintenance'
    ]
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: 'IT Training',
    description: 'Comprehensive training programs to enhance your team\'s technical skills and knowledge.',
    details: [
      'Custom Training Programs',
      'Technology Workshops',
      'Developer Bootcamps',
      'Certification Preparation',
      'Continuing Education'
    ]
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: 'IT Support',
    description: 'Reliable technical support to ensure your systems run smoothly and efficiently.',
    details: [
      '24/7 Help Desk Services',
      'Remote & On-site Support',
      'Network Administration',
      'Hardware & Software Maintenance',
      'IT Infrastructure Management'
    ]
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user satisfaction and engagement.',
    details: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Usability Testing',
      'Design System Development'
    ]
  }
];

const ServicesList = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 gap-16">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Left side with icon and title */}
            <div className="md:w-1/3">
              <div className="flex items-center justify-center md:justify-start w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-6">{service.description}</p>
            </div>
            
            {/* Right side with details */}
            <div className="md:w-2/3 glass-card rounded-xl p-8">
              <h3 className="text-xl font-display font-medium mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Request a consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
