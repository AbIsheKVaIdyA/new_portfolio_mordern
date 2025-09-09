'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhishekcv.us@gmail.com',
      link: 'mailto:abhishekcv.us@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (945) 367-2111',
      link: 'tel:+19453672111'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dallas, Texas',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/abhishek-vaidya-73075424a/'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/AbIsheKVaIdyA'
    }
  ]

  return (
    <section id="contact" className="container-custom section-bg-alt">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 px-4">
            I am open to cybersecurity and full-stack development opportunities and would love to connect.
          </p>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8 text-center">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-900/70 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                      <info.icon size={18} className="text-gray-300 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{info.label}</p>
                      <p className="text-white font-medium text-xs sm:text-sm break-all">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8 text-center">
                Social Media
              </h3>
              <div className="flex justify-center gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900/50 border border-gray-800 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-110"
                    title={social.label}
                  >
                    <social.icon size={18} className="text-gray-300 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
