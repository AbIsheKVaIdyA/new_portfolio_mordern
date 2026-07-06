'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ViewTransition } from '@/components/ViewTransition'
import { cn } from '@/lib/utils'
import { getProjectCaseStudy, getProjectsForView, getSectionCopy } from '@/lib/profile-helpers'
import { useViewMode } from '@/contexts/ViewModeContext'
import type { ProjectEntry } from '@/data/profile'

const FILTERS = ['all', 'developer', 'security'] as const
type Filter = (typeof FILTERS)[number]

const FILTER_LABELS: Record<Filter, string> = {
  all: 'All',
  developer: 'Developer',
  security: 'Security',
}

const Projects = () => {
  const { view } = useViewMode()
  const section = getSectionCopy('projects', view)
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<ProjectEntry | null>(null)
  const sorted = getProjectsForView(view)

  const filtered = useMemo(() => {
    if (filter === 'all') return sorted
    return sorted.filter((p) => getProjectCaseStudy(p).categories.includes(filter))
  }, [sorted, filter])

  const caseStudy = selected ? getProjectCaseStudy(selected) : null

  return (
    <section id="projects" className="section-bg-alt container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow={view === 'security' ? section.eyebrow : 'Case studies'}
          title={section.title}
          subtitle={section.subtitle}
          className="text-center"
          align="center"
          cyber={view === 'security'}
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <Button
              key={f}
              type="button"
              size="sm"
              variant={filter === f ? 'default' : 'outline'}
              className={cn('rounded-full', view === 'developer' && filter === f && 'bg-gradient-to-r from-violet-600 to-blue-600')}
              onClick={() => setFilter(f)}
            >
              {FILTER_LABELS[f]}
            </Button>
          ))}
        </div>

        <ViewTransition>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Card
                    className={cn(
                      'group h-full overflow-hidden transition hover:-translate-y-1 hover:shadow-xl cursor-pointer',
                      view === 'developer' ? 'dev-surface' : 'border-primary/20 bg-card/70'
                    )}
                    onClick={() => setSelected(project)}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
                    </div>
                    <CardContent className="space-y-3 p-5">
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="outline" className="text-[10px]">{project.posture}</Badge>
                        <Badge variant="secondary" className="text-[10px]">{project.clearance}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                      <div className="flex gap-2 pt-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1 no-underline')}>
                          <Github className="size-3.5" /> GitHub
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={cn(buttonVariants({ size: 'sm' }), 'gap-1 no-underline')}>
                          <ExternalLink className="size-3.5" /> Demo
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </ViewTransition>

        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent className="max-h-[92vh] w-[min(96vw,56rem)] max-w-[min(96vw,56rem)] overflow-y-auto sm:max-w-[min(96vw,56rem)]">
            {selected && caseStudy && (
              <>
                <DialogHeader>
                  <DialogTitle>{selected.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 text-sm">
                  <Section label="Overview" text={caseStudy.overview} />
                  <Section label="Problem" text={caseStudy.problem} />
                  <Section label="Solution" text={caseStudy.solution} />
                  <Section label="Architecture" text={caseStudy.architecture} />
                  <ListSection label="Challenges" items={caseStudy.challenges} />
                  <ListSection label="Security considerations" items={caseStudy.securityConsiderations} />
                  <ListSection label="Metrics" items={caseStudy.metrics} />
                  <ListSection label="Lessons learned" items={caseStudy.lessonsLearned} />
                  <div>
                    <p className="mb-2 font-medium">Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.stack.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href={selected.github} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: 'outline' }), 'no-underline')}>GitHub</a>
                    <a href={selected.demo} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), 'no-underline')}>Live demo</a>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

function Section({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-1 font-medium">{label}</p>
      <p className="text-muted-foreground">{text}</p>
    </div>
  )
}

function ListSection({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-1 font-medium">{label}</p>
      <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
