
import React from 'react';

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
      title: 'AutoFlow Pro',
      description:
        'A desktop-based automotive workshop management system designed to streamline garage operations, vehicle servicing, inventory tracking, billing, and customer records.',
      technologies: ['Java', 'JDBC', 'MySQL'],
      category: 'desktop',
      image:
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=85'
    },
    {
      title: 'AUCA LibraryHub',
      description:
        'A university library management platform developed for Adventist University of Central Africa (AUCA), supporting book cataloguing, borrowing, returns, student records, and library administration.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85'
    },
    {
      title: 'Tixora',
      description:
        'An event discovery and ticketing platform that allows users to explore upcoming events, book tickets, manage reservations, and access event information through a centralized system.',
      technologies: ['Spring Boot', 'React.js', 'PostgreSQL'],
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85'
    },
    {
      title: 'AfriLingo',
      description:
        'A mobile language-learning application designed to promote and preserve African languages through interactive lessons, quizzes, and engaging learning experiences.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      category: 'mobile',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/89/Location_Africa.svg'
    },
    {
      title: 'ModaVerse',
      description:
        'A modern e-commerce platform for shopping male and female fashion, clothing, footwear, and accessories. Designed to provide product discovery, shopping carts, secure checkout, and order management.',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85'
    },
    {
      title: 'RentEase',
      description:
        'A property and vehicle rental platform connecting customers with available houses, apartments, and cars. Includes listing management, availability tracking, booking, and rental management.',
      technologies: ['React.js', 'Spring Boot', 'MySQL'],
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=85'
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title mx-auto text-center">
          Featured Projects
        </h2>

        <p className="text-center text-foreground/70 max-w-2xl mx-auto mt-4">
          A selection of software projects showcasing my experience
          in application development, system design, and digital solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden bg-[#6b4226] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    project.title === 'AfriLingo'
                      ? 'w-3/4 h-3/4 object-contain p-5 brightness-0 invert sepia'
                      : ''
                  }`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
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
