import React, { useState, useRef, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-10 max-w-6xl mx-auto">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-24">
              <h3 className="text-2xl font-serif font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <span className="flex-shrink-0 p-3 bg-primary/10 rounded-lg mr-4">
                    <Phone size={22} className="text-primary" />
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-foreground/70">+250 791 443 196</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 p-3 bg-primary/10 rounded-lg mr-4">
                    <Mail size={22} className="text-primary" />
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-foreground/70">ishimweshakila8@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 p-3 bg-primary/10 rounded-lg mr-4">
                    <MapPin size={22} className="text-primary" />
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-foreground/70">Kigali, Rwanda</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 p-3 bg-primary/10 rounded-lg mr-4">
                    <Linkedin size={22} className="text-primary" />
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/ishimwe-shakilla-69047027b/" 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6">
                <h4 className="font-medium mb-3">Open to Opportunities</h4>
                <p className="text-foreground/70 text-sm mb-4">
                  Currently looking for internship opportunities and projects in network engineering and cybersecurity.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    Network Engineering
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    Cybersecurity
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    Cloud Technologies
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-serif font-medium mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-success/10 text-success p-4 rounded-lg mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p>Your message has been sent successfully! I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-800"
                        placeholder="Ishimwe Shakilla"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-800"
                        placeholder="Ishimweshakila8@gmail.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-800"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-800"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;