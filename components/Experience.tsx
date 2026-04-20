'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, GraduationCap, MapPin, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const Experience = () => {
  const experiences = [
    {
      title: 'MS in Cybersecurity, Technology and Policy',
      company: 'The University of Texas at Dallas',
      location: 'Dallas, TX',
      period: 'Aug 2023 – Aug 2027 (Expected)',
      description:
        'Pursuing Master of Science in Cybersecurity with focus on technology and policy. Advanced coursework in frameworks, risk management, and policy.',
      skills: ['Cybersecurity', 'Risk Management', 'Policy', 'Security Frameworks'],
      type: 'education' as const,
    },
    {
      title: 'Full Stack Developer',
      company: 'Tata Consultancy Services | Boeing Project',
      location: 'Dallas, TX',
      period: 'Feb 2024 – May 2025',
      description:
        'Led React front-end with Material UI; improved UX and performance 55%+. Owned production issues across React, Spring Boot, and SQL. Delivered urgent cross-stack work with measurable business impact; mentored junior developers and enforced secure coding.',
      skills: ['React', 'Material UI', 'Spring Boot', 'SQL', 'Mentoring'],
      type: 'work' as const,
    },
    {
      title: 'Full Stack Developer',
      company: 'Orbit Technologies',
      location: 'Hubli, India',
      period: 'January 2024',
      description:
        'Built a greenfield project integrating React with Java Spring Boot & SQL. Designed and tested APIs with Swagger & Postman.',
      skills: ['React', 'Spring Boot', 'SQL', 'API Design', 'Swagger'],
      type: 'work' as const,
    },
    {
      title: 'Cybersecurity Virtual Intern',
      company: 'EduSkills (Palo Alto)',
      location: 'Remote',
      period: 'Mar 2022 - May 2022',
      description:
        'Hands-on labs in network security, firewalls, IDS/IPS, and vulnerability assessment; foundations in risk analysis and IR.',
      skills: ['Network Security', 'Firewalls', 'IDS/IPS', 'Risk Analysis'],
      type: 'work' as const,
    },
    {
      title: 'Bachelor of Electronics and Communications',
      company: 'Visvesvaraya Technological University',
      location: 'Dharwad, India',
      period: 'Jun 2019 - Jun 2023',
      description:
        'B.E. in Electronics and Communications — systems, protocols, and signal processing.',
      skills: ['Electronics', 'Communications', 'Signal Processing', 'Digital Systems'],
      type: 'education' as const,
    },
  ]

  const primaryExperience = experiences[1]
  const timelineExperiences = experiences.filter((_, index) => index !== 1)

  return (
    <section id="experience" className="section-bg container-custom">
      <div className="container-inner">
        <SectionHeading
          eyebrow="// mission_log"
          title="Experience & education"
          subtitle="Execution across full-stack delivery and cybersecurity-focused training."
          cyber
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mb-8"
        >
          <Card className="overflow-hidden border-primary/30 bg-card/85 shadow-[0_0_0_1px_oklch(0.78_0.14_195/0.14),0_20px_55px_-28px_rgba(0,0,0,0.8)] backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid gap-0 lg:grid-cols-[1.35fr_1fr]">
                <div className="space-y-4 p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border-primary/40 bg-primary/15 font-mono text-[10px] uppercase tracking-wider text-primary">
                      flagship role
                    </Badge>
                    <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider">
                      full stack delivery
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">{primaryExperience.title}</h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="size-4 text-primary" aria-hidden />
                      {primaryExperience.company}
                    </p>
                  </div>

                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {primaryExperience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {primaryExperience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-mono text-[10px] uppercase tracking-wide">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-l border-border/55 bg-muted/25 p-6 sm:p-7">
                  <div className="space-y-3 font-mono text-xs text-muted-foreground">
                    <p className="inline-flex items-center gap-2">
                      <Calendar className="size-3.5 text-primary/80" aria-hidden />
                      {primaryExperience.period}
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <MapPin className="size-3.5 text-primary/80" aria-hidden />
                      {primaryExperience.location}
                    </p>
                    <Separator className="my-3 bg-border/60" />
                    <p className="inline-flex items-center gap-2 text-primary/95">
                      <TrendingUp className="size-3.5" aria-hidden />
                      Impact: UX and performance +55% while owning prod reliability
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="relative pl-4 sm:pl-6">
          <div className="absolute bottom-1 left-[11px] top-1 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-[13px]" aria-hidden />
          <div className="space-y-4">
            {timelineExperiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.period}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[5px] top-6 z-10 flex size-3.5 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_14px_rgba(56,189,248,0.45)] sm:-left-1" />
              <Card className="card-hover border-border/60 bg-card/80 backdrop-blur-sm transition-colors duration-300 hover:border-primary/35">
                <CardContent className="space-y-4 pt-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge
                          variant="outline"
                          className={cn(
                            'font-mono text-[10px] uppercase tracking-wider',
                            exp.type === 'education' ? 'border-sky-500/40 text-sky-300' : 'border-primary/40 text-primary'
                          )}
                        >
                          {exp.type === 'education' ? 'education' : 'work'}
                        </Badge>
                      </div>
                      <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">{exp.title}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        {exp.type === 'education' ? (
                          <GraduationCap className="size-4 text-primary" aria-hidden />
                        ) : (
                          <Briefcase className="size-4 text-primary" aria-hidden />
                        )}
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col gap-1 font-mono text-xs text-muted-foreground sm:text-right">
                      <span className="inline-flex items-center gap-1.5 sm:justify-end">
                        <Calendar className="size-3.5 opacity-70" aria-hidden />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 sm:justify-end">
                        <MapPin className="size-3.5 opacity-70" aria-hidden />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <Separator className="bg-border/60" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-mono text-[10px] uppercase tracking-wide">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
