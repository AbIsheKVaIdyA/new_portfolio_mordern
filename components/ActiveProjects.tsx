'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { useViewMode } from '@/contexts/ViewModeContext'

const studio = profile.activeProjects[0]

const ActiveProjects = () => {
  const { view } = useViewMode()

  return (
    <section id="active-projects" className="section-bg container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Studio"
          title="Pixelora"
          subtitle="My product studio — client builds, restaurant systems, and full-stack software shipped to production."
          className="text-center"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div
            className={cn(
              'rounded-2xl border p-8 text-center transition hover:shadow-lg sm:p-10',
              view === 'developer' ? 'dev-surface' : 'border-primary/20 bg-card/60'
            )}
          >
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="size-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">{studio.title}</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {studio.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {studio.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={studio.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'mt-8 inline-flex gap-2 rounded-full no-underline',
                view === 'developer' && 'bg-gradient-to-r from-violet-600 to-blue-600 text-white'
              )}
            >
              Visit Pixelora
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ActiveProjects
