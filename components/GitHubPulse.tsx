'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, GitBranch, Star, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

type Repo = {
  name: string
  url: string
  description: string | null
  stars: number
  language: string | null
  updatedAt: string
}

function formatUpdated(iso: string) {
  const d = new Date(iso)
  const now = new Date()
  const diff = (now.getTime() - d.getTime()) / 86400000
  if (diff < 1) return 'today'
  if (diff < 7) return `${Math.floor(diff)}d`
  if (diff < 30) return `${Math.floor(diff / 7)}w`
  return `${Math.floor(diff / 30)}mo`
}

export function GitHubPulse() {
  const [data, setData] = useState<{
    ok: boolean
    profile?: { login: string; htmlUrl: string; publicRepos: number }
    repos?: Repo[]
  } | null>(null)

  useEffect(() => {
    fetch('/api/github')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false }))
  }, [])

  return (
    <section id="github-pulse" className="section-bg container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="// git.remote — origin"
          title="Live repository intel"
          subtitle="Pulled from the GitHub API — stars, languages, and last push. Same profile as your featured work, different lens."
          cyber
        />

        {!data?.ok || !data.repos?.length ? (
          <div className="rounded-xl border border-dashed border-border/60 bg-muted/20 px-6 py-12 text-center font-mono text-sm text-muted-foreground">
            Could not load GitHub data. Check network or API limits.
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl border border-primary/25 bg-black/40 shadow-[inset_0_1px_0_0_oklch(0.78_0.14_195/0.15)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary/20 bg-muted/20 px-4 py-2 font-mono text-[11px] text-muted-foreground">
              <span className="flex items-center gap-2 text-primary">
                <Terminal className="size-3.5" />
                GET /users/{data.profile?.login}/repos
              </span>
              <a
                href={data.profile?.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Open profile <ExternalLink className="size-3" />
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Repository</th>
                    <th className="px-4 py-3 font-medium">Stars</th>
                    <th className="px-4 py-3 font-medium">Lang</th>
                    <th className="px-4 py-3 font-medium">Updated</th>
                    <th className="px-4 py-3 font-medium" />
                  </tr>
                </thead>
                <tbody>
                  {data.repos.map((repo, i) => (
                    <motion.tr
                      key={repo.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="border-b border-border/30 transition hover:bg-primary/5"
                    >
                      <td className="px-4 py-3">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono font-medium text-primary hover:underline"
                        >
                          {repo.name}
                        </a>
                        {repo.description && (
                          <p className="mt-1 line-clamp-1 max-w-md font-mono text-[11px] text-muted-foreground">
                            {repo.description}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-3 font-mono tabular-nums text-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Star className="size-3.5 text-amber-400" />
                          {repo.stars}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            'rounded border border-border/50 px-2 py-0.5 font-mono text-[10px]',
                            repo.language ? 'text-primary' : 'text-muted-foreground'
                          )}
                        >
                          {repo.language || '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px] text-muted-foreground">
                        {formatUpdated(repo.updatedAt)}
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex text-muted-foreground hover:text-primary"
                        >
                          <GitBranch className="size-4" />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
