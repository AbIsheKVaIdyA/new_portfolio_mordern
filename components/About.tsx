'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Crosshair, ShieldCheck, TerminalSquare } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TiltCard } from '@/components/TiltCard'
import { profile } from '@/data/profile'

const FOCUS_ICONS = [ShieldCheck, TerminalSquare, Crosshair, ShieldCheck] as const

const About = () => {
  const { identity, about } = profile

  return (
    <section id="about" className="section-bg container-custom relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="container-inner relative">
        <SectionHeading
          eyebrow="// operator.profile"
          title="Profile"
          subtitle="Cybersecurity and full-stack engineering, with security built into architecture, delivery, and operations."
          cyber
        />

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TiltCard intensity={7}>
              <Card className="overflow-hidden border-primary/25 bg-card/75 shadow-[0_0_45px_-22px_oklch(0.78_0.14_195/0.45)] backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden border-b border-primary/15 bg-muted/50">
                  <Image
                    src="/me.jpg"
                    alt={identity.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
                <CardContent className="space-y-4 pt-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider">
                      {identity.school.replace('The University of Texas at ', 'UT ')}
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 font-mono text-[10px] uppercase tracking-wider">
                      M.S. Cybersecurity
                    </Badge>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">{about.cardTagline}</p>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-5"
          >
            <Card className="border-primary/25 bg-card/70 backdrop-blur-sm">
              <CardContent className="space-y-5 pt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {about.focusAreas.map((area, index) => {
                const Icon = FOCUS_ICONS[index % FOCUS_ICONS.length]
                return (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-xl border border-border/60 bg-card/65 p-4 backdrop-blur-sm"
                  >
                    <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary">
                      <Icon className="size-3.5" aria-hidden />
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground">{area}</p>
                  </motion.div>
                )
              })}
            </div>

            <Card className="border-border/60 bg-card/65 backdrop-blur-sm">
              <CardContent className="pt-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Certifications earned:</span>{' '}
                  {about.certificationPath.completed.join(', ')}.
                  <br />
                  <span className="font-medium text-foreground">In progress:</span>{' '}
                  {about.certificationPath.inProgress.join(', ')}.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
