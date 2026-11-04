
import React, { useState, useRef, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  careerPaths: string[];
  image: string;
  imageFit: 'contain' | 'cover';
  type: 'Certification' | 'Achievement';
}

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const certifications: Certification[] = [
    {
      id: '1',
      name: 'HCIA-Datacom',
      issuer: 'Huawei Technologies',
      date: 'Valid through July 1, 2028',
      credentialId: '010103901683810042132756723',
      description:
        'Huawei Certified ICT Associate in Datacom, demonstrating foundational knowledge of data communication networks, routing, switching, and network technologies.',
      skills: [
        'Network Routing',
        'Switching',
        'IP Networking',
        'Network Configuration',
        'Network Troubleshooting',
        'Datacom Fundamentals'
      ],
      careerPaths: [
        'Junior Network Administrator',
        'Network Support Technician',
        'Network Operations Center (NOC) Technician',
        'Datacom Support Technician'
      ],
      image: '/images/huawei-hcia-certificate.png',
      imageFit: 'contain',
      type: 'Certification'
    },
    {
      id: '2',
      name: 'Fortinet Cybersecurity Fundamentals',
      issuer: 'Fortinet',
      date: '2024',
      credentialId: 'Not provided',
      description:
        'Foundational cybersecurity training covering essential security concepts, network protection, threat awareness, and the principles of securing digital infrastructure.',
      skills: [
        'Cybersecurity Fundamentals',
        'Network Security',
        'Threat Protection',
        'Firewall Concepts',
        'Security Awareness',
        'Threat Detection'
      ],
      careerPaths: [
        'Junior Security Operations Analyst',
        'SOC Analyst Trainee',
        'Network Security Support',
        'Firewall Support Technician'
      ],
      image: 'https://cdn.simpleicons.org/fortinet/EE3124',
      imageFit: 'contain',
      type: 'Certification'
    },
    {
      id: '3',
      name: 'ACSC - 1st Place, picoCTF-Africa 2025',
      issuer: 'Adventist University of Central Africa',
      date: 'May 13, 2025',
      credentialId: 'Certificate of Achievement',
      description:
        'Awarded for winning 1st Position in the picoCTF-Africa 2025 Competition, Rwanda Undergraduate Category. Recognition of practical cybersecurity challenge-solving and competitive technical achievement.',
      skills: [
        'Cybersecurity Problem-Solving',
        'Capture The Flag (CTF)',
        'Security Challenge Analysis',
        'Technical Investigation',
        'Analytical Thinking',
        'Competitive Cybersecurity'
      ],
      careerPaths: [
        'Cybersecurity Analyst',
        'Security Research Assistant',
        'Junior Penetration Testing Trainee',
        'Cybersecurity Competition Participant'
      ],
      image: '/images/acsc-certificate-upright.png',
      imageFit: 'contain',
      type: 'Achievement'
    },
    {
      id: '4',
      name: 'Cisco Networking Essentials',
      issuer: 'Cisco',
      date: '2024',
      credentialId: 'Not provided',
      description:
        'Networking fundamentals covering connectivity, network infrastructure, basic configuration, and troubleshooting.',
      skills: [
        'Networking Fundamentals',
        'Network Infrastructure',
        'IP Addressing',
        'Network Troubleshooting',
        'Connectivity'
      ],
      careerPaths: [
        'IT Support Technician',
        'Junior Network Support',
        'Technical Support Specialist'
      ],
      image: 'https://cdn.simpleicons.org/cisco/1BA0D7',
      imageFit: 'contain',
      type: 'Certification'
    },
    {
      id: '5',
      name: 'Linux Essentials',
      issuer: 'Linux Professional Institute',
      date: '2024',
      credentialId: 'Not provided',
      description:
        'Foundational Linux knowledge covering operating system concepts, command-line operations, file management, and basic system administration.',
      skills: [
        'Linux Fundamentals',
        'Command Line',
        'File Management',
        'Shell Basics',
        'Operating Systems',
        'System Administration'
      ],
      careerPaths: [
        'Junior Linux Administrator',
        'IT Systems Support',
        'Technical Support Specialist',
        'Junior Cloud Support'
      ],
      image: 'https://cdn.simpleicons.org/linux/FCC624',
      imageFit: 'contain',
      type: 'Certification'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove(
            'opacity-0',
            'translate-y-10'
          );
        }
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const nextCertificate = () => {
    setActiveIndex(
      (prev) => (prev + 1) % certifications.length
    );
  };

  const prevCertificate = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + certifications.length) %
        certifications.length
    );
  };

  const activeCertificate = certifications[activeIndex];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 transition-all duration-700 opacity-0 translate-y-10 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">

        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto">
            Certifications & Achievements
          </h2>

          <p className="text-foreground/70 max-w-3xl mx-auto mt-4">
            Professional certifications, technical expertise,
            and competitive achievements across networking,
            cybersecurity, and IT infrastructure.
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
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`
                }}
              >

                {certifications.map((cert) => (

                  <div
                    key={cert.id}
                    className="w-full flex-shrink-0"
                  >

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">

                      <div className="md:flex">

                        {/* Certificate / Platform Image */}
                        <div className="md:w-2/5 min-h-[260px] md:min-h-[440px] bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-5">

                          <img
                            src={cert.image}
                            alt={`${cert.name} certificate or logo`}
                            className={`w-full h-full ${
                              cert.imageFit === 'contain'
                                ? 'object-contain'
                                : 'object-cover'
                            }`}
                            loading="lazy"
                          />

                        </div>

                        {/* Certification Information */}
                        <div className="p-8 md:w-3/5">

                          <div className="flex items-start justify-between mb-5">

                            <div>
                              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                {cert.type}
                              </span>

                              <h3 className="text-xl font-semibold mt-2">
                                {cert.name}
                              </h3>
                            </div>

                            <div className="p-3 bg-primary/10 rounded-full">
                              {cert.type === 'Achievement' ? (
                                <Award
                                  size={24}
                                  className="text-primary"
                                />
                              ) : (
                                <ShieldCheck
                                  size={24}
                                  className="text-primary"
                                />
                              )}
                            </div>

                          </div>

                          <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                            {cert.description}
                          </p>

                          <div className="space-y-2 mb-6 text-sm">

                            <p className="text-foreground/75">
                              <span className="font-semibold">
                                Issuer:
                              </span>{' '}
                              {cert.issuer}
                            </p>

                            <p className="text-foreground/75">
                              <span className="font-semibold">
                                Date / Validity:
                              </span>{' '}
                              {cert.date}
                            </p>

                            <p className="text-foreground/75 break-all">
                              <span className="font-semibold">
                                Credential ID:
                              </span>{' '}
                              {cert.credentialId}
                            </p>

                          </div>

                          {/* Areas of Expertise */}
                          <div className="mb-6">

                            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/60 mb-3">
                              Areas of Expertise
                            </h4>

                            <div className="flex flex-wrap gap-2">

                              {cert.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}

                            </div>
                          </div>

                          {/* Potential Career Paths */}
                          <div>

                            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/60 mb-3">
                              Relevant Career Paths
                            </h4>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                              {cert.careerPaths.map((role, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-foreground/75"
                                >
                                  <span className="text-primary mt-1">
                                    •
                                  </span>
                                  {role}
                                </li>
                              ))}

                            </ul>

                            <p className="text-xs text-foreground/50 mt-3">
                              These are potential career paths
                              supported by relevant skills and
                              additional practical experience.
                            </p>

                          </div>

                        </div>

                      </div>
                    </div>
                  </div>

                ))}

              </div>
            </div>

          </div>

          {/* Expertise and Career Application */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">

              <h3 className="text-xl font-semibold mb-4">
                Areas of Technical Expertise
              </h3>

              <p className="text-foreground/75 text-sm leading-relaxed mb-4">
                My technical foundation combines networking,
                cybersecurity, Linux systems, and IT infrastructure.
                I apply these skills to understanding, supporting,
                and improving technology environments.
              </p>

              <ul className="space-y-3 text-sm text-foreground/80">

                <li>• Network infrastructure and administration</li>
                <li>• Cybersecurity fundamentals and threat awareness</li>
                <li>• Network security and protection</li>
                <li>• Linux and operating system administration</li>
                <li>• Technical troubleshooting and problem-solving</li>

              </ul>

            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">

              <h3 className="text-xl font-semibold mb-4">
                Professional Development Goals
              </h3>

              <p className="text-foreground/75 text-sm leading-relaxed mb-4">
                Continuously developing my capabilities in
                cybersecurity, cloud technologies, IT systems,
                and technical leadership.
              </p>

              <ul className="space-y-3 text-sm text-foreground/80">

                <li>• Advanced cybersecurity and security operations</li>
                <li>• Cloud security and infrastructure</li>
                <li>• Linux and systems administration</li>
                <li>• Network security specialization</li>
                <li>• IT service management and technical leadership</li>

              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
