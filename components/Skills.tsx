'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Server, Globe } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Skills = () => {
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
    {
      title: 'Security',
      icon: Shield,
      skills: [
        'Penetration testing',
        'Vulnerability assessment',
        'Security auditing',
        'Red team mindset',
        'Network security',
        'Burp Suite',
        'Nmap',
        'Linux',
      ],
    },
  ]

  return (
    <section id="skills" className="section-bg-alt container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="// stack"
          title="Technical skills"
          subtitle="Grouped by how I actually use them — from UI to cloud to offensive tooling."
          className="text-center"
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Card className="card-hover h-full border-border/60 bg-card/70 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-border/80 bg-muted/50">
                    <category.icon className="size-5 text-primary" aria-hidden />
                  </div>
                  <CardTitle className="text-base font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 font-mono text-xs text-muted-foreground sm:text-sm"
                      >
                        <span className="size-1 shrink-0 rounded-full bg-primary/80" />
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
