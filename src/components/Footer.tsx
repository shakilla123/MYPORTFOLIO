import React from 'react';
import { Github as GitHub, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">
              IS<span className="text-accent">.</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Network Engineer & Cybersecurity Enthusiast
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/ishimwe-shakilla-69047027b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHub size={22} />
            </a>
            <a 
              href="mailto:ishimweshakilla@example.com" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">More Pages</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#certifications" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#certifications')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Certifications
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-primary mr-2 mt-1" />
                <span className="text-gray-400">ishimweshakila8@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Linkedin size={18} className="text-primary mr-2 mt-1" />
                <span className="text-gray-400">
                  <a 
                    href="https://www.linkedin.com/in/ishimwe-shakilla-69047027b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with my latest projects and achievements.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-800 text-white w-full"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            © {currentYear} Ishimwe Shakilla. All rights reserved. Made with <Heart size={14} className="text-primary mx-1" fill="currentColor" /> in Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;