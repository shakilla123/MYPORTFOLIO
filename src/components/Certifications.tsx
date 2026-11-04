
import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

import huaweiCertificate from '../assets/huawei-hcia-certificate.png';
import acscCertificate from '../assets/acsc-certificate-upright.png';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  skills: string[];
  roles: string[];
  image: string;
  type: string;
}

const certifications: Certification[] = [
  {
    name: 'HCIA-Datacom',
    issuer: 'Huawei Technologies',
    date: 'Valid until July 1, 2028',
    credentialId: '010103901683810042132756723',
    description:
      'Professional certification covering network routing, switching, configuration, and troubleshooting.',
    skills: [
      'Network Routing',
      'Switching',
      'IP Networking',
      'Network Configuration',
      'Network Troubleshooting'
    ],
    roles: [
      'Network Administrator',
      'Network Engineer',
      'Network Operations Engineer',
      'Network Support Specialist'
    ],
    image: huaweiCertificate,
    type: 'Certification'
  },
  {
    name: 'Cybersecurity Fundamentals',
    issuer: 'Fortinet',
    date: '2024',
    description:
      'Training in cybersecurity, network protection, security threats, and basic security solutions.',
    skills: [
      'Network Security',
      'Threat Detection',
      'Firewall Concepts',
      'Security Awareness',
      'Threat Protection'
    ],
    roles: [
      'Cybersecurity Analyst',
      'SOC Analyst',
      'Network Security Engineer',
      'Information Security Analyst'
    ],
    image: 'https://cdn.simpleicons.org/fortinet/EE3124',
    type: 'Certification'
  },
  {
    name: 'ACSC - 1st Place, picoCTF-Africa 2025',
    issuer: 'Adventist University of Central Africa',
    date: 'May 13, 2025',
    description:
      'Awarded first place in the Rwanda Undergraduate Category of the picoCTF-Africa 2025 cybersecurity competition.',
    skills: [
      'Cybersecurity',
      'Capture The Flag (CTF)',
      'Problem Solving',
      'Security Analysis',
      'Technical Investigation'
    ],
    roles: [
      'Cybersecurity Analyst',
      'Penetration Tester',
      'Security Researcher',
      'Information Security Analyst'
    ],
    image: acscCertificate,
    type: 'Achievement'
  },
  {
    name: 'Cisco Networking Essentials',
    issuer: 'Cisco',
    date: '2024',
    description:
      'Training in networking basics, IP addressing, network infrastructure, and troubleshooting.',
    skills: [
      'Networking',
      'IP Addressing',
      'Network Design',
      'Troubleshooting'
    ],
    roles: [
      'Network Administrator',
      'Network Engineer',
      'IT Support Specialist',
      'Network Technician'
    ],
    image: 'https://cdn.simpleicons.org/cisco/1BA0D7',
    type: 'Certification'
  },
  {
    name: 'Linux Essentials',
    issuer: 'Linux Professional Institute',
    date: '2024',
    description:
      'Training in Linux systems, command-line tools, file management, and operating systems.',
    skills: [
      'Linux Administration',
      'Command Line',
      'Shell Scripting',
      'System Management'
    ],
    roles: [
      'Linux System Administrator',
      'Systems Administrator',
      'DevOps Engineer',
      'Cloud Engineer'
    ],
    image: 'https://cdn.simpleicons.org/linux/FCC624',
    type: 'Certification'
  }
];

const Certifications: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cert = certifications[activeIndex];

  const changeCertificate = (direction: number) => {
    setActiveIndex(
      (activeIndex + direction + certifications.length) %
      certifications.length
    );
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            Certifications & Achievements
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto mt-4">
            My professional certifications and achievements in
            networking, cybersecurity, and IT.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">

          {/* Certificate Navigation */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => changeCertificate(-1)}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-primary hover:text-white"
              aria-label="Previous certificate"
            >
              <ChevronLeft />
            </button>

            <span className="text-sm text-foreground/60">
              {activeIndex + 1} of {certifications.length}
            </span>

            <button
              onClick={() => changeCertificate(1)}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-primary hover:text-white"
              aria-label="Next certificate"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Active Certificate */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">

              <div className="md:w-2/5 min-h-[280px] bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-5">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full max-h-[440px] object-contain"
                />
              </div>

              <div className="p-8 md:w-3/5">

                <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                  {cert.type}
                </span>

                <h3 className="text-2xl font-semibold mt-2 mb-4">
                  {cert.name}
                </h3>

                <p className="text-sm text-foreground/70 mb-6">
                  {cert.description}
                </p>

                <div className="space-y-2 text-sm mb-6">
                  <p>
                    <strong>Issuer:</strong> {cert.issuer}
                  </p>

                  <p>
                    <strong>Date:</strong> {cert.date}
                  </p>

                  {cert.credentialId && (
                    <p className="break-all">
                      <strong>Credential ID:</strong> {cert.credentialId}
                    </p>
                  )}
                </div>

                {/* Skills */}
                <h4 className="font-semibold text-sm mb-3">
                  Areas of Expertise
                </h4>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Career Opportunities */}
                <h4 className="font-semibold text-sm mb-3">
                  Related Career Opportunities
                </h4>

                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-foreground/75">
                  {cert.roles.map((role) => (
                    <li key={role}>• {role}</li>
                  ))}
                </ul>

                <p className="text-xs text-foreground/50 mt-4">
                  These roles require relevant experience and additional
                  skills beyond the certification.
                </p>

              </div>
            </div>
          </div>

          {/* Professional Goals */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                My Expertise
              </h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                My technical background covers networking,
                cybersecurity, Linux systems, and IT infrastructure.
                I enjoy solving technical problems and building
                secure and reliable systems.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                Future Goals
              </h3>
              <ul className="space-y-3 text-sm text-foreground/75">
                <li>• Advanced Cybersecurity</li>
                <li>• Cloud Security</li>
                <li>• DevOps and Cloud Engineering</li>
                <li>• IT Service Management</li>
                <li>• Technical Leadership</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
