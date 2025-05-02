import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Ishimwe Prince',
      role: 'Coordinator',
      company: 'AUCA Innovation Center',
      content: 'Shakilla demonstrates exceptional technical skills and a remarkable ability to grasp complex concepts quickly. Her contributions to our projects have been invaluable.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQEfZtWgB4h7Sw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718257154507?e=1751500800&v=beta&t=NivYz6ghv0AQsbmihT9hsYryWDl2s--ddnV6OJ39aT8'
    },
    {
      name: 'Nkurunziza Claude',
      role: 'IDC quality assurance administrator at AOS LTD',
      company: 'AOS Ltd',
      content: 'During her internship, Shakilla showed great initiative and technical prowess. Her work in network configuration and cloud migration was particularly impressive.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQGhbSkpeRKvNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693507595860?e=1751500800&v=beta&t=qqoCfT6oxb5vaFcPZh9toPYvdh5u1wP3QR6QBLY01_o'
    },
    {
      name: 'Papias Ndagijimana',
      role: 'Project Manager',
      company: 'Interpretation Services',
      content: 'Shakilla\'s multilingual abilities and professional interpretation skills were crucial to the success of our international projects.',
      image: 'https://st2.depositphotos.com/1011643/10157/i/450/depositphotos_101572888-good-looking-corporate-worker.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title mx-auto text-center">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/70">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <Quote className="text-primary/20 w-8 h-8 mb-2" />
              <p className="text-foreground/80 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;