import React, { useRef, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  
  const experiences: ExperienceItem[] = [
    {
      title: "Global Citizen Service Ambassador",
      company: "Global Citizen x Harambee",
      location: "Rwanda",
      period: "Feb 2025",
      description: [
        "Completed a one-week training followed by one week of fieldwork supporting the Move Afrika 2025 concert headlined by John Legend.",
        "Contributed to event coordination, youth mobilization, and advocacy for health investment and youth employment in Africa.",
        "Collaborated with international teams to ensure successful execution of the concert and related initiatives."
      ],
      skills: ["Event Coordination", "Advocacy", "Youth Mobilization", "Communication"]
    },
    {
      title: "Intern",
      company: "AOS Ltd Telecomm House",
      location: "Rwanda",
      period: "Jul 2024 - Aug 2024",
      description: [
        "Rotated across QA, Networking, and Cloud departments, gaining comprehensive exposure to multiple technical domains.",
        "Assisted with QA processes and learned quality assurance methodologies for network infrastructure.",
        "Gained hands-on experience in network configuration using SSH and Telnet via PuTTY.",
        "Participated in VLAN management and configuration tasks under supervision.",
        "Contributed to cloud migration projects using vCenter, learning virtualization techniques."
      ],
      skills: ["Network Configuration", "SSH", "Telnet", "VLAN Management", "vCenter", "QA", "Cloud Migration"]
    }
  ];
  
  const certifications = [
    {
      title: "Fortinet Certified Associate Cybersecurity",
      issuer: "Fortinet",
      date: "2024",
      credentialId: "N/A"
    },
    {
      title: "Fortinet Certified Fundamentals in Cybersecurity",
      issuer: "Fortinet",
      date: "2024",
      credentialId: "N/A"
    },
    {
      title: "Advanced Network Operations 2.0",
      issuer: "Internet Society",
      date: "Apr 2024",
      credentialId: "100376852"
    },
    {
      title: "Introduction to UNIX/Linux and Virtualization",
      issuer: "Internet Society",
      date: "Nov 2023",
      credentialId: "87112742"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto">Work Experience</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            My professional journey in the fields of networking and technology.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 bg-primary/20 transform -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                ref={el => itemsRef.current[index] = el}
                className={`relative mb-12 opacity-0 translate-y-10 transition-all duration-700 delay-${index * 200}`}
              >
                <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-primary shadow-lg transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <h3 className="text-xl font-medium text-primary mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center mb-4">
                        <Briefcase size={16} className="text-foreground/60 mr-2" />
                        <span className="text-foreground/75">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap mb-4">
                        <div className="flex items-center mr-4 mb-2">
                          <MapPin size={16} className="text-foreground/60 mr-2" />
                          <span className="text-foreground/75 text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Calendar size={16} className="text-foreground/60 mr-2" />
                          <span className="text-foreground/75 text-sm">{exp.period}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <ul className="list-disc ml-5 space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-foreground/80 text-sm">{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div
            ref={el => itemsRef.current[experiences.length] = el}
            className="my-16 opacity-0 translate-y-10 transition-all duration-700"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">Education</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-medium mb-2">Networks and Communication Systems</h4>
                  <p className="text-foreground/75 mb-4">Bachelor's Degree (In Progress)</p>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="text-foreground/60 mr-2" />
                  <span className="text-foreground/75 text-sm">2022 - Present</span>
                </div>
              </div>
              <p className="text-foreground/80">
                Studying the fundamentals of network engineering, communication systems, and cybersecurity.
                Developing practical skills in network configuration, troubleshooting, and security implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;