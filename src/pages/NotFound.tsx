
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <div className="glass-panel rounded-xl p-12 animate-fade-in">
            <h1 className="text-8xl font-display font-bold mb-6 text-primary">404</h1>
            <h2 className="text-2xl font-display font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            <Link to="/" className="button-primary inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
