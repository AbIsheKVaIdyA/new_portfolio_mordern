'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import TechStack from './TechStack'
import { TerminalBlock } from './TerminalBlock'
import { SecurityHud } from './SecurityHud'
import { SignalBar } from './SignalBar'
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

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-20 lg:pt-0"
    >
      <div className="mesh-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-accent/20 blur-[90px]" aria-hidden />
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
            <span className="font-mono text-lg text-primary/90 sm:text-xl">[ DEFEND · BUILD · SHIP ]</span>
            <br />
            <span className="mt-2 inline-block">
              Hello, I&apos;m{' '}
              <span className="gradient-text">Abhishek Vaidya</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Cybersecurity graduate student at{' '}
            <span className="text-foreground">UT Dallas</span> and{' '}
            <span className="text-foreground">full-stack engineer</span> — I care about secure defaults, threat-aware
            design, and software that survives real-world abuse.
          </motion.p>

          <motion.div variants={fade} transition={{ duration: 0.45 }}>
            <TerminalBlock />
          </motion.div>

          <motion.div variants={fade} transition={{ duration: 0.45 }}>
            <SecurityHud />
          </motion.div>

          <motion.div variants={fade} transition={{ duration: 0.45 }} className="mt-8">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              // live_signals — weather · audio · git
            </p>
            <SignalBar />
          </motion.div>

          <motion.div
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'inline-flex gap-2 rounded-lg shadow-[0_0_28px_-6px_oklch(0.78_0.14_195/0.45)] no-underline'
              )}
            >
              <Mail className="size-4" />
              Initiate contact
            </a>
            <a
              href="https://docs.google.com/document/d/1Q2JqCAYoODDL6WgWIi1uPm79zX0kmrjKePugLsm-Tpw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'inline-flex gap-2 rounded-lg border-primary/25 bg-background/50 no-underline hover:border-primary/45'
              )}
            >
              <Download className="size-4" />
              Export résumé
            </a>
          </motion.div>

          <motion.div
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://github.com/AbIsheKVaIdyA"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'inline-flex gap-2 rounded-full border border-border/60 no-underline'
              )}
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-vaidya-73075424a/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'inline-flex gap-2 rounded-full border border-border/60 no-underline'
              )}
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14"
        >
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            // toolchain_signal
          </p>
          <TechStack />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
