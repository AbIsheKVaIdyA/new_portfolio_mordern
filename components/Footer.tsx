'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container-inner py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400">
            © 2025 Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
