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

export function SecurityHero() {
  const hero = getHeroForView('security')
  const resumeUrl = getResumeForView('security')

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-20 lg:pt-0"
    >
      <div className="mesh-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden />
      <div className="security-scanlines pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-accent/8 blur-[100px]"
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
              Cybersecurity Engineer
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

          {'supportingLine' in hero && hero.supportingLine ? (
            <motion.p
              variants={fade}
              transition={{ duration: 0.55 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {hero.supportingLine}
            </motion.p>
          ) : null}

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
              download="Abhishek_Vaidya_Security.pdf"
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
