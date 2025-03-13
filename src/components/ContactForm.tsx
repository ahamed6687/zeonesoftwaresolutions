
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (!agreed) {
      toast.error('Please agree to our privacy policy');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'We will get back to you as soon as possible.',
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setAgreed(false);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="glass-panel rounded-xl p-8"
    >
      <h2 className="text-xl font-display font-semibold mb-6">Send Us a Message</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name <span className="text-destructive">*</span></label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="bg-white/50"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-destructive">*</span></label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="bg-white/50"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <Input
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What is this regarding?"
            className="bg-white/50"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message <span className="text-destructive">*</span></label>
          <Textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            className="bg-white/50"
          />
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox 
            id="privacy" 
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
            className="mt-1"
          />
          <label htmlFor="privacy" className="text-sm text-muted-foreground">
            I agree to the processing of my personal data in accordance with the <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="button-primary w-full flex items-center justify-center"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </span>
          ) : (
            <span className="inline-flex items-center">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
