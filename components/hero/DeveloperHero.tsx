'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import TechStack from '@/components/TechStack'
import { getHeroForView, getResumeForView } from '@/lib/profile-helpers'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const heroStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

export function DeveloperHero() {
  const hero = getHeroForView('developer')
  const resumeUrl = getResumeForView('developer')

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-20 lg:pt-0"
    >
      <div className="dev-mesh-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="dev-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="dev-scanlines pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-accent/8 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />

      <div className="container-inner relative z-10 px-4 sm:px-6">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fade} transition={{ duration: 0.5 }}>
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/5 font-medium text-xs tracking-wide text-primary"
            >
              Full-Stack Engineer
            </Badge>
          </motion.div>

          <motion.h1
            variants={fade}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">
              {hero.headline}
            </span>
          </motion.h1>

          <motion.h2
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-6 text-xl font-normal text-muted-foreground sm:text-2xl lg:text-3xl"
          >
            {hero.subtitle}
          </motion.h2>

          <motion.p
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {'supportingLine' in hero && hero.supportingLine ? `${hero.supportingLine} ` : ''}
            Founder of{' '}
            <a
              href="https://www.pixelora.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Pixelora
            </a>
            .
          </motion.p>

          <motion.div
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'inline-flex gap-2 bg-primary text-primary-foreground no-underline hover:bg-primary/90'
              )}
            >
              View Projects
            </a>
            <a
              href={resumeUrl}
              download="Abhishek_Vaidya_Developer.pdf"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'inline-flex gap-2 no-underline'
              )}
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'lg' }),
                'inline-flex gap-2 no-underline'
              )}
            >
              <Mail className="size-4" />
              Contact
            </a>
          </motion.div>

          <motion.ul
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mt-10 space-y-2 text-sm text-muted-foreground"
          >
            {hero.stats.map((stat) => (
              <li key={stat.label} className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  <span className="font-medium text-foreground">{stat.label}</span>
                  {stat.detail ? <span> — {stat.detail}</span> : null}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Technology Stack
          </p>
          <TechStack />
        </motion.div>
      </div>
    </section>
  )
}
