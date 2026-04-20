'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Crosshair, ShieldCheck, TerminalSquare } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TiltCard } from '@/components/TiltCard'

const About = () => {
  const focusAreas = [
    'Secure system design',
    'Cloud + API hardening',
    'Full-stack product delivery',
    'Detection and response mindset',
  ]

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
                  <Image src="/me.jpg" alt="Abhishek Vaidya" fill sizes="(max-width: 1024px) 100vw, 320px" className="object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
                <CardContent className="space-y-4 pt-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider">
                      UT Dallas
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 font-mono text-[10px] uppercase tracking-wider">
                      MS Cybersecurity
                    </Badge>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    Building secure software systems with engineering discipline and cyber defense mindset.
                  </p>
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
                <p>
                  I&apos;m <strong className="text-foreground">Abhishek Vaidya</strong>, a Cybersecurity graduate student
                  at UT Dallas. My work spans <strong className="text-foreground">full-stack development</strong>,{' '}
                  <strong className="text-foreground">secure system design</strong>, and{' '}
                  <strong className="text-foreground">cloud security</strong>.
                </p>
                <p>
                  I build with React, Next.js, Spring Boot, Python, and JavaScript, and I operate across AWS, Azure,
                  MongoDB, and Docker. I focus on software that is resilient under real-world abuse, not only happy-path
                  demos.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-xl border border-border/60 bg-card/65 p-4 backdrop-blur-sm"
                >
                  <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary">
                    {index % 3 === 0 ? <ShieldCheck className="size-3.5" aria-hidden /> : index % 3 === 1 ? <TerminalSquare className="size-3.5" aria-hidden /> : <Crosshair className="size-3.5" aria-hidden />}
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">{area}</p>
                </motion.div>
              ))}
            </div>

            <Card className="border-border/60 bg-card/65 backdrop-blur-sm">
              <CardContent className="pt-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Certification path in progress:{' '}
                  <strong className="text-foreground">CISSP</strong>,{' '}
                  <strong className="text-foreground">CompTIA Security+</strong>,{' '}
                  <strong className="text-foreground">AWS Security Specialty</strong>, and{' '}
                  <strong className="text-foreground">AWS Cloud Practitioner</strong>.
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
