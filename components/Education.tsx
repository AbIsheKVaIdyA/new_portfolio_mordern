'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { getEducationEntries } from '@/lib/profile-helpers'
import { useViewMode } from '@/contexts/ViewModeContext'
import { cn } from '@/lib/utils'

export default function Education() {
  const { view } = useViewMode()
  const entries = getEducationEntries()

  return (
    <section id="education" className="section-bg container-custom">
      <div className="container-wide mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="Graduate cybersecurity training paired with an engineering undergraduate foundation."
        />

        <ol className="relative space-y-10 border-l border-border/60 pl-6 sm:pl-8">
          {entries.map((entry, index) => (
            <motion.li
              key={entry.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >
              <span
                className={cn(
                  'absolute -left-[1.65rem] top-1.5 flex size-3 rounded-full border-2 sm:-left-[2.15rem]',
                  view === 'developer'
                    ? 'border-violet-500 bg-white'
                    : 'border-primary bg-background'
                )}
                aria-hidden
              />

              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-mono text-xs text-muted-foreground">{entry.period}</p>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-foreground">{entry.title}</h3>
              <p className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="size-4 shrink-0 text-primary" aria-hidden />
                {entry.company} · {entry.location}
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {entry.bullets.map((b) => (
                  <li key={b.text} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/80" aria-hidden />
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {entry.skills.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
