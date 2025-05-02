import React, { useState, useRef, useEffect } from 'react';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  image: string;
}

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const certifications: Certification[] = [
    {
      id: '1',
      name: 'Huawei Datacom HCIA',
      issuer: 'Huawei',
      date: '2024',
      credentialId: 'HCIA-001',
      skills: ['Network Routing', 'Switching', 'Network Security'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHyUbwUVyT_n3dPqke8BTH0Po0_TmohRIXAQ&s'
    },
    {
      id: '2',
      name: 'Fortinet Certified Associate Cybersecurity',
      issuer: 'Fortinet',
      date: '2024',
      credentialId: 'N/A',
      skills: ['Network Security', 'Firewall Configuration', 'Threat Protection'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      id: '3',
      name: 'Cisco Network Essentials',
      issuer: 'Cisco',
      date: '2024',
      credentialId: 'CISCO-001',
      skills: ['Networking Fundamentals', 'Network Design', 'Troubleshooting'],
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg'
    },
    {
      id: '4',
      name: 'Linux Essentials',
      issuer: 'Linux Professional Institute',
      date: '2024',
      credentialId: 'LINUX-001',
      skills: ['Linux Administration', 'Shell Scripting', 'System Management'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg'
    }
  ];
  
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
  
  const nextCertificate = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };
  
  const prevCertificate = () => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };
  
  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-20 transition-all duration-700 opacity-0 translate-y-10 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto">Certifications</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Professional certifications and qualifications in networking and cybersecurity.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-12">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={prevCertificate}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-primary hover:text-white transition-all"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="text-center">
                <span className="text-sm text-foreground/60">
                  {activeIndex + 1} of {certifications.length}
                </span>
              </div>
              
              <button 
                onClick={nextCertificate}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-primary hover:text-white transition-all"
                aria-label="Next certificate"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {certifications.map((cert) => (
                  <div key={cert.id} className="w-full flex-shrink-0">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto relative">
                          <img 
                            src={cert.image} 
                            alt={cert.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                            <Award size={60} className="text-white" />
                          </div>
                        </div>
                        <div className="p-8 md:w-2/3">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-medium">{cert.name}</h3>
                            <div className="p-2 bg-accent/10 rounded-full">
                              <Award size={20} className="text-accent" />
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <p className="text-foreground/75 mb-1">
                              <span className="font-medium">Issuer:</span> {cert.issuer}
                            </p>
                            <p className="text-foreground/75 mb-1">
                              <span className="font-medium">Date:</span> {cert.date}
                            </p>
                            <p className="text-foreground/75 mb-4">
                              <span className="font-medium">Credential ID:</span> {cert.credentialId}
                            </p>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="text-sm font-medium uppercase text-foreground/60 mb-2">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, i) => (
                                <span 
                                  key={i} 
                                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {cert.credentialId !== 'N/A' && (
                            <a 
                              href="#" 
                              className="inline-flex items-center text-primary hover:underline"
                            >
                              <span className="mr-1">View Credential</span>
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-medium mb-4">My Learning Journey</h3>
              <p className="text-foreground/80 mb-4">
                Continuously expanding my knowledge in networking and cybersecurity through professional certifications and hands-on learning. Each certification represents a milestone in my journey to become a proficient network engineer.
              </p>
              <p className="text-foreground/80">
                I focus on practical skills that can be applied in real-world scenarios, combining theoretical knowledge with hands-on experience to build a comprehensive skill set.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-medium mb-4">Future Goals</h3>
              <p className="text-foreground/80 mb-4">
                My certification roadmap includes advanced networking certifications and specialized cybersecurity credentials to deepen my expertise in these fields.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  Advanced network security specialization
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  Cloud networking certification
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  Advanced Linux administration credentials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;