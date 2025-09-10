'use client'

import { motion } from 'framer-motion'

const TechStack = () => {
  const techStack = [
    { name: 'Burp Suite', logo: '🕷️' },
    { name: 'Nmap', logo: '🗺️' },
    { name: 'Linux', logo: '🐧' },
    { name: 'Operating Systems', logo: '💻' },
    { name: 'Postman', logo: '📮' },
    { name: 'Penetration Testing', logo: '🛡️' },
    { name: 'Network Security', logo: '🔒' },
    { name: 'Vulnerability Assessment', logo: '🔍' },
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'JavaScript', logo: '🟨' },
    { name: 'TypeScript', logo: '🔷' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'Spring Boot', logo: '🍃' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Azure', logo: '🔵' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '⚓' },
    { name: 'Git', logo: '📦' },
    { name: 'HTML5', logo: '🌐' },
    { name: 'CSS3', logo: '🎨' },
    { name: 'Tailwind CSS', logo: '💨' },
    { name: 'Express.js', logo: '🚀' },
    { name: 'Redis', logo: '🔴' },
    { name: 'GraphQL', logo: '🔺' },
    { name: 'REST APIs', logo: '🔗' },
    { name: 'Microservices', logo: '🔧' },
    { name: 'CI/CD', logo: '🔄' }
  ]

  return (
    <section className="py-2 sm:py-3">
      <div className="container-inner px-2 sm:px-4">
        <div className="relative overflow-hidden">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
            <motion.div
              className="flex space-x-1.5 sm:space-x-2"
              animate={{
                x: [0, -50 * techStack.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {techStack.map((tech, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center space-x-1 text-gray-400 hover:text-white transition-all duration-300 whitespace-nowrap px-1.5 sm:px-2 py-1 rounded-full hover:bg-gray-800/50 flex-shrink-0"
                >
                  <span className="text-xs sm:text-sm">{tech.logo}</span>
                  <span className="text-xs font-medium hidden sm:inline">{tech.name}</span>
                </div>
              ))}
              
              {/* Second set of logos for seamless loop */}
              {techStack.map((tech, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center space-x-1 text-gray-400 hover:text-white transition-all duration-300 whitespace-nowrap px-1.5 sm:px-2 py-1 rounded-full hover:bg-gray-800/50 flex-shrink-0"
                >
                  <span className="text-xs sm:text-sm">{tech.logo}</span>
                  <span className="text-xs font-medium hidden sm:inline">{tech.name}</span>
                </div>
              ))}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 bg-gradient-to-r from-gray-900/30 to-transparent z-10 rounded-l-lg sm:rounded-l-xl"></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-6 bg-gradient-to-l from-gray-900/30 to-transparent z-10 rounded-r-lg sm:rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
