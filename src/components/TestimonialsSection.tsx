
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Zeone Software completely transformed our digital infrastructure. Their expertise and dedication to our success made them an invaluable partner.",
    author: "Sarah Johnson",
    title: "CTO, FinanceHub Inc."
  },
  {
    id: 2,
    content: "Working with the Zeone Software team has been a game-changer for our business. They delivered a custom solution that exceeded our expectations.",
    author: "Michael Chen",
    title: "CEO, GrowthWave"
  },
  {
    id: 3,
    content: "The cybersecurity services provided by Zeone Software gave us peace of mind knowing our sensitive data is protected. Highly recommended!",
    author: "Emma Rodriguez",
    title: "CISO, HealthCare Solutions"
  },
  {
    id: 4,
    content: "Zeone Software's cloud migration strategy helped us reduce costs by 40% while improving our overall system performance. Impressive results!",
    author: "David Williams",
    title: "CIO, RetailMax"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsPerView = 3;

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - testimonialsPerView ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - testimonialsPerView : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const visibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < Math.min(testimonialsPerView, testimonials.length); i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="section-container" ref={sectionRef}>
      <div className="text-center mb-16 opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle mx-auto">
          Don't just take our word for it – hear from some of our satisfied clients
          who have experienced the HorizonTech difference.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out`}
          >
            {visibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="glass-card rounded-xl p-8 transition-all duration-300 hover:translate-y-[-5px] opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-lg mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="font-semibold font-display">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {testimonials.length > testimonialsPerView && (
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-sm border border-border hover:bg-secondary transition-colors"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-sm border border-border hover:bg-secondary transition-colors"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
