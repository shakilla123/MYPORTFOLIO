import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Server, Globe, Code, Database, Cloud, Languages } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'networking' | 'security' | 'programming' | 'language';
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'networking' | 'security' | 'programming' | 'language'>('all');
  const [visible, setVisible] = useState(false);
  
  const skills: Skill[] = [
    // Networking Skills
    { name: 'Network Configuration', level: 85, category: 'networking' },
    { name: 'VLAN Management', level: 80, category: 'networking' },
    { name: 'SSH & Telnet', level: 90, category: 'networking' },
    { name: 'Linux System Administration', level: 85, category: 'networking' },
    { name: 'Cloud Migration', level: 70, category: 'networking' },
    { name: 'Network Troubleshooting', level: 85, category: 'networking' },
    { name: 'QA Processes', level: 75, category: 'networking' },
    
    // Security Skills
    { name: 'Cybersecurity Fundamentals', level: 80, category: 'security' },
    { name: 'Security Assessment', level: 75, category: 'security' },
    { name: 'Fortinet Security', level: 85, category: 'security' },
    { name: 'Virtualization', level: 80, category: 'security' },
    { name: 'Huawei Datacom', level: 85, category: 'security' },
    
    // Programming Skills
    { name: 'Java', level: 80, category: 'programming' },
    { name: 'Spring Boot', level: 75, category: 'programming' },
    { name: 'React.js', level: 70, category: 'programming' },
    { name: 'Flutter', level: 65, category: 'programming' },
    { name: 'JavaScript', level: 75, category: 'programming' },
    { name: 'JDBC', level: 70, category: 'programming' },
    
    // Language Skills
    { name: 'English', level: 90, category: 'language' },
    { name: 'French', level: 85, category: 'language' },
    { name: 'Swahili', level: 95, category: 'language' },
  ];
  
  useEffect(() => {
    setVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
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
  
  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);
  
  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'networking':
        return <Server size={22} className="text-primary" />;
      case 'security':
        return <ShieldCheck size={22} className="text-primary" />;
      case 'programming':
        return <Code size={22} className="text-primary" />;
      case 'language':
        return <Languages size={22} className="text-primary" />;
      default:
        return <Globe size={22} className="text-primary" />;
    }
  };
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900"
    >
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto">Technical Skills</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Areas of expertise and proficiency in various technologies and languages.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'all' 
                ? 'bg-gradient-to-r from-primary via-secondary to-primary text-white shadow-lg scale-105' 
                : 'bg-white dark:bg-gray-800 hover:bg-primary/10 shadow'
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setActiveTab('networking')}
            className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center ${
              activeTab === 'networking' 
                ? 'bg-gradient-to-r from-primary via-secondary to-primary text-white shadow-lg scale-105' 
                : 'bg-white dark:bg-gray-800 hover:bg-primary/10 shadow'
            }`}
          >
            <Server size={18} className="mr-2" /> Networking
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center ${
              activeTab === 'security' 
                ? 'bg-gradient-to-r from-primary via-secondary to-primary text-white shadow-lg scale-105' 
                : 'bg-white dark:bg-gray-800 hover:bg-primary/10 shadow'
            }`}
          >
            <ShieldCheck size={18} className="mr-2" /> Security
          </button>
          <button
            onClick={() => setActiveTab('programming')}
            className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center ${
              activeTab === 'programming' 
                ? 'bg-gradient-to-r from-primary via-secondary to-primary text-white shadow-lg scale-105' 
                : 'bg-white dark:bg-gray-800 hover:bg-primary/10 shadow'
            }`}
          >
            <Code size={18} className="mr-2" /> Programming
          </button>
          <button
            onClick={() => setActiveTab('language')}
            className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center ${
              activeTab === 'language' 
                ? 'bg-gradient-to-r from-primary via-secondary to-primary text-white shadow-lg scale-105' 
                : 'bg-white dark:bg-gray-800 hover:bg-primary/10 shadow'
            }`}
          >
            <Languages size={18} className="mr-2" /> Languages
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-500 transform ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } hover:shadow-2xl hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <span className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mr-4">
                  {getIconForCategory(skill.category)}
                </span>
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </div>
              
              <div className="relative h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                <div 
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                  style={{ 
                    width: visible ? `${skill.level}%` : '0%',
                    opacity: visible ? 1 : 0,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-foreground/60">Proficiency</span>
                <span className="font-medium text-primary">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;