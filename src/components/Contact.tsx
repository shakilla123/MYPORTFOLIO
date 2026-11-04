
import React, { useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Linkedin, Briefcase } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const opportunities = [
    'IT Operations',
    'ServiceNow Administration',
    'IT Support',
    'Systems Administration',
    'Network Administration',
    'Cybersecurity',
    'Cloud Technologies',
    'IT Service Management'
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="container">

        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto mt-4">
            Open to professional opportunities, collaborations,
            and roles where I can apply my technical skills.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-medium mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Phone className="text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+250791443196" className="text-foreground/70">
                    +250 791 443 196
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:ishimweshakila8@gmail.com" className="text-foreground/70">
                    ishimweshakila8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-primary" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Kigali, Rwanda</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Linkedin className="text-primary" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/ishimwe-shakilla-69047027b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Opportunities */}
          <div className="bg-primary/5 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <Briefcase className="text-primary" size={26} />
              <h3 className="text-2xl font-medium">
                Open to Opportunities
              </h3>
            </div>

            <p className="text-foreground/75 leading-relaxed mb-6">
              I am open to IT Operations roles and other
              opportunities within my areas of expertise.
              I welcome positions that allow me to contribute
              my technical knowledge, solve problems, and grow
              professionally.
            </p>

            <h4 className="font-medium mb-4">
              Areas of Interest
            </h4>

            <div className="flex flex-wrap gap-2">
              {opportunities.map((item) => (
                <span
                  key={item}
                  className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="mailto:ishimweshakila8@gmail.com?subject=Professional%20Opportunity"
              className="btn btn-primary inline-flex items-center mt-8"
            >
              <Mail size={18} className="mr-2" />
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
