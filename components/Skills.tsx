'use client'

import { motion } from 'framer-motion'
import {
  Binary,
  Cloud,
  Code,
  Database,
  Globe,
  Search,
  Server,
  Shield,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ViewTransition } from '@/components/ViewTransition'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { getSectionCopy, getSkillsLayout } from '@/lib/profile-helpers'
import { useViewMode } from '@/contexts/ViewModeContext'

const CATEGORY_ICONS: Record<string, typeof Shield> = {
  frontend: Code,
  backend: Server,
  programming: TerminalSquare,
  cloud: Cloud,
  databases: Database,
  devops: Wrench,
  security: Shield,
  ai: Binary,
}

const SECURITY_CHIP_ICONS: Record<string, typeof Shield> = {
  'Penetration testing': Search,
  'HIPAA alignment': ShieldCheck,
  'OWASP Top 10': Shield,
  'Burp Suite': TerminalSquare,
  'OWASP ZAP': Search,
  Nmap: Globe,
  Linux: TerminalSquare,
}

function SkillCategoryCard({
  title,
  skills,
  categoryId,
  large,
  index,
}: {
  title: string
  skills: readonly string[]
  categoryId: string
  large?: boolean
  index: number
}) {
  const { view } = useViewMode()
  const Icon = CATEGORY_ICONS[categoryId] ?? Code
  const isSecurity = categoryId === 'security'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -2 }}
    >
      <Card
        className={cn(
          'h-full transition-all duration-300 hover:shadow-lg',
          view === 'developer'
            ? 'dev-surface hover:border-violet-200'
            : 'border-primary/20 bg-card/70 hover:border-primary/35',
          isSecurity && large && view === 'security' && 'border-primary/30 shadow-[0_0_55px_-25px_oklch(0.78_0.14_195/0.52)]'
        )}
      >
        <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-3">
          <div
            className={cn(
              'flex items-center justify-center rounded-xl border',
              view === 'developer'
                ? 'border-violet-200/80 bg-violet-50'
                : 'border-primary/25 bg-primary/[0.06]',
              large ? 'size-10' : 'size-8'
            )}
          >
            <Icon
              className={cn(
                view === 'developer' ? 'text-violet-600' : 'text-primary',
                large ? 'size-5' : 'size-4'
              )}
              aria-hidden
            />
          </div>
          <CardTitle className={cn('font-semibold', large ? 'text-base' : 'text-sm')}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              const ChipIcon = SECURITY_CHIP_ICONS[skill] ?? CATEGORY_ICONS[categoryId] ?? Code
              return (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={cn(
                    'gap-1.5 px-2.5 py-1 text-[11px] font-normal transition-colors hover:border-primary/30',
                    view === 'developer' && 'bg-neutral-50 hover:bg-violet-50'
                  )}
                >
                  <ChipIcon className="size-3 shrink-0 opacity-70" aria-hidden />
                  {skill}
                </Badge>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Skills = () => {
  const { view } = useViewMode()
  const section = getSectionCopy('skills', view)
  const layout = getSkillsLayout(view)
  const primaryIsSecurity = layout.primary === 'security'

  const securityCategory = profile.skills.categories.find((c) => c.id === 'security')
  const otherCategories = profile.skills.categories.filter((c) => c.id !== 'security')

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
              {securityCategory && (
                <SkillCategoryCard
                  title={securityCategory.title}
                  skills={securityCategory.skills}
                  categoryId={securityCategory.id}
                  large
                  index={0}
                />
              )}
              <p className="mb-5 mt-10 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {layout.secondaryLabel}
              </p>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {otherCategories.map((category, index) => (
                  <SkillCategoryCard
                    key={category.id}
                    title={category.title}
                    skills={category.skills}
                    categoryId={category.id}
                    index={index + 1}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {profile.skills.categories.map((category, index) => (
                  <SkillCategoryCard
                    key={category.id}
                    title={category.title}
                    skills={category.skills}
                    categoryId={category.id}
                    large={category.id === 'frontend' || category.id === 'backend'}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}
        </ViewTransition>
      </div>
    </section>
  )
}

export default Skills
