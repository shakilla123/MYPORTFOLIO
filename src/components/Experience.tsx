
import React, { useRef, useEffect } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  tools: string[];
}

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  const experiences: ExperienceItem[] = [
    {
      title: "IT ServiceNow Consultant",
      company: "Muraho Technology",
      location: "Kigali, Rwanda",
      period: "Jan 2026 - Present",
      description: [
        "Configure and support ServiceNow solutions, helping organizations improve IT service delivery and operational workflows.",
        "Develop JavaScript business rules, client scripts, UI policies, and workflow automations to streamline business processes.",
        "Support ITSM, CMDB, Service Catalog, cases, service requests, and work order management.",
        "Assist with REST API integrations, troubleshoot technical issues, and test configurations before deployment.",
        "Translate business requirements into practical technical solutions and maintain implementation documentation."
      ],
      skills: [
        "IT Consulting",
        "ServiceNow Administration",
        "ITSM",
        "CMDB",
        "Workflow Automation",
        "JavaScript",
        "API Integration",
        "Testing & Debugging"
      ],
      tools: [
        "ServiceNow",
        "JavaScript",
        "REST APIs",
        "ITSM",
        "CMDB",
        "Service Catalog"
      ]
    },
    {
      title: "Technical Team Lead",
      company: "Rwanda Internet Community and Technology Alliance (RICTA)",
      location: "Kigali, Rwanda",
      period: "2025",
      description: [
        "Led technical activities supporting Rwanda's internet and digital infrastructure ecosystem.",
        "Collaborated with network and systems engineers on technical planning, implementation, and troubleshooting.",
        "Contributed to .rw domain operations, technical research, and digital infrastructure initiatives.",
        "Coordinated technical tasks, documentation, progress reporting, and communication with stakeholders.",
        "Supported technical workshops and followed infrastructure and service-related issues through to resolution."
      ],
      skills: [
        "Technical Leadership",
        "Digital Infrastructure",
        "Technical Research",
        "Network & Systems Coordination",
        "Stakeholder Management",
        "Technical Documentation"
      ],
      tools: [
        ".rw Domain Operations",
        "Infrastructure Monitoring",
        "Technical Documentation",
        "Reporting"
      ]
    },

    {
      title: "IT Intern",
      company: "AOS Ltd, Telecom House",
      location: "Rwanda",
      period: "Jul 2024 - Sep 2024",
      description: [
        "Rotated across Quality Assurance, Networking, and Cloud departments, gaining practical exposure to different IT environments.",
        "Assisted with quality assurance activities and testing processes.",
        "Practiced network configuration and remote access using SSH and Telnet through PuTTY.",
        "Participated in VLAN configuration and network-related tasks under supervision.",
        "Gained exposure to virtualization and cloud migration activities using VMware vCenter."
      ],
      skills: [
        "Quality Assurance",
        "Software Testing",
        "Network Configuration",
        "VLAN Management",
        "Linux",
        "Virtualization",
        "Cloud Computing"
      ],
      tools: [
        "PuTTY",
        "SSH",
        "Telnet",
        "VMware vCenter",
        "VLANs"
      ]
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
          <h2 className="section-title mx-auto">Experience & Education</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Building technology solutions, leading technical initiatives, and
            turning ideas into practical results.
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
                className="relative mb-12 opacity-0 translate-y-10 transition-all duration-700"
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
                            <li key={i} className="text-foreground/80 text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Core Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tools.map((tool, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-foreground/80 text-xs rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div
            ref={el => itemsRef.current[experiences.length] = el}
            className="my-16 opacity-0 translate-y-10 transition-all duration-700"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">
              Education
            </h3>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-medium mb-2">
                    Networks and Communication Systems
                  </h4>
                  <p className="text-foreground/75 mb-4">
                    Bachelor's Degree
                  </p>
                  <p className="text-foreground/75 text-sm">
                    Adventist University of Central Africa (AUCA)
                  </p>
                </div>

                <div className="flex items-center">
                  <Calendar size={16} className="text-foreground/60 mr-2" />
                  <span className="text-foreground/75 text-sm">2022 - 2025</span>
                </div>
              </div>

              <p className="text-foreground/80 mt-4">
                Developed a strong foundation in IT especially Programming, systems administration,
                network architecture, virtualization, cybersecurity, and
                communication technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
