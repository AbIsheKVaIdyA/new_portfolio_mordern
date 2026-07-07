'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram'
import { CaseStudyList, CaseStudySection } from '@/components/CaseStudyAccordion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
import { ProjectLinkActions } from '@/components/ProjectLinkActions'
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
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)
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

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <Button
              key={f}
              type="button"
              size="sm"
              variant={filter === f ? 'default' : 'outline'}
              className={cn(
                'rounded-full transition-transform hover:scale-[1.02]',
                view === 'developer' && filter === f && 'bg-gradient-to-r from-violet-600 to-blue-600'
              )}
              onClick={() => setFilter(f)}
            >
              {FILTER_LABELS[f]}
            </Button>
          ))}
        </div>

        <ViewTransition>
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => {
                const cs = getProjectCaseStudy(project)
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <Card
                      className={cn(
                        'group h-full cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
                        view === 'developer' ? 'dev-surface' : 'border-primary/20 bg-card/70'
                      )}
                      onClick={() => setSelected(project)}
                    >
                      <div
                        className="relative aspect-[16/9] overflow-hidden"
                        onClick={(e) => {
                          e.stopPropagation()
                          setLightboxImage({ src: project.image, alt: project.title })
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            e.stopPropagation()
                            setLightboxImage({ src: project.image, alt: project.title })
                          }
                        }}
                        aria-label={`Expand screenshot for ${project.title}`}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-black/50 px-2 py-1 text-[10px] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                          <Maximize2 className="size-3" />
                          Expand
                        </span>
                      </div>

                      <CardContent className="space-y-3 p-5">
                        <div className="flex flex-wrap gap-1.5">
                          <Badge variant="outline" className="text-[10px]">
                            {project.posture}
                          </Badge>
                          <Badge variant="secondary" className="text-[10px]">
                            {project.clearance}
                          </Badge>
                        </div>

                        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                          {cs.overview}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {cs.metrics.slice(0, 3).map((metric) => (
                            <Badge
                              key={metric}
                              variant="secondary"
                              className="text-[10px] font-normal"
                            >
                              {metric}
                            </Badge>
                          ))}
                        </div>

                        <ProjectLinkActions project={project} size="sm" className="pt-1" />
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </ViewTransition>

        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent className="max-h-[92vh] w-[min(96vw,56rem)] max-w-[min(96vw,56rem)] overflow-y-auto sm:max-w-[min(96vw,56rem)]">
            {selected && caseStudy && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl">{selected.title}</DialogTitle>
                </DialogHeader>

                <button
                  type="button"
                  className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl border shadow-md"
                  onClick={() => setLightboxImage({ src: selected.image, alt: selected.title })}
                  aria-label={`Expand screenshot for ${selected.title}`}
                >
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="56rem"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-black/50 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Maximize2 className="size-3.5" />
                    Expand
                  </span>
                </button>

                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.metrics.map((metric) => (
                    <Badge key={metric} variant="secondary" className="text-xs font-normal">
                      {metric}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3">
                  <CaseStudySection label="Overview" defaultOpen variant={view}>
                    <p>{caseStudy.overview}</p>
                  </CaseStudySection>

                  <CaseStudySection label="Problem" variant={view}>
                    <p>{caseStudy.problem}</p>
                  </CaseStudySection>

                  <CaseStudySection label="Solution" variant={view}>
                    <p>{caseStudy.solution}</p>
                  </CaseStudySection>

                  <CaseStudySection label="Architecture" defaultOpen variant={view}>
                    <p className="mb-4">{caseStudy.architecture}</p>
                    <ArchitectureDiagram
                      layers={caseStudy.architectureLayers}
                      variant={view}
                    />
                  </CaseStudySection>

                  <CaseStudySection label="Key features" variant={view}>
                    <CaseStudyList items={caseStudy.keyFeatures} />
                  </CaseStudySection>

                  <CaseStudySection label="Security considerations" variant={view}>
                    <CaseStudyList items={caseStudy.securityConsiderations} />
                  </CaseStudySection>

                  <CaseStudySection label="Technical challenges" variant={view}>
                    <CaseStudyList items={caseStudy.challenges} />
                  </CaseStudySection>

                  <CaseStudySection label="Results" variant={view}>
                    <CaseStudyList items={caseStudy.metrics} />
                  </CaseStudySection>

                  <CaseStudySection label="Lessons learned" variant={view}>
                    <CaseStudyList items={caseStudy.lessonsLearned} />
                  </CaseStudySection>

                  <CaseStudySection label="Tech stack" defaultOpen variant={view}>
                    <div className="flex flex-wrap gap-2">
                      {selected.stack.map((t) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CaseStudySection>
                </div>

                <ProjectLinkActions project={selected} size="default" className="border-t border-border/50 pt-4" />
              </>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
          <DialogContent className="max-h-[95vh] w-[min(96vw,64rem)] max-w-[min(96vw,64rem)] border-none bg-transparent p-2 shadow-none sm:max-w-[min(96vw,64rem)]">
            {lightboxImage && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  fill
                  className="object-contain bg-black/90"
                  sizes="64rem"
                  priority
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default Projects
