'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import TechStack from './TechStack'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-16 sm:pt-20 pb-8 sm:pb-12">
      <div className="container-inner text-center px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
        <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium mb-3 sm:mb-4 border border-gray-700/50">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          Hire Me!
        </div>
          
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight px-2">
            Hello! I am{' '}
            <span className="gradient-text">Abhishek Vaidya</span>
          </h1>
          
          <h2 className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-4 leading-relaxed px-2 sm:px-4">
            Building Secure Systems as a <span className="text-red-500 font-semibold">Cybersecurity Graduate Student</span> & Full Stack Developer
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto px-4 leading-relaxed">
            Pursuing a Master's in Cybersecurity at UT Dallas, I bring prior experience as a Full Stack Developer building secure, scalable applications with React, Next.js, Spring Boot, and cloud platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-4">
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              Get in touch
            </motion.a>
            
            <motion.a
              href="https://docs.google.com/document/d/1Q2JqCAYoODDL6WgWIi1uPm79zX0kmrjKePugLsm-Tpw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              View Resume
            </motion.a>
          </div>
        </motion.div>
        
        {/* Tech Stack Bar */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <TechStack />
        </div>
      </div>
    </section>
  )
}

export default Hero
