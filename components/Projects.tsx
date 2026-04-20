'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Binary, ExternalLink, Github, Shield } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
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

  const [featured, ...others] = projects

  return (
    <section id="projects" className="section-bg-alt container-custom relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 deploy-matrix opacity-[0.25]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" aria-hidden />

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="// mission.deployments"
          title="Featured deployments"
          subtitle="A curated set of launches with stronger product framing, stack clarity, and direct access to source/live systems."
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, type: 'spring', stiffness: 110, damping: 20 }}
          className="mb-6"
        >
          <TiltCard className="group h-full" intensity={7}>
            <Card className="overflow-hidden border-primary/30 bg-card/85 shadow-[0_0_0_1px_oklch(0.78_0.14_195/0.18),0_28px_70px_-36px_rgba(0,0,0,0.75)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_60px_-18px_oklch(0.78_0.14_195/0.35)]">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="relative min-h-[250px] overflow-hidden border-b border-primary/15 bg-muted/40 lg:min-h-[340px] lg:border-b-0 lg:border-r">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0'
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/35 to-primary/10 lg:bg-gradient-to-r lg:from-transparent lg:to-background/40" />
                </div>

                <CardContent className="flex flex-col justify-between space-y-4 p-6">
                  <div>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1.5 rounded border border-primary/35 bg-background/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary backdrop-blur-sm sm:text-[10px]">
                        <Shield className="size-3" aria-hidden />
                        {featured.posture}
                      </span>
                      <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-400/95 sm:text-[10px]">
                        {featured.clearance}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">{featured.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{featured.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {featured.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/20 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'gap-2 bg-background/95 no-underline')}
                    >
                      <Github className="size-4" />
                      Source
                    </a>
                    <a
                      href={featured.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ size: 'sm' }), 'gap-2 no-underline')}
                    >
                      <ExternalLink className="size-4" />
                      Live
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </TiltCard>
        </motion.div>

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {others.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="min-h-0"
            >
              <TiltCard className="group h-full" intensity={6}>
                <Card className="flex h-full flex-col overflow-hidden border-primary/25 bg-card/80 shadow-[0_0_0_1px_oklch(0.78_0.14_195/0.18),0_25px_60px_-35px_rgba(0,0,0,0.65)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_50px_-18px_oklch(0.78_0.14_195/0.35)]">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-primary/15 bg-muted">
                    <div className="absolute left-2 top-2 z-10 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded border border-primary/35 bg-background/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary">
                        {project.posture}
                      </span>
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0'
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  </div>
                  <CardContent className="flex flex-1 flex-col space-y-3 pt-5">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/20 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'gap-2 no-underline')}
                      >
                        <Github className="size-4" />
                        Source
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ size: 'sm' }), 'gap-2 no-underline')}
                      >
                        <ExternalLink className="size-4" />
                        Live
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
