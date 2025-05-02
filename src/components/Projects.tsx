import React, { useRef, useEffect } from 'react';
import { Code, Database, Layout, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop';
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Car Garage Management System',
      description: 'A comprehensive Java-based system for managing car garage operations, including inventory, service tracking, and customer management.',
      technologies: ['Java', 'JDBC', 'MySQL'],
      category: 'desktop',
      image: 'https://s3.envato.com/files/400918288/Inline-Preview-Image-590x300.png'
    },
    {
      title: 'Vehicle Management System',
      description: 'Advanced system for fleet management and vehicle tracking with detailed reporting capabilities.',
      technologies: ['Java', 'Spring Boot', 'React.js'],
      category: 'web',
      image: 'https://www.lovelycoding.org/wp-content/uploads/2022/09/Vehicle-Management-System.webp'
    },
    {
      title: 'Event Management System',
      description: 'Full-stack application for event planning and management with real-time updates.',
      technologies: ['Spring Boot', 'React.js', 'PostgreSQL'],
      category: 'web',
      image: 'https://outranking.s3.amazonaws.com/934231_Monique%20Dahito/60468988/2023-11-17T01%3A00%3A46.305102_6f3f414e-5d15-4d56-a006-05ccb7cd997a'
    },
    {
      title: 'AfriLingo',
      description: 'Mobile application for learning African languages with interactive lessons and quizzes.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      category: 'mobile',
      image: 'https://afrolingo.co.za/wp-content/uploads/2024/12/Marketing-Advertising.png'
    }
  ];

  // Component implementation...
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <h2 className="section-title mx-auto text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;