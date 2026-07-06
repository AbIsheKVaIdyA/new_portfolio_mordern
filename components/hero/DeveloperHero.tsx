'use client'

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { getHeroForView, getResumeForView } from '@/lib/profile-helpers'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function DeveloperHero() {
  const hero = getHeroForView('developer')
  const resumeUrl = getResumeForView('developer')

  return (
    <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-400/15 blur-3xl" />
        <div className="absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#FAFAFA] to-[#F5F5F5]" />
      </div>

      <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-medium text-violet-600">Hi, my name is</p>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-violet-500 bg-clip-text text-transparent">
              {hero.headline}
            </span>
          </h1>
          <h2 className="mt-4 text-2xl font-medium text-neutral-600 sm:text-3xl">
            I build scalable software people enjoy using.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            {hero.subtitle} M.S. Cybersecurity candidate at UT Dallas. Enterprise experience on
            Boeing&apos;s HR platform at TCS — 5× award recipient and founder of{' '}
            <a
              href="https://www.pixelora.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 underline-offset-4 hover:underline"
            >
              Pixelora
            </a>
            .
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white no-underline hover:from-violet-500 hover:to-blue-500'
              )}
            >
              View Projects
            </a>
            <a
              href={resumeUrl}
              download="Abhishek_Vaidya_Developer.pdf"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-md border-neutral-200 bg-white/80 no-underline')}
            >
              <Download className="mr-2 size-4" />
              Download Resume
            </a>
            <a href="#contact" className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'rounded-md no-underline')}>
              <Mail className="mr-2 size-4" />
              Contact
            </a>
          </div>

          <ul className="mt-12 space-y-2 text-sm text-neutral-600">
            {hero.stats.map((stat) => (
              <li key={stat.label} className="flex gap-3">
                <span className="text-violet-600">▹</span>
                <span>
                  <span className="font-medium text-neutral-900">{stat.label}</span>
                  {stat.detail ? <span> — {stat.detail}</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
