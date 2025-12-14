'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, CheckCircle, X } from 'lucide-react'
import { useState } from 'react'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)
  
  // Helper function to encode image path for URLs with special characters
  const encodeImagePath = (path: string) => {
    if (!path) return path;
    // Split path and filename, encode only the filename part
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const encodedFilename = encodeURIComponent(filename);
    return parts.slice(0, -1).join('/') + '/' + encodedFilename;
  }
  
  const certifications = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2025',
      status: 'completed',
      credentialId: null,
      image: '/CompTIA Security+ ce certificate-1.png',
      link: '#'
    },
    {
      name: 'ISC2 CC',
      issuer: 'ISC2',
      year: '2025',
      status: 'in-progress',
      credentialId: null,
      image: null,
      link: '#'
    },
    {
      name: 'AWS Security Specialty',
      issuer: 'Amazon Web Services',
      year: '2025',
      status: 'in-progress',
      credentialId: null,
      image: null,
      link: '#'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2025',
      status: 'in-progress',
      credentialId: null,
      image: null,
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
              viewport={{ once: true }}
              className="card-bg rounded-xl p-3 sm:p-4 shadow-lg card-hover cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => cert.image && setSelectedCert(cert)}
              animate={{ 
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Certificate Image Preview */}
              {cert.image && (
                <div className="relative mb-3 rounded-lg overflow-hidden border border-gray-700">
                  <img 
                    src={encodeImagePath(cert.image)} 
                    alt={cert.name}
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      console.error('Image failed to load:', cert.image);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              
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
              
              {cert.credentialId && (
                <p className="text-xs text-gray-400 mb-3">
                  Credential ID: {cert.credentialId}
                </p>
              )}
              
              {cert.status === 'completed' && cert.image && (
                <div className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors duration-200">
                  <CheckCircle size={14} className="text-green-400" />
                  <span className="text-xs">Click to view certificate</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && selectedCert.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[95vh] bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 z-10 w-8 h-8 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
              >
                <X size={18} />
              </button>

              {/* Certificate Image */}
              <div className="relative">
                <img
                  src={encodeImagePath(selectedCert.image)}
                  alt={selectedCert.name}
                  className="w-full h-auto max-h-[95vh] object-contain rounded-lg shadow-2xl"
                  onError={(e) => {
                    console.error('Modal image failed to load:', selectedCert.image);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Certifications
