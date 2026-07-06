'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import TechStack from '@/components/TechStack'
import { TerminalBlock } from '@/components/TerminalBlock'
import { SecurityHud } from '@/components/SecurityHud'
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
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-accent/20 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
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
              className="mb-6 border-primary/35 bg-primary/10 font-mono text-[10px] uppercase tracking-[0.2em] text-primary shadow-[0_0_24px_-4px_oklch(0.78_0.14_195/0.4)]"
            >
              <span className="mr-2 inline-block size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              SESSION_ACTIVE · DALLAS, TX
            </Badge>
          </motion.div>

          <motion.h1
            variants={fade}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            <span className="font-mono text-lg text-primary/90 sm:text-xl">
              [ DEFEND · BUILD · SHIP ] <span className="cyber-blink">_</span>
            </span>
            <br />
            <span className="mt-2 inline-block">
              Hello, I&apos;m <span className="gradient-text">{hero.headline.replace(/\.$/, '')}</span>
            </span>
          </motion.h1>

          <motion.h2
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-4 text-2xl font-medium text-muted-foreground sm:text-3xl"
          >
            I engineer secure, production-ready systems.
          </motion.h2>

          <motion.p
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {hero.subtitle} M.S. Cybersecurity at UT Dallas (GPA 3.89, May 2027). CompTIA Security+ and
            ISC2 CC. Former full-stack developer at TCS on Boeing&apos;s HR platform — 5× award recipient.
          </motion.p>

          <motion.div variants={fade} transition={{ duration: 0.45 }}>
            <TerminalBlock />
          </motion.div>

          <motion.div variants={fade} transition={{ duration: 0.45 }}>
            <SecurityHud />
          </motion.div>

          <motion.div
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'inline-flex gap-2 rounded-lg shadow-[0_0_28px_-6px_oklch(0.78_0.14_195/0.45)] no-underline'
              )}
            >
              View Projects
            </a>
            <a
              href={resumeUrl}
              download="Abhishek_Vaidya_Security.pdf"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'inline-flex gap-2 rounded-lg border-primary/25 bg-background/50 no-underline hover:border-primary/45'
              )}
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'lg' }),
                'inline-flex gap-2 rounded-lg no-underline'
              )}
            >
              <Mail className="size-4" />
              Contact
            </a>
          </motion.div>

          <motion.ul
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mt-10 space-y-2 font-mono text-sm text-muted-foreground"
          >
            {hero.stats.map((stat) => (
              <li key={stat.label} className="flex gap-3">
                <span className="text-primary">▹</span>
                <span>
                  <span className="text-foreground">{stat.label}</span>
                  {stat.detail ? <span className="text-muted-foreground"> — {stat.detail}</span> : null}
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
            {'// toolchain_signal'}
          </p>
          <TechStack />
        </motion.div>
      </div>
    </section>
  )
}
