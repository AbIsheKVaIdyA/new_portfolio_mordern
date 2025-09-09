'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Server, Globe, Monitor } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Spring Boot', 'Python', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Cloud & DevOps',
      icon: Globe,
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'MongoDB', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Auditing', 'Red Team Operations', 'Network Security']
    }
  ]

  return (
    <section id="skills" className="container-custom section-bg-alt">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-bg rounded-xl p-4 sm:p-6 shadow-lg card-hover"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 sm:mr-4 border border-gray-700">
                  <category.icon size={16} className="text-gray-300 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-1">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-white text-xs sm:text-sm flex items-center">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
