'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      name: 'CISSP',
      issuer: 'ISC2',
      year: '2025',
      status: 'in-progress',
      credentialId: 'In Progress',
      link: '#'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2025',
      status: 'in-progress',
      credentialId: 'In Progress',
      link: '#'
    },
    {
      name: 'AWS Security Specialty',
      issuer: 'Amazon Web Services',
      year: '2025',
      status: 'in-progress',
      credentialId: 'In Progress',
      link: '#'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2025',
      status: 'in-progress',
      credentialId: 'In Progress',
      link: '#'
    }
  ]

  return (
    <section id="certifications" className="container-custom section-bg-alt">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Professional Certifications
          </h2>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-bg rounded-xl p-3 sm:p-4 shadow-lg card-hover"
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{ 
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                  <Award size={16} className="text-gray-300" />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'completed' 
                    ? 'bg-green-900/30 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                </div>
              </div>
              
              <h3 className="text-sm font-bold text-white mb-2">
                {cert.name}
              </h3>
              
              <p className="text-gray-300 font-semibold mb-2 text-xs">
                {cert.issuer} • {cert.year}
              </p>
              
              <p className="text-xs text-gray-400 mb-3">
                Credential ID: {cert.credentialId}
              </p>
              
              {cert.status === 'completed' && (
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors duration-200"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
