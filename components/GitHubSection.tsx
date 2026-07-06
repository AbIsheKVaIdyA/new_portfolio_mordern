'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, Github, Star } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useViewMode } from '@/contexts/ViewModeContext'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

type Repo = {
  name: string
  url: string
  description: string | null
  stars: number
  language: string | null
  updatedAt: string
}

type GitHubData = {
  ok: boolean
  profile?: { login: string; htmlUrl: string; publicRepos: number; followers: number }
  repos?: Repo[]
}

export function GitHubSection() {
  const { view } = useViewMode()
  const [data, setData] = useState<GitHubData | null>(null)

  useEffect(() => {
    fetch('/api/github')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false }))
  }, [])

  if (view === 'security') return null

  if (!data?.ok || !data.repos?.length) return null

  const langs = Array.from(
    new Set(data.repos.map((r) => r.language).filter(Boolean) as string[])
  ).slice(0, 6)

  return (
    <section id="github" className="section-bg-alt container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Open source"
          title="GitHub activity"
          subtitle="Pinned repositories, languages, and recent updates from my public work."
          className="text-center"
          align="center"
        />

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Public repos', value: data.profile?.publicRepos ?? '—' },
            { label: 'Followers', value: data.profile?.followers ?? '—' },
            { label: 'Top languages', value: langs.length },
          ].map((stat) => (
            <Card key={stat.label} className={cn(view === 'developer' ? 'dev-surface' : 'border-primary/20 bg-card/60')}>
              <CardContent className="p-5 text-center">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {langs.map((lang) => (
            <Badge key={lang} variant="outline">
              {lang}
            </Badge>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {data.repos.slice(0, 6).map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                'block rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-lg no-underline',
                view === 'developer' ? 'dev-surface hover:border-violet-200' : 'border-border/60 bg-card/50 hover:border-primary/30'
              )}
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-medium text-foreground">
                  <Github className="size-4" />
                  {repo.name}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="size-3.5 text-amber-400" />
                  {repo.stars}
                </span>
              </div>
              {repo.description && (
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{repo.description}</p>
              )}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{repo.language || '—'}</span>
                <span className="inline-flex items-center gap-1">
                  <GitBranch className="size-3" />
                  updated
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={profile.identity.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View full GitHub profile <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
