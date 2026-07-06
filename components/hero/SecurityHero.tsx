'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { profile } from '@/data/profile'
import { getHeroForView, getResumeForView } from '@/lib/profile-helpers'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SecurityHero() {
  const hero = getHeroForView('security')
  const resumeUrl = getResumeForView('security')

  return (
    <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] security-grid" />

      <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 font-mono text-sm text-primary">Hi, my name is</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{hero.headline}</span>
          </h1>
          <h2 className="mt-4 text-2xl font-medium text-muted-foreground sm:text-3xl">
            I engineer secure, production-ready systems.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subtitle} M.S. Cybersecurity at UT Dallas (GPA 3.89, May 2027). CompTIA Security+ and
            ISC2 CC. Former full-stack developer at TCS on Boeing&apos;s HR platform — 5× award recipient.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className={cn(buttonVariants({ size: 'lg' }), 'rounded-md no-underline')}>
              View Projects
            </a>
            <a
              href={resumeUrl}
              download="Abhishek_Vaidya_Security.pdf"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-md no-underline')}
            >
              <Download className="mr-2 size-4" />
              Download Resume
            </a>
            <a href="#contact" className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'rounded-md no-underline')}>
              <Mail className="mr-2 size-4" />
              Contact
            </a>
          </div>

          <ul className="mt-12 space-y-2 font-mono text-sm text-muted-foreground">
            {hero.stats.map((stat) => (
              <li key={stat.label} className="flex gap-3">
                <span className="text-primary">▹</span>
                <span>
                  <span className="text-foreground">{stat.label}</span>
                  {stat.detail ? <span className="text-muted-foreground"> — {stat.detail}</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
