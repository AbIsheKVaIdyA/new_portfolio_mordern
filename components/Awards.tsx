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

const AWARDS = [
  {
    title: 'Appreciation Certificate',
    company: 'Tata Consultancy Services',
    year: '2024',
    image: '/Appreciation_Certificate_page-0001.jpg',
    category: 'Recognition',
  },
  {
    title: 'Best Team Award',
    company: 'Tata Consultancy Services',
    year: '2024',
    image: '/Best_Team_Award_page-0001.jpg',
    category: 'Teamwork',
  },
  {
    title: 'On the Spot (Team) Award',
    company: 'Tata Consultancy Services',
    year: '2024',
    image: '/On_the_Spot_(Team)_Award_page-0001.jpg',
    category: 'Recognition',
  },
  {
    title: 'Star of the Month Award',
    company: 'Tata Consultancy Services',
    year: '2024',
    image: '/Star_of_the_Month_Award_page-0001.jpg',
    category: 'Performance',
  },
  {
    title: 'Star Team Award',
    company: 'Tata Consultancy Services',
    year: '2024',
    image: '/Star_Team_Award_pages-to-jpg-0001.jpg',
    category: 'Team Excellence',
  },
] as const

function AwardThumb({
  award,
  onOpen,
  layout = 'strip',
}: {
  award: (typeof AWARDS)[number]
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
  const [selectedAward, setSelectedAward] = useState<(typeof AWARDS)[number] | null>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const loop = [...AWARDS, ...AWARDS]

  return (
    <section id="awards" className="section-bg container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="// intel.artifacts"
          title="Awards & attestations"
          subtitle="Recognition from TCS — hover the strip to pause the scroll. Click any tile for full certificate view."
          cyber
        />

        {!reduceMotion && (
          <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            ◈ live_feed — hover to hold ◈
          </p>
        )}

        {reduceMotion ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AWARDS.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <AwardThumb layout="grid" award={award} onOpen={() => setSelectedAward(award)} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative -mx-4 overflow-hidden py-2 sm:mx-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />
            <div className="cyber-marquee flex w-max gap-5 pl-4 sm:gap-6 sm:pl-0">
              {loop.map((award, i) => (
                <AwardThumb key={`${award.title}-${i}`} award={award} onOpen={() => setSelectedAward(award)} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Dialog open={!!selectedAward} onOpenChange={(open) => !open && setSelectedAward(null)}>
        <DialogContent className="max-w-4xl border-primary/20 bg-card p-2 shadow-[0_0_60px_-20px_oklch(0.78_0.14_195/0.4)] sm:p-4">
          {selectedAward && (
            <>
              <DialogHeader className="px-2 pt-2">
                <DialogTitle className="text-left font-mono text-base tracking-tight">
                  ▸ {selectedAward.title}
                </DialogTitle>
              </DialogHeader>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="rounded-lg border border-border/40 bg-background/50 p-2"
              >
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="max-h-[80vh] w-full object-contain"
                />
              </motion.div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Awards
