
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled 
        ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' 
        : 'py-5 bg-transparent'}`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/6f2ca793-e5f3-4798-958f-aa99818001c3.png" 
                alt="Zeone Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-display font-bold tracking-tight">
              Zeone<span className="text-primary">Software</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`font-medium transition ${isActive('/services') ? 'text-primary' : 'hover:text-primary'}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'button-primary bg-primary/90' : 'button-primary'}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-20 bg-white/95 backdrop-blur-md animate-fade-in">
          <nav className="h-full flex flex-col items-center justify-center space-y-8 text-lg">
            <Link 
              to="/" 
              className={`font-medium transition ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition ${isActive('/services') ? 'text-primary' : 'hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'button-primary bg-primary/90' : 'button-primary'}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
