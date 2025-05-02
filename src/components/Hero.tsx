import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const roles = ['Network Engineer', 'Cybersecurity Enthusiast', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    
    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
        }
        charIndex--;
        typingDelay = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
        }
        charIndex++;
        typingDelay = 150;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 1500; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500; // Pause before typing new word
      }
      
      setTimeout(type, typingDelay);
    };
    
    setTimeout(type, 1000);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 dark:from-primary/10 dark:to-background z-0"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMGEyOCAyOCAwIDEgMCAtNTYgMCIgc3Ryb2tlPSJyZ2JhKDc0LCA0MiwgMTM1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSI+PC9wYXRoPgo8cGF0aCBkPSJNMzAgMzBtLTIwIDBhMjAgMjAgMCAxIDAgNDAgMGEyMCAyMCAwIDEgMCAtNDAgMCIgc3Ryb2tlPSJyZ2JhKDc0LCA0MiwgMTM1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-40 dark:opacity-20 z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <p className="text-secondary font-medium mb-4 animate-fadeInUp">Hello, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-fadeInUp delay-100">
            Ishimwe Shakilla
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground/80 mb-6 animate-fadeInUp delay-200">
            I'm a <span ref={typingRef} className="text-primary"></span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-xl leading-relaxed animate-fadeInUp delay-300">
            Currently pursuing a degree in networks and communication systems. 
            Passionate about understanding network architecture and cybersecurity solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 animate-fadeInUp delay-400">
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </a>
            <a 
              href="#experience" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Experience
            </a>
          </div>
          
          <div className="flex items-center gap-6 animate-fadeInUp delay-500">
            <a 
              href="https://www.linkedin.com/in/ishimwe-shakilla-69047027b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHub size={22} />
            </a>
            <a 
              href="mailto:ishimweshakilla@example.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/70 hover:text-primary transition-colors animate-pulse"
        aria-label="Scroll to About section"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero;