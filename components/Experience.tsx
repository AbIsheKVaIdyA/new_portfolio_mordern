'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

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

  return (
    <section id="experience" className="section-bg container-custom">
      <div className="container-inner">
        <SectionHeading
          eyebrow="// timeline"
          title="Experience & education"
          subtitle="Where I’ve shipped, studied, and leveled up — newest first."
        />

        <div className="relative space-y-6 pl-4 sm:pl-6">
          <div
            className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:left-[13px]"
            aria-hidden
          />
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.period}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[5px] top-6 z-10 flex size-3 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(56,189,248,0.45)] sm:-left-1 sm:size-3.5" />
              <Card className="card-hover border-border/60 bg-card/80 backdrop-blur-sm">
                <CardContent className="space-y-4 pt-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">{exp.title}</h3>
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
    </section>
  )
}

export default Experience
