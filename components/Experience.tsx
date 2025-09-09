'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'MS in Cybersecurity, Technology and Policy',
      company: 'The University of Texas at Dallas',
      location: 'Dallas, TX',
      period: 'Aug 2023 – Aug 2027 (Expected)',
      description: 'Pursuing Master of Science in Cybersecurity with focus on technology and policy. Gaining advanced knowledge in cybersecurity frameworks, risk management, and policy development.',
      skills: ['Cybersecurity', 'Risk Management', 'Policy Development', 'Security Frameworks', 'Advanced Security Concepts'],
      type: 'education'
    },
    {
      title: 'Full Stack Developer',
      company: 'Tata Consultancy Services | Boeing Project',
      location: 'Dallas, TX',
      period: 'Feb 2024 – May 2025',
      description: 'Led React front-end team using Material UI to enhance application UX, boosting performance by 55%+. Owned and resolved production issues in React, Spring Boot, and SQL, improving reliability and security. Delivered an urgent cross-stack solution with a 3-member team within 2 months, driving $400K+ business impact. Mentored a junior React developer and enforced secure coding standards, strengthening long-term team efficiency.',
      skills: ['React', 'Material UI', 'Spring Boot', 'SQL', 'Team Leadership', 'Mentoring', 'Production Support'],
      type: 'work'
    },
    {
      title: 'Full Stack Developer',
      company: 'Orbit Technologies',
      location: 'Hubli, India',
      period: 'January 2024',
      description: 'Built a scratch project integrating React front-end with Java Spring Boot & SQL, ensuring secure and efficient code structure. Designed and tested APIs with Swagger & Postman, enabling reliable data flow across modules.',
      skills: ['React', 'Java Spring Boot', 'SQL', 'API Design', 'Swagger', 'Postman', 'Full Stack Development'],
      type: 'work'
    },
    {
      title: 'Cybersecurity Virtual Intern',
      company: 'EduSkills (Palo Alto)',
      location: 'Remote',
      period: 'Mar 2022 - May 2022',
      description: 'Gained hands-on exposure to network security, firewalls, IDS/IPS, and vulnerability assessment through guided labs. Completed a structured internship program focused on risk analysis and incident response fundamentals.',
      skills: ['Network Security', 'Firewalls', 'IDS/IPS', 'Vulnerability Assessment', 'Risk Analysis', 'Incident Response'],
      type: 'work'
    },
    {
      title: 'Bachelor of Electronics and Communications',
      company: 'Visvesvaraya Technological University',
      location: 'Dharwad, India',
      period: 'Jun 2019 - Jun 2023',
      description: 'Completed Bachelor of Engineering in Electronics and Communications with comprehensive understanding of electronic systems, communication protocols, and signal processing.',
      skills: ['Electronics', 'Communications', 'Signal Processing', 'Digital Systems', 'Circuit Design', 'Telecommunications'],
      type: 'education'
    }
  ]

  return (
    <section id="experience" className="container-custom section-bg">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full border-2 border-gray-700 z-10"></div>
                
                {/* Content */}
                <div className="ml-8 sm:ml-16 flex-1 space-y-3 sm:space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 leading-tight">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-300 font-medium text-sm sm:text-base mb-2">
                        {exp.type === 'education' ? (
                          <GraduationCap size={16} className="mr-2 sm:w-5 sm:h-5" />
                        ) : (
                          <Briefcase size={16} className="mr-2 sm:w-5 sm:h-5" />
                        )}
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end mt-3 lg:mt-0">
                      <div className="flex items-center text-gray-400 mb-1 text-xs sm:text-sm">
                        <Calendar size={12} className="mr-2 sm:w-4 sm:h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <MapPin size={12} className="mr-2 sm:w-4 sm:h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 bg-transparent text-white rounded-full text-xs font-medium border border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
