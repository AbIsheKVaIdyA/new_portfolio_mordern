'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import TechStack from '@/components/TechStack'
import { getHeroForView, getResumeForView } from '@/lib/profile-helpers'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'

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

          <motion.p
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {'supportingLine' in hero && hero.supportingLine ? hero.supportingLine : ''}
          </motion.p>

          <motion.p
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {'certs' in hero && hero.certs ? hero.certs : ''}
          </motion.p>

          <motion.div
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={resumeUrl}
              download="Abhishek_Vaidya_Security_Resume.pdf"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'inline-flex gap-2 bg-primary text-primary-foreground no-underline hover:bg-primary/90'
              )}
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'inline-flex gap-2 no-underline'
              )}
            >
              <Mail className="size-4" />
              Email
            </a>
            <a
              href={profile.identity.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'inline-flex gap-2 no-underline'
              )}
            >
              LinkedIn
            </a>
            <a
              href={profile.identity.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'inline-flex gap-2 no-underline'
              )}
            >
              GitHub
            </a>
            <a
              href={`tel:${profile.contact.phone}`}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'lg' }),
                'inline-flex gap-2 no-underline'
              )}
            >
              Phone
            </a>
          </motion.div>

          <motion.p
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Also available:{' '}
            <a
              href={profile.identity.links.resumeDeveloper}
              download="Abhishek_Vaidya_SWE_Resume.pdf"
              className="text-primary underline-offset-4 hover:underline"
            >
              SWE Resume
            </a>
          </motion.p>
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
