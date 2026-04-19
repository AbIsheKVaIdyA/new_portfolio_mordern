'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background/90 py-10">
      <div className="container-inner px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Abhishek Vaidya. Built with Next.js, Tailwind, shadcn/ui & Framer Motion.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/70">
            Skiper UI animated links used with attribution ·{' '}
            <a href="https://skiper-ui.com" className="text-primary underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
              skiper-ui.com
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
