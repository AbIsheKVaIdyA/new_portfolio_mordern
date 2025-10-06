'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Zap, Users, Shield, Globe, Building, ArrowRight, Sparkles } from 'lucide-react'

const ActiveProjects = () => {
  const projects = [
    {
      title: 'VD Cafe - Restaurant Management',
      description: 'Complete restaurant management system with menu ordering, table management, and payment processing.',
      status: 'Live',
      statusColor: 'bg-green-500',
      icon: Building,
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      link: 'https://www.pixelora.org/'
    },
    {
      title: 'Chore Management App',
      description: 'Smart chore management system for households with automatic assignment and progress tracking.',
      status: 'In Development',
      statusColor: 'bg-yellow-500',
      icon: Users,
      technologies: ['React Native', 'Firebase', 'AI Integration'],
      link: 'https://www.pixelora.org/'
    },
    {
      title: 'College ERP System',
      description: 'Comprehensive college management system with class scheduling, bus routes, and canteen management.',
      status: 'In Development',
      statusColor: 'bg-blue-500',
      icon: Globe,
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Docker'],
      link: 'https://www.pixelora.org/'
    },
    {
      title: 'Furniture Store Website',
      description: 'E-commerce platform for furniture store with product catalog, ordering system, and dealer management.',
      status: 'In Development',
      statusColor: 'bg-purple-500',
      icon: Shield,
      technologies: ['React', 'Stripe', 'AWS', 'Microservices'],
      link: 'https://www.pixelora.org/'
    }
  ]

  return (
    <section id="active-projects" className="container-custom section-bg">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Sparkles className="text-yellow-500 animate-pulse" size={24} />
              Building Tomorrow's Solutions Today
              <Sparkles className="text-yellow-500 animate-pulse" size={24} />
            </h2>
            <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-6"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm max-w-2xl mx-auto mb-4"
          >
            Actively contributing to innovative software solutions while pursuing cybersecurity studies. 
            Building modern applications that solve real-world problems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://www.pixelora.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-xs border border-gray-600 hover:border-gray-500 px-3 py-1 rounded-lg"
            >
              <ExternalLink size={12} />
              Check out our projects at Pixelora.org
            </a>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-bg rounded-xl p-4 shadow-lg card-hover group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <project.icon size={16} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 ${project.statusColor} rounded-full animate-pulse`}></div>
                      <span className="text-gray-400 text-xs">{project.status}</span>
                    </div>
                  </div>
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  title="Visit Project"
                >
                  <ExternalLink size={14} className="text-gray-300" />
                </motion.a>
              </div>

              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ActiveProjects
