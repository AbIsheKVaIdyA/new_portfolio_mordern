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
import { ViewTransition } from '@/components/ViewTransition'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { getSectionCopy, getSkillsLayout, skillProficiency } from '@/lib/profile-helpers'
import { useViewMode } from '@/contexts/ViewModeContext'

const CYBER_ICON_MAP: Record<string, typeof Shield> = {
  'Penetration testing': Search,
  'Vulnerability assessment': ShieldCheck,
  'Security auditing': Lock,
  'Red team mindset': Shield,
  'Network security': Globe,
  'Burp Suite': TerminalSquare,
  Nmap: Binary,
  Linux: TerminalSquare,
  'OWASP Top 10': Shield,
  'NIST frameworks': ShieldCheck,
}

const CATEGORY_ICONS = {
  programming: Code,
  frontend: Code,
  backend: Server,
  'cloud-data': Globe,
  ai: Binary,
} as const

function chipIcon(skill: string) {
  if (['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'].includes(skill)) return Cloud
  if (['MongoDB', 'PostgreSQL', 'Redis'].includes(skill)) return Database
  if (['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices'].includes(skill))
    return Server
  return Code
}

function SecuritySkillsGrid({ skills, large }: { skills: readonly string[]; large?: boolean }) {
  return (
    <div className={cn('grid gap-2', large ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-5')}>
      {skills.map((name, index) => {
        const Icon = CYBER_ICON_MAP[name] ?? Shield
        return (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            className={cn(
              'flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/[0.06] px-3 py-2',
              !large && 'py-1.5'
            )}
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-primary/35 bg-background/70">
              <Icon className="size-3.5 text-primary" aria-hidden />
            </span>
            <span className={cn('font-medium text-foreground', large ? 'text-xs' : 'text-[11px]')}>{name}</span>
            <div className="ml-auto hidden w-16 sm:block" title={`Proficiency: ${skillProficiency(name, index)}/5`}>
              <div className="h-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${(skillProficiency(name, index) / 5) * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

function DevCategoriesGrid({ large }: { large?: boolean }) {
  return (
    <div className={cn('grid grid-cols-1 gap-5', large ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2 xl:grid-cols-3')}>
      {profile.skills.categories.map((category, index) => {
        const Icon = CATEGORY_ICONS[category.id]
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <Card
              className={cn(
                'card-hover h-full border-border/60 bg-card/70 backdrop-blur-sm transition-colors duration-300 hover:border-primary/35',
                !large && 'opacity-90'
              )}
            >
              <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                <div
                  className={cn(
                    'flex items-center justify-center rounded-xl border border-border/80 bg-muted/50',
                    large ? 'size-10' : 'size-8'
                  )}
                >
                  <Icon className={cn('text-primary', large ? 'size-5' : 'size-4')} aria-hidden />
                </div>
                <CardTitle className={cn('font-semibold', large ? 'text-base' : 'text-sm')}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className={cn(
                        'flex items-center gap-2 rounded-md border border-border/45 bg-background/40 px-2.5 py-1.5 font-mono text-muted-foreground',
                        large ? 'text-xs' : 'text-[11px]',
                        'hover:border-primary/25 hover:text-foreground'
                      )}
                      title={`Proficiency: ${skillProficiency(skill, skillIndex)}/5`}
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/25 bg-primary/10">
                        {(() => {
                          const SkillIcon = chipIcon(skill)
                          return <SkillIcon className="size-3 text-primary" aria-hidden />
                        })()}
                      </span>
                      {skill}
                      <span className="ml-auto h-1 w-10 overflow-hidden rounded-full bg-muted">
                        <span
                          className="block h-full rounded-full bg-primary"
                          style={{ width: `${(skillProficiency(skill, skillIndex) / 5) * 100}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}

const Skills = () => {
  const { view } = useViewMode()
  const section = getSectionCopy('skills', view)
  const layout = getSkillsLayout(view)
  const primaryIsSecurity = layout.primary === 'security'

  return (
    <section id="skills" className="section-bg-alt container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
          className="text-center"
          align="center"
          cyber
        />

        <ViewTransition>
          {primaryIsSecurity ? (
            <>
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
                  <Badge
                    variant="outline"
                    className="border-primary/35 font-mono text-[10px] uppercase tracking-wider text-primary"
                  >
                    priority domain
                  </Badge>
                </div>
                <SecuritySkillsGrid skills={profile.skills.security} large />
              </motion.div>
              <div className="mt-8">
                <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {layout.secondaryLabel}
                </p>
                <DevCategoriesGrid large={false} />
              </div>
            </>
          ) : (
            <>
              <DevCategoriesGrid large />
              <div className="mt-8 rounded-2xl border border-border/50 bg-card/50 p-4 sm:p-5">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {layout.secondaryLabel}
                </p>
                <SecuritySkillsGrid skills={profile.skills.security} large={false} />
              </div>
            </>
          )}
        </ViewTransition>
      </div>
    </section>
  )
}

export default Skills
