'use client'

import { motion } from 'framer-motion'
import {
  Binary,
  Cloud,
  Code,
  Database,
  Globe,
  Lock,
  Search,
  Server,
  Shield,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const Skills = () => {
  const cyberSkills = [
    { name: 'Penetration testing', icon: Search },
    { name: 'Vulnerability assessment', icon: ShieldCheck },
    { name: 'Security auditing', icon: Lock },
    { name: 'Red team mindset', icon: Shield },
    { name: 'Network security', icon: Globe },
    { name: 'Burp Suite', icon: TerminalSquare },
    { name: 'Nmap', icon: Binary },
    { name: 'Linux', icon: TerminalSquare },
  ]

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Spring Boot', 'Python', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices', 'Postman'],
    },
    {
      title: 'Cloud & data',
      icon: Globe,
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'MongoDB', 'PostgreSQL', 'Redis'],
    },
  ]

  const chipIcon = (skill: string) => {
    if (['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'].includes(skill)) return Cloud
    if (['MongoDB', 'PostgreSQL', 'Redis'].includes(skill)) return Database
    if (['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices'].includes(skill)) return Server
    return Code
  }

  return (
    <section id="skills" className="section-bg-alt container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="// capability.matrix"
          title="Technical skills"
          subtitle="Security-first profile with full-stack execution across frontend, backend, cloud, and data systems."
          className="text-center"
          align="center"
          cyber
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-2xl border border-primary/30 bg-card/80 p-5 shadow-[0_0_55px_-25px_oklch(0.78_0.14_195/0.52)] backdrop-blur-sm sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <Shield className="size-4" aria-hidden />
              Cybersecurity focus
            </p>
            <Badge variant="outline" className="border-primary/35 font-mono text-[10px] uppercase tracking-wider text-primary">
              priority domain
            </Badge>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {cyberSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/[0.06] px-3 py-2"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-primary/35 bg-background/70">
                  <skill.icon className="size-3.5 text-primary" aria-hidden />
                </span>
                <span className="text-xs font-medium text-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Card className="card-hover h-full border-border/60 bg-card/70 backdrop-blur-sm transition-colors duration-300 hover:border-primary/35">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-border/80 bg-muted/50">
                    <category.icon className="size-5 text-primary" aria-hidden />
                  </div>
                  <CardTitle className="text-base font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className={cn(
                          'flex items-center gap-2 rounded-md border border-border/45 bg-background/40 px-2.5 py-1.5 font-mono text-xs text-muted-foreground',
                          'hover:border-primary/25 hover:text-foreground'
                        )}
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/25 bg-primary/10">
                          {(() => {
                            const Icon = chipIcon(skill)
                            return <Icon className="size-3 text-primary" aria-hidden />
                          })()}
                        </span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
