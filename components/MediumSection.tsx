'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { HONEYPOT_ARTICLE_URL } from '@/data/profile'

type Post = {
  title: string
  link: string
  pubDate: string
  snippet: string
  image?: string
}

/** Fallback articles when the Medium RSS feed is unavailable — edit URLs and copy here */
const MEDIUM_ARTICLES: Post[] = [
  {
    title:
      'Building a Cloud-Hosted Honeypot with T-Pot on Microsoft Azure: A Hands-On Cybersecurity Project',
    link: HONEYPOT_ARTICLE_URL,
    pubDate: '2026-03-29',
    snippet:
      'Deploying a honeypot reveals how attackers behave in the wild — SIEM events, IOC extraction, and OSINT attribution on Azure.',
    image: '/azure-honeypot-medium.png',
  },
  {
    title:
      'How I Built a Secure Walmart-Style E-Commerce Platform (Full-Stack + Cybersecurity Project)',
    link: 'https://medium.com/@abhishekcv.us/secure-walmart-style-e-commerce-platform-full-stack-cybersecurity-implementation-de6330f33566',
    pubDate: '2026-04-23',
    snippet:
      'OWASP-aligned full-stack commerce — JWT auth, RBAC, AES-256-GCM encryption, rate limiting, and pre-launch security validation.',
    image: '/walmart.png',
  },
  {
    title: 'How I Actually Passed CompTIA Security+ in 2 Months (No BS, Just My Story)',
    link: 'https://medium.com/@abhishekcv.us/how-i-actually-passed-comptia-security-in-2-months-no-bs-just-my-story-f74af849e9b7',
    pubDate: '2026-03-31',
    snippet:
      'A practical study plan for Security+ — discipline, mindset, and the resources that actually moved the needle.',
    image: '/CompTIA Security+ ce certificate-1.png',
  },
]

function ArticleGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {posts.map((post, index) => (
        <motion.a
          key={post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-card/95 via-card/65 to-card/35 shadow-[0_0_40px_-18px_oklch(0.78_0.14_195/0.35)] transition hover:border-primary/45 hover:shadow-[0_0_50px_-12px_oklch(0.78_0.14_195/0.45)]"
        >
          <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
          <div className="relative aspect-[16/9] overflow-hidden border-b border-primary/15 bg-muted/40">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full items-center justify-center gap-2 text-muted-foreground">
                <BookOpen className="size-5 text-primary/70" aria-hidden />
                <span className="font-mono text-xs uppercase tracking-wider">Medium article</span>
              </div>
            )}
          </div>
          <div className="relative p-5">
            <div className="flex items-start justify-between gap-3">
              <BookOpen className="size-5 shrink-0 text-primary" aria-hidden />
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </div>
            <h3 className="relative mt-3 line-clamp-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
              {post.title}
            </h3>
            {post.pubDate && (
              <p className="relative mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {new Date(post.pubDate).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            )}
            {post.snippet && (
              <p className="relative mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {post.snippet}
              </p>
            )}
            <Badge variant="outline" className="relative mt-4 border-primary/25 font-mono text-[10px]">
              medium.com
            </Badge>
          </div>
        </motion.a>
      ))}
    </div>
  )
}

export function MediumSection() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [usedFallback, setUsedFallback] = useState(false)

  useEffect(() => {
    fetch('/api/medium')
      .then((r) => r.json())
      .then((d) => {
        if (d.ok && d.posts?.length) {
          setPosts(d.posts)
        } else {
          setPosts(MEDIUM_ARTICLES)
          setUsedFallback(true)
        }
      })
      .catch(() => {
        setPosts(MEDIUM_ARTICLES)
        setUsedFallback(true)
      })
      .finally(() => setLoading(false))
  }, [])

  const displayPosts = posts.length > 0 ? posts : MEDIUM_ARTICLES

  return (
    <section id="writing" className="section-bg-alt container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="// medium.com/@abhishekcv.us"
          title="Blog & technical writing"
          subtitle="Articles from Medium — long-form notes on security, engineering, and whatever I’m learning."
          className="text-center"
          align="center"
          cyber
        />

        {loading ? (
          <div className="grid gap-5 md:grid-cols-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-56 animate-pulse rounded-xl border border-border/40 bg-muted/20"
              />
            ))}
          </div>
        ) : (
          <>
            {usedFallback && (
              <p className="mb-5 text-center font-mono text-xs text-muted-foreground">
                Showing featured articles — live Medium feed unavailable.
              </p>
            )}
            <ArticleGrid posts={displayPosts.slice(0, 8)} />
          </>
        )}
      </div>
    </section>
  )
}
