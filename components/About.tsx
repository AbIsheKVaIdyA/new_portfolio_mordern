'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="container-custom section-bg">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="flex lg:flex-row flex-col gap-4 sm:gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full mx-auto lg:mx-0 mb-4 sm:mb-6 overflow-hidden border-2 border-gray-700">
              <img 
                src="/me.jpg" 
                alt="Abhishek Vaidya" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400 text-xl sm:text-2xl hidden">
                👤
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-sm sm:prose-lg max-w-none text-center lg:text-left"
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm <strong className="text-white">Abhishek Vaidya</strong>, a Cybersecurity graduate student at UT Dallas. 
              My expertise includes <strong className="text-white">Full Stack Development</strong>, <strong className="text-white">Secure System Design</strong>, and <strong className="text-white">Cloud Security</strong>. 
              I'm proficient in <strong className="text-white">React, Next.js, Spring Boot, Python, JavaScript</strong>, and hands-on with tools like 
              <strong className="text-white"> AWS, Azure, MongoDB, Docker</strong>. I'm actively preparing for <strong className="text-white">CISSP, CompTIA Security+, AWS Security Specialty</strong> and 
              <strong className="text-white"> AWS Cloud Practitioner</strong>, with a strong foundation in <strong className="text-white">offensive security and cloud security</strong>.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              I've built <strong className="text-white">LinkedIn-style social platforms</strong>, <strong className="text-white">IoT-based healthcare systems</strong>, and <strong className="text-white">secure scalable applications</strong> to strengthen 
              <strong className="text-white"> system resilience and security</strong>. My projects blend innovation with security-focused design, spanning from social platforms to healthcare systems. 
              With a foundation in software engineering and a focus on <strong className="text-white">Red Team operations</strong>, my goal is to build and secure systems that are not only functional but resilient by design.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I'm eager for opportunities where I can apply my skills in building and securing systems, grow in cybersecurity, and contribute meaningfully to the field. Let's connect!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
