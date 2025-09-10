'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'LinkedIn-Style Social Platform',
      description: 'Built a comprehensive social networking platform with user profiles, connections, posts, and real-time messaging. Implemented secure authentication, scalable architecture, and responsive design.',
      image: '/linkedin.png',
      technologies: ['React', 'Next.js', 'Spring Boot', 'MongoDB', 'AWS', 'Docker'],
      github: 'https://github.com/AbIsheKVaIdyA/linkedIn-clone',
      demo: 'https://linkedin-clone-zeta-one.vercel.app/'
    },
    {
      title: 'Walmart E-commerce Platform',
      description: 'Developed a full-stack e-commerce platform similar to Walmart with product catalog, shopping cart, payment integration, and inventory management. Implemented secure checkout process and real-time inventory tracking.',
      image: '/walmart.png',
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe API', 'Redis'],
      github: 'https://github.com/AbIsheKVaIdyA/Walmart-Clone',
      demo: 'https://walmart-clone-jade.vercel.app/'
    },
    {
      title: 'CloudVault - File Management Platform',
      description: 'Created a Dropbox-inspired cloud storage platform with file upload, download, sharing, and folder management capabilities. Implemented secure file storage and user authentication.',
      image: '/dropbox.png',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'JWT'],
      github: 'https://github.com/AbIsheKVaIdyA/dropbox-clone',
      demo: 'https://dropbox-clone-eta.vercel.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a modern, responsive portfolio website showcasing professional experience, projects, and skills. Features clean UI/UX design, smooth animations, and mobile-first responsive layout.',
      image: '/old portfolio.png',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      github: 'https://github.com/AbIsheKVaIdyA/portfolio1.0',
      demo: 'https://portfolio-first-eta.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="container-custom section-bg-alt">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Projects I worked on. Each of them containing its own case study.
          </p>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-6">
            <motion.div
              className="flex space-x-4 sm:space-x-8"
              animate={{
                x: [0, -280 * projects.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* First set of projects */}
              {projects.map((project, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80 group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Screenshot */}
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-black border border-gray-800 mb-3 sm:mb-4 shadow-lg">
                    <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="text-center text-gray-500 hidden absolute inset-0 flex items-center justify-center">
                        <div>
                          <div className="text-lg sm:text-2xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                          <div className="text-xs sm:text-sm">Project Screenshot</div>
                          <div className="text-xs mt-2 text-gray-600">Add image: {project.image}</div>
                        </div>
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 bg-gray-800/50 px-3 py-2 rounded-lg"
                        >
                          <Github size={20} />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 bg-gray-800/50 px-3 py-2 rounded-lg"
                        >
                          <ExternalLink size={20} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-transparent text-white rounded text-xs font-medium border border-gray-600 hover:border-gray-500 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Second set of projects for seamless loop */}
              {projects.map((project, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Screenshot */}
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-black border border-gray-800 mb-3 sm:mb-4 shadow-lg">
                    <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="text-center text-gray-500 hidden absolute inset-0 flex items-center justify-center">
                        <div>
                          <div className="text-lg sm:text-2xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                          <div className="text-xs sm:text-sm">Project Screenshot</div>
                          <div className="text-xs mt-2 text-gray-600">Add image: {project.image}</div>
                        </div>
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 bg-gray-800/50 px-3 py-2 rounded-lg"
                        >
                          <Github size={20} />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 bg-gray-800/50 px-3 py-2 rounded-lg"
                        >
                          <ExternalLink size={20} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-transparent text-white rounded text-xs font-medium border border-gray-600 hover:border-gray-500 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900/30 to-transparent z-10 rounded-l-2xl"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900/30 to-transparent z-10 rounded-r-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
