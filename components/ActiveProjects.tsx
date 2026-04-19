'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ActiveProjects = () => {
  const projects = [
    {
      title: 'VD Cafe — Restaurant Management',
      description: 'Menu ordering, tables, and payments — end-to-end ops for a real venue.',
      status: 'Live',
      accent: 'bg-emerald-500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payments'],
      link: 'https://www.pixelora.org/',
    },
    {
      title: 'Chore Management App',
      description: 'Household chores with smart assignment and progress tracking.',
      status: 'In development',
      accent: 'bg-amber-400',
      technologies: ['React Native', 'Firebase', 'AI'],
      link: 'https://www.pixelora.org/',
    },
    {
      title: 'College ERP System',
      description: 'Scheduling, transit, and canteen — campus operations in one place.',
      status: 'In development',
      accent: 'bg-sky-500',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Docker'],
      link: 'https://www.pixelora.org/',
    },
    {
      title: 'Furniture Store Website',
      description: 'Catalog, ordering, and dealer workflows for a retail network.',
      status: 'In development',
      accent: 'bg-violet-500',
      technologies: ['React', 'Stripe', 'AWS', 'Microservices'],
      link: 'https://www.pixelora.org/',
    },
  ]

  return (
    <section id="active-projects" className="section-bg container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="// pixelora"
          title="Active builds"
          subtitle={
            <>
              Side projects and client work via{' '}
              <a
                href="https://www.pixelora.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Pixelora
              </a>
              — shipping while completing my degree.
            </>
          }
          className="text-center"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-2 font-mono text-xs text-muted-foreground">
            <Sparkles className="size-4 text-primary" aria-hidden />
            Building in public
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Card className="card-hover h-full border-border/60 bg-card/70 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={cn('size-2 animate-pulse rounded-full', project.accent)} aria-hidden />
                      <span className="font-mono text-xs text-muted-foreground">{project.status}</span>
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: 'outline', size: 'icon-sm' }), 'shrink-0 border-border/80')}
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink className="size-4" />
                  </a>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-[10px] uppercase">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActiveProjects
