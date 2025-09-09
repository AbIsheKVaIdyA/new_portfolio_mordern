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
          className="max-w-4xl mx-auto"
        >
        <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm text-gray-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-gray-700/50">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Hire Me!
        </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            Hello! I am{' '}
            <span className="gradient-text">Abhishek Vaidya</span>
          </h1>
          
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 sm:px-4">
            Building Secure Systems as a <span className="text-red-500 font-semibold">Cybersecurity Graduate Student</span> & Full Stack Developer | Future Red Teamer
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed">
            Pursuing a Master's in Cybersecurity at UT Dallas, I bring prior experience as a Full Stack Developer building secure, scalable applications with React, Next.js, Spring Boot, and cloud platforms (AWS, Azure, MongoDB).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4 sm:px-6">
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              Get in touch
            </motion.a>
            
            <motion.a
              href="https://docs.google.com/document/d/1Q2JqCAYoODDL6WgWIi1uPm79zX0kmrjKePugLsm-Tpw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              View Resume
            </motion.a>
          </div>
        </motion.div>
        
        {/* Tech Stack Bar */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <TechStack />
        </div>
      </div>
    </section>
  )
}

export default Hero
