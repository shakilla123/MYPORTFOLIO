import React, { useEffect, useRef } from 'react';
import { Terminal, BookOpen, Code, Network } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 transition-all duration-700 opacity-0 translate-y-10 bg-white dark:bg-gray-900"
    >
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto">About Me</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Learn more about my background, interests, and what drives me in the field of network engineering and cybersecurity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGSVlJrzCa0YA/profile-displayphoto-shrink_800_800/B4DZYAA4TfHsAc-/0/1743756954686?e=1751500800&v=beta&t=Wa6WmbTOGTWOPXdMCOtXBE5iAKwJuyeXI-xCTNZ6DVQ" 
                  alt="Ishimwe Shakilla" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full"></div>
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Network Engineer & Cybersecurity Enthusiast
            </h3>
            
            <p className="text-foreground/80 mb-6 leading-relaxed">
              I'm Ishimwe Shakilla, currently pursuing a degree in networks and communication systems. I'm passionate about understanding how networks work and how they can be used to solve real-world problems. As I dive deeper into my studies, I'm discovering the complexities of network engineering and developing a strong foundation in this field.
            </p>
            
            <p className="text-foreground/80 mb-8 leading-relaxed">
              In addition to my network engineering skills, I also have experience in coding. I enjoy using my programming skills to enhance my work and find creative solutions to problems. My commitment to understanding the complexities of computer networks and coding increases my desire to contribute meaningfully to technological advancements.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                  <Terminal size={22} className="text-primary" />
                </span>
                <div>
                  <h4 className="font-medium mb-2">Linux Expertise</h4>
                  <p className="text-foreground/70 text-sm">
                    Skilled in Linux system administration and virtualization
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                  <Network size={22} className="text-primary" />
                </span>
                <div>
                  <h4 className="font-medium mb-2">Network Management</h4>
                  <p className="text-foreground/70 text-sm">
                    Experience with SSH, Telnet, VLAN configuration and management
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                  <Code size={22} className="text-primary" />
                </span>
                <div>
                  <h4 className="font-medium mb-2">Programming</h4>
                  <p className="text-foreground/70 text-sm">
                    Coding experience to enhance network solutions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                  <BookOpen size={22} className="text-primary" />
                </span>
                <div>
                  <h4 className="font-medium mb-2">Continuous Learning</h4>
                  <p className="text-foreground/70 text-sm">
                    Passionate about learning and adapting to new technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;