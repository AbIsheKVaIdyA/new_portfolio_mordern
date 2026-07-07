'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import TechStack from '@/components/TechStack'
import { TerminalBlock } from '@/components/TerminalBlock'
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
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-violet-400/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-blue-400/18 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
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
              className="mb-6 border-violet-300/50 bg-violet-50 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-700 shadow-sm"
            >
              <span className="mr-2 inline-block size-1.5 animate-pulse rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6]" />
              BUILD_MODE · FULL STACK
            </Badge>
          </motion.div>

          <motion.h1
            variants={fade}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
          >
            <span className="font-mono text-lg text-violet-600/90 sm:text-xl">
              {'{ ship · scale · iterate }'} <span className="cyber-blink text-violet-500">_</span>
            </span>
            <br />
            <span className="mt-2 inline-block">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-violet-500 bg-clip-text text-transparent">
                {hero.headline.replace(/\.$/, '')}
              </span>
            </span>
          </motion.h1>

          <motion.h2
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-4 text-2xl font-medium text-neutral-600 sm:text-3xl"
          >
            I build scalable software people enjoy using.
          </motion.h2>

          <motion.p
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>
          <motion.p
            variants={fade}
            transition={{ duration: 0.55 }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base"
          >
            {'supportingLine' in hero && hero.supportingLine ? `${hero.supportingLine} ` : ''}
            Founder of{' '}
            <a
              href="https://www.pixelora.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 underline-offset-4 hover:underline"
            >
              Pixelora
            </a>
            .
          </motion.p>

          <motion.div variants={fade} transition={{ duration: 0.45 }}>
            <TerminalBlock variant="developer" />
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
                'inline-flex gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white no-underline shadow-lg shadow-violet-500/20 hover:from-violet-500 hover:to-blue-500'
              )}
            >
              View Projects
            </a>
            <a
              href={resumeUrl}
              download="Abhishek_Vaidya_Developer.pdf"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'inline-flex gap-2 rounded-lg border-neutral-200 bg-white/80 no-underline'
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
            className="mt-10 space-y-2 text-sm text-neutral-600"
          >
            {hero.stats.map((stat) => (
              <li key={stat.label} className="flex gap-3">
                <span className="text-violet-600">▹</span>
                <span>
                  <span className="font-medium text-neutral-900">{stat.label}</span>
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
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            {'// stack_marquee'}
          </p>
          <TechStack />
        </motion.div>
      </div>
    </section>
  )
}
