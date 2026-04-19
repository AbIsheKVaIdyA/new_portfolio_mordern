'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const About = () => {
  return (
    <section id="about" className="section-bg container-custom relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="container-inner relative">
        <SectionHeading
          eyebrow="// about"
          title="Profile"
          subtitle="Cybersecurity and full-stack engineering, with security baked into how I design and ship software."
        />

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto lg:mx-0"
          >
            <div className="relative aspect-square w-44 overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-xl shadow-black/30 sm:w-52">
              <img
                src="/me.jpg"
                alt="Abhishek Vaidya"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const el = e.currentTarget.nextElementSibling as HTMLElement | null
                  if (el) {
                    el.classList.remove('hidden')
                    el.classList.add('flex')
                  }
                }}
              />
              <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 font-mono text-4xl text-muted-foreground">
                AV
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
              <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider">
                UT Dallas
              </Badge>
              <Badge variant="outline" className="border-primary/30 font-mono text-[10px] uppercase tracking-wider">
                MS Cybersecurity
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Card className="border-border/60 bg-card/70 backdrop-blur-sm">
              <CardContent className="space-y-5 pt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  I&apos;m <strong className="text-foreground">Abhishek Vaidya</strong>, a Cybersecurity graduate student
                  at UT Dallas. My work spans{' '}
                  <strong className="text-foreground">full-stack development</strong>,{' '}
                  <strong className="text-foreground">secure system design</strong>, and{' '}
                  <strong className="text-foreground">cloud security</strong>. I build with React, Next.js, Spring Boot,
                  Python, and JavaScript, and I operate comfortably on AWS, Azure, MongoDB, and Docker.
                </p>
                <p>
                  I&apos;m preparing for{' '}
                  <strong className="text-foreground">CISSP</strong>,{' '}
                  <strong className="text-foreground">CompTIA Security+</strong>,{' '}
                  <strong className="text-foreground">AWS Security Specialty</strong>, and{' '}
                  <strong className="text-foreground">AWS Cloud Practitioner</strong>, with a strong interest in{' '}
                  <strong className="text-foreground">offensive security</strong> and defensive hardening.
                </p>
                <p>
                  I&apos;ve built LinkedIn-style social platforms, IoT healthcare systems, and scalable secure apps. My
                  goal is systems that stay resilient under abuse — not just functional in the happy path.
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
