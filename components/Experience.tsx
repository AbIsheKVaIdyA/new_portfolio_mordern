'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { ViewTransition } from '@/components/ViewTransition'
import { cn } from '@/lib/utils'
import {
  getBulletsForView,
  getFeaturedExperience,
  getSectionCopy,
  getTimelineExperience,
} from '@/lib/profile-helpers'
import { useViewMode } from '@/contexts/ViewModeContext'
import type { ExperienceEntry } from '@/data/profile'

function ExperienceTimelineItem({
  entry,
  index,
  isCurrent,
}: {
  entry: ExperienceEntry
  index: number
  isCurrent?: boolean
}) {
  const { view } = useViewMode()
  const bullets = getBulletsForView(entry.bullets, view)

  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="relative"
    >
      <span
        className={cn(
          'absolute -left-[1.65rem] top-1.5 flex size-3 rounded-full border-2 sm:-left-[2.15rem]',
          view === 'developer' ? 'border-violet-500 bg-white' : 'border-primary bg-background',
          isCurrent && (view === 'developer' ? 'bg-violet-500' : 'bg-primary')
        )}
        aria-hidden
      />

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <p className="font-mono text-xs text-muted-foreground">{entry.period}</p>
        {isCurrent && (
          <Badge variant="outline" className="text-[10px] font-normal uppercase tracking-wider">
            Current role
          </Badge>
        )}
        {entry.honor && (
          <Badge variant="secondary" className="text-[10px] font-normal">
            {entry.honor}
          </Badge>
        )}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-foreground">{entry.title}</h3>
      <p className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <Briefcase className="size-4 shrink-0 text-primary" aria-hidden />
        {entry.company}
        {entry.location ? ` · ${entry.location}` : ''}
      </p>
      {entry.client && (
        <p className="mt-1 text-sm text-muted-foreground">Client: {entry.client}</p>
      )}
      {entry.flagshipBadge && (
        <p className="mt-1 text-xs text-primary">{entry.flagshipBadge}</p>
      )}
      {entry.impact && (
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{entry.impact.label}</span>
          {' — '}
          {entry.impact.detail}
        </p>
      )}

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {bullets.map((bullet) => (
          <li key={bullet.text} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/80" aria-hidden />
            <span>{bullet.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {entry.skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs font-normal">
            {skill}
          </Badge>
        ))}
      </div>
    </motion.li>
  )
}

const Experience = () => {
  const { view } = useViewMode()
  const section = getSectionCopy('experience', view)
  const featured = getFeaturedExperience()
  const timeline = getTimelineExperience()
  const entries = [featured, ...timeline]

  return (
    <section id="experience" className="section-bg container-custom">
      <div className="container-wide mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Experience"
          title={section.title}
          subtitle={section.subtitle}
        />

        <ViewTransition>
          <ol className="relative space-y-10 border-l border-border/60 pl-6 sm:pl-8">
            {entries.map((entry, index) => (
              <ExperienceTimelineItem
                key={entry.id}
                entry={entry}
                index={index}
                isCurrent={entry.id === featured.id}
              />
            ))}
          </ol>
        </ViewTransition>
      </div>
    </section>
  )
}

export default Experience
