'use client'

import { motion } from 'framer-motion'
import { Binary, ExternalLink, Github, Shield } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { TiltCard } from '@/components/TiltCard'

const Projects = () => {
  const projects = [
    {
      title: 'LinkedIn-Style Social Platform',
      description:
        'Social networking with profiles, connections, posts, and messaging — secure auth and scalable architecture.',
      image: '/linkedin.png',
      technologies: ['React', 'Next.js', 'Spring Boot', 'MongoDB', 'AWS', 'Docker'],
      github: 'https://github.com/AbIsheKVaIdyA/linkedIn-clone',
      demo: 'https://linkedin-clone-zeta-one.vercel.app/',
      posture: 'AUTH + DATA',
      clearance: 'PUBLIC RELEASE',
    },
    {
      title: 'Walmart E-commerce Platform',
      description:
        'Full-stack commerce: catalog, cart, payments, inventory, and secure checkout with real-time stock.',
      image: '/walmart.png',
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe API', 'Redis'],
      github: 'https://github.com/AbIsheKVaIdyA/Walmart-Clone',
      demo: 'https://walmart-clone-jade.vercel.app/',
      posture: 'PAYMENTS',
      clearance: 'PUBLIC RELEASE',
    },
    {
      title: 'CloudVault — File Management',
      description:
        'Dropbox-inspired storage: upload, share, folders, and secure authentication with cloud-backed storage.',
      image: '/dropbox.png',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'JWT'],
      github: 'https://github.com/AbIsheKVaIdyA/dropbox-clone',
      demo: 'https://dropbox-clone-eta.vercel.app/',
      posture: 'STORAGE',
      clearance: 'PUBLIC RELEASE',
    },
    {
      title: 'Portfolio (previous gen)',
      description:
        'Earlier portfolio iteration — responsive layout, motion, and component-driven structure.',
      image: '/old portfolio.png',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/AbIsheKVaIdyA/portfolio1.0',
      demo: 'https://portfolio-first-eta.vercel.app/',
      posture: 'UI/X',
      clearance: 'ARCHIVE',
    },
  ]

  const slots = [
    'lg:col-span-7',
    'lg:col-span-5',
    'lg:col-span-5',
    'lg:col-span-7',
  ] as const

  return (
    <section id="projects" className="section-bg-alt container-custom relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 deploy-matrix opacity-[0.25]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" aria-hidden />

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="// mission.deployments"
          title="Featured deployments"
          subtitle="Static showcase of flagship builds — pair with the GitHub table above for live repo telemetry."
          className="text-center"
          align="center"
          cyber
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-primary">
            <Binary className="size-3.5" aria-hidden />
            build_manifest v2
          </span>
          <span className="hidden sm:inline">|</span>
          <span>clearance: public</span>
        </div>

        <div className="grid auto-rows-fr gap-5 lg:grid-cols-12 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.07, type: 'spring', stiffness: 120, damping: 22 }}
              className={cn('min-h-0', slots[index])}
            >
              <TiltCard className="group h-full" intensity={index === 0 ? 7 : 6}>
                <div className="cyber-corner-tl relative h-full">
                  <Card className="flex h-full flex-col overflow-hidden border-primary/25 bg-card/80 shadow-[0_0_0_1px_oklch(0.78_0.14_195/0.18),0_25px_60px_-35px_rgba(0,0,0,0.65)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_50px_-18px_oklch(0.78_0.14_195/0.35)]">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-primary/15 bg-muted lg:aspect-video">
                      <div className="absolute left-2 top-2 z-10 flex flex-wrap gap-1.5">
                        <span className="flex items-center gap-1.5 rounded border border-primary/35 bg-background/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary backdrop-blur-sm sm:text-[10px]">
                          <Shield className="size-3" aria-hidden />
                          {project.posture}
                        </span>
                        <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-400/95 sm:text-[10px]">
                          {project.clearance}
                        </span>
                      </div>
                      <img
                        src={project.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                        onError={(e) => {
                          e.currentTarget.style.opacity = '0'
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/10" />
                      <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: 'secondary', size: 'sm' }),
                            'flex-1 gap-2 bg-background/95 no-underline backdrop-blur'
                          )}
                        >
                          <Github className="size-4" />
                          Source
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(buttonVariants({ size: 'sm' }), 'flex-1 gap-2 no-underline')}
                        >
                          <ExternalLink className="size-4" />
                          Live
                        </a>
                      </div>
                    </div>
                    <CardContent className="flex flex-1 flex-col space-y-3 pt-5">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>
                      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-primary/20 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto justify-end gap-3 border-t border-border/50 bg-muted/20 py-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-primary underline-offset-4 hover:underline"
                      >
                        repo
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      >
                        deployment
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
