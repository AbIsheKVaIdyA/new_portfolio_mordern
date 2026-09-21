'use client'

import { motion } from 'framer-motion'
import { Fingerprint, Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { profile } from '@/data/profile'

type AwardEntry = (typeof profile.awards)[number]

const AWARDS = profile.awards

function AwardThumb({
  award,
  onOpen,
  layout = 'strip',
}: {
  award: AwardEntry
  onOpen: () => void
  layout?: 'strip' | 'grid'
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group text-left transition duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary ${
        layout === 'strip' ? 'w-72 shrink-0' : 'w-full max-w-lg justify-self-center'
      }`}
    >
      <Card className="h-full overflow-hidden border-primary/20 bg-gradient-to-br from-card/95 via-card/70 to-card/40 shadow-[0_0_30px_-14px_oklch(0.78_0.14_195/0.35)] transition group-hover:border-primary/40 group-hover:shadow-[0_0_44px_-10px_oklch(0.78_0.14_195/0.45)]">
        <CardContent className="space-y-3 p-4 pt-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/50 bg-muted">
            <img
              src={award.image}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:brightness-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const next = e.currentTarget.nextElementSibling as HTMLElement | null
                if (next) {
                  next.classList.remove('hidden')
                  next.classList.add('flex')
                }
              }}
            />
            <div className="hidden h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary/15 to-accent/10 p-4 text-center">
              <Trophy className="mb-2 size-10 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">Certificate</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            <Badge className="absolute right-2 top-2 border border-primary/30 bg-background/90 font-mono text-[10px] text-primary">
              TCS
            </Badge>
            <Fingerprint className="absolute bottom-2 left-2 size-6 text-primary/40" aria-hidden />
          </div>
          <div>
            <h3 className="line-clamp-2 font-mono text-sm font-semibold leading-snug text-foreground">{award.title}</h3>
            <p className="mt-1 font-mono text-[11px] text-muted-foreground">
              {award.company} · {award.year}
            </p>
            <Badge variant="secondary" className="mt-2 font-mono text-[10px] uppercase tracking-wide">
              {award.category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </button>
  )
}

const Awards = () => {
  return (
    <section id="awards" className="section-bg container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="// intel.artifacts"
          title="Awards"
          subtitle="Recognition from TCS"
          cyber
        />

        <div className="mx-auto max-w-2xl">
          <p className="text-center text-base leading-relaxed text-muted-foreground">
            Star of the Month x2 (Oct 2024, Feb 2025) · On the Spot (Team) Dec 2024 · Star Team Oct 2024 · Best Team Jun 2024
          </p>
        </div>
      </div>
    </section>
  )
}

export default Awards
