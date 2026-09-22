'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

type AwardEntry = (typeof profile.awards)[number]

const AWARDS = profile.awards

const Awards = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % AWARDS.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + AWARDS.length) % AWARDS.length)
  }

  return (
    <section id="awards" className="section-bg container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="// intel.artifacts"
          title="Awards"
          subtitle="Recognition from TCS"
          cyber
        />

        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-center text-base leading-relaxed text-muted-foreground">
            Star of the Month x2 (Oct 2024, Feb 2025) · On the Spot (Team) Dec 2024 · Star Team Oct 2024 · Best Team Jun 2024
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              {AWARDS.map((award, index) => (
                <button
                  key={award.id}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group relative size-20 overflow-hidden rounded-lg border border-border/50 bg-muted transition hover:border-primary/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:size-24"
                  aria-label={`View ${award.title}`}
                >
                  <img
                    src={award.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <Badge className="absolute bottom-1 right-1 border border-primary/30 bg-background/90 px-1 py-0 font-mono text-[8px] text-primary">
                    TCS
                  </Badge>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => openLightbox(0)}
              className="font-mono text-sm"
            >
              View TCS certificates
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') prevImage()
            if (e.key === 'ArrowRight') nextImage()
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
          tabIndex={-1}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 rounded-full bg-background/10 p-2 text-white backdrop-blur-sm transition hover:bg-background/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-background/10 p-3 text-white backdrop-blur-sm transition hover:bg-background/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
            aria-label="Previous certificate"
            disabled={AWARDS.length <= 1}
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-background/10 p-3 text-white backdrop-blur-sm transition hover:bg-background/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
            aria-label="Next certificate"
            disabled={AWARDS.length <= 1}
          >
            <ChevronRight className="size-6" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={AWARDS[currentIndex].image}
              alt={AWARDS[currentIndex].title}
              className="max-h-[90vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-mono text-lg font-semibold text-white">
                {AWARDS[currentIndex].title}
              </h3>
              <p className="mt-1 font-mono text-sm text-white/80">
                {AWARDS[currentIndex].company} · {AWARDS[currentIndex].year}
              </p>
              <Badge variant="secondary" className="mt-2 font-mono text-xs">
                {AWARDS[currentIndex].category}
              </Badge>
              <p className="mt-2 font-mono text-xs text-white/60">
                {currentIndex + 1} / {AWARDS.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Awards
