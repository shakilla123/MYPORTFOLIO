import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  contact: string; // Added contact number field
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Ishimwe Prince',
      role: 'AUCA Innovation Center Coordinator',
      company: 'AUCA Innovation Center',
      content: 'Shakilla demonstrates exceptional technical skills and a remarkable ability to grasp complex concepts quickly. Her contributions to our projects have been invaluable.',
    },
    {
      name: 'Nkurunziza Claude',
      role: 'IDC quality assurance administrator at AOS LTD',
      company: 'AOS Ltd',
      content: 'During her internship, Shakilla showed great initiative and technical prowess. Her work in network configuration and cloud migration was particularly impressive.',
    },
    {
      name: 'Papias Ndagijimana',
      role: 'Project Manager',
      company: 'Interpretation Services',
      content: "Shakilla's multilingual abilities and professional interpretation skills were crucial to the success of our international projects.",
     
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title mx-auto text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Testimonials
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div>
                <div className="mb-4">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <p className="text-xs text-primary/70 mt-1 font-mono">
                    {testimonial.contact}
                  </p>
                </div>
                
                <Quote className="text-primary/20 w-8 h-8 mb-2" />
                <p className="text-gray-700 dark:text-gray-300 italic text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
