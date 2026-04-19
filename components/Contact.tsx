'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link003 } from '@/components/ui/skiper-ui/skiper40'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhishekcv.us@gmail.com',
      link: 'mailto:abhishekcv.us@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (945) 367-2111',
      link: 'tel:+19453672111',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dallas, Texas',
      link: '#contact',
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/abhishek-vaidya-73075424a/',
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/AbIsheKVaIdyA',
    },
  ]

  return (
    <section id="contact" className="section-bg-alt container-custom pb-24">
      <div className="container-inner">
        <SectionHeading
          eyebrow="// handshake"
          title="Let’s talk"
          subtitle="Open to cybersecurity and full-stack roles — happy to chat about teams, tech, and threat models."
          className="text-center"
          align="center"
        />

        <div className="mx-auto grid max-w-2xl gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {contactInfo.map((info) => (
              <a key={info.label} href={info.link} className="group block">
                <Card className="h-full border-border/60 bg-card/70 transition hover:border-primary/30">
                  <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-border/60 bg-muted/50 transition group-hover:border-primary/40">
                      <info.icon className="size-5 text-primary" aria-hidden />
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{info.label}</p>
                    <p className="text-sm font-medium text-foreground break-all">{info.value}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border/60 bg-muted/20 px-6 py-8 text-center"
          >
            <p className="font-mono text-xs text-muted-foreground">
              Prefer a direct line? Email me —{' '}
              <Link003 href="mailto:abhishekcv.us@gmail.com" className="text-primary">
                abhishekcv.us@gmail.com
              </Link003>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'secondary', size: 'sm' }),
                    'gap-2 rounded-full no-underline'
                  )}
                >
                  <s.icon className="size-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
