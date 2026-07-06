'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background/90 py-10">
      <div className="container-inner px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Abhishek Vaidya
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
