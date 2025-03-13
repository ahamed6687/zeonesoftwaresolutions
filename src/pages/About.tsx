
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Award, Building, Clock, Target, GraduationCap } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section for About page */}
        <section className="bg-gradient-to-b from-green-50 to-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <Building className="h-6 w-6 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                About Zeone Software Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Innovative IT solutions tailored to transform your business and drive growth
              </p>
            </div>
          </div>
        </section>

        {/* Company overview */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Journey</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Founded in 2008, Zeone Software Solutions has grown from a small team of passionate 
                developers to a comprehensive IT solutions provider serving businesses across industries.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Our journey began with a simple mission: to help businesses leverage technology to 
                achieve their goals. Over the years, we've expanded our expertise and service offerings 
                while maintaining our commitment to excellence and client satisfaction.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Based in Chennai, India, we now serve clients globally, bringing innovative solutions 
                to businesses of all sizes—from startups to enterprises.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Zeone Software Team" 
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-container bg-secondary/50">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Foundation</h2>
            <p className="section-subtitle mx-auto">
              What drives us to deliver exceptional IT solutions for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-md bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, 
                enhance efficiency, and create lasting value for our clients and their customers.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-md bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the preferred technology partner for businesses worldwide, known for our 
                innovation, reliability, and commitment to delivering exceptional results.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-md bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, integrity, innovation, collaboration, and client-centricity 
                guide everything we do, from project inception to delivery and support.
              </p>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle mx-auto">
              The talented professionals behind our innovative solutions
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72" 
                  alt="Zeone Software Team" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-display font-semibold mb-4">Experts in Their Field</h3>
                <p className="text-lg mb-6 text-muted-foreground">
                  Our team consists of passionate technology enthusiasts with diverse backgrounds 
                  and specializations. From seasoned developers and designers to IT consultants 
                  and project managers, each member brings valuable expertise to the table.
                </p>
                <div className="flex items-center mb-6">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  <span className="text-xl font-medium">50+ IT Professionals</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <span className="text-xl font-medium">Certified Experts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-container bg-primary/5 rounded-3xl my-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Want to Learn More?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We'd love to share more about our company and discuss how we can help your business thrive.
            </p>
            <a 
              href="/contact" 
              className="button-primary inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
