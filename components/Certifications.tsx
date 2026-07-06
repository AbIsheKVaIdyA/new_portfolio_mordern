'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Clock3, Lock } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { profile } from '@/data/profile'

type CertEntry = (typeof profile.certifications)[number]

const LIGHTBOX_CLASS =
  'flex max-h-[95vh] w-[min(98vw,72rem)] max-w-[min(98vw,72rem)] flex-col gap-3 overflow-hidden border-border/50 bg-card p-3 sm:p-4'

function certImageSrc(path: string) {
  if (!path) return ''
  const parts = path.split('/')
  const file = parts[parts.length - 1]
  return `${parts.slice(0, -1).join('/')}/${encodeURIComponent(file)}`
}

function FeaturedCertCard({
  cert,
  label,
  onOpen,
}: {
  cert: CertEntry
  label: string
  onOpen: () => void
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => cert.image && onOpen()}
      className="group relative h-full overflow-hidden rounded-2xl border border-primary/30 bg-card/85 text-left shadow-[0_0_60px_-26px_oklch(0.78_0.14_195/0.5)] backdrop-blur-sm transition hover:border-primary/45"
    >
      <div className="absolute left-4 top-4 z-10">
        <Badge className="border-primary/40 bg-background/80 font-mono text-[10px] uppercase tracking-wider text-primary">
          {label}
        </Badge>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-primary/15 bg-muted/40">
        {cert.image ? (
          <Image
            src={certImageSrc(cert.image)}
            alt={cert.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>
      <div className="space-y-3 p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">{cert.name}</h3>
        <p className="font-mono text-xs text-muted-foreground">
          {cert.issuer} · {cert.year}
        </p>
        <p className="inline-flex items-center gap-2 font-mono text-xs text-primary">
          <CheckCircle className="size-3.5" aria-hidden />
          Open full credential
        </p>
      </div>
    </motion.button>
  )
}

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<CertEntry | null>(null)

  const certifications = profile.certifications
  const completed = certifications.filter((cert) => cert.status === 'completed')
  const pipeline = certifications.filter((cert) => cert.status === 'in-progress')
  const comptia = completed.find((c) => c.id === 'comptia-security-plus') ?? completed[0]
  const isc2 = completed.find((c) => c.id === 'isc2-cc')

  return (
    <section id="certifications" className="section-bg-alt container-custom relative">
      <div className="pointer-events-none absolute inset-0 deploy-matrix opacity-[0.35]" aria-hidden />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Click any credential to view the full certificate."
          className="text-center"
          align="center"
        />

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {comptia && (
            <FeaturedCertCard cert={comptia} label="CompTIA Security+" onOpen={() => setSelectedCert(comptia)} />
          )}
          {isc2 && (
            <FeaturedCertCard cert={isc2} label="ISC2 CC" onOpen={() => setSelectedCert(isc2)} />
          )}
        </div>

        {pipeline.length > 0 && (
          <div className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-border/50 bg-card/65 p-5 backdrop-blur-sm sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">In progress</p>
            {pipeline.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-xl border border-border/50 bg-background/35 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                      <Lock className="size-4 text-primary" aria-hidden />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{cert.name}</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="font-mono text-[9px] uppercase">
                    incoming
                  </Badge>
                </div>
                <p className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                  <Clock3 className="size-3.5 text-primary/80" aria-hidden />
                  {cert.pipelineNote ?? `Target year: ${cert.year}`}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className={LIGHTBOX_CLASS}>
          {selectedCert?.image && (
            <>
              <DialogHeader className="shrink-0 px-1">
                <DialogTitle className="text-left text-base sm:text-lg">{selectedCert.name}</DialogTitle>
              </DialogHeader>
              <div className="min-h-0 flex-1 overflow-auto rounded-lg border border-border/50 bg-white p-2 sm:p-3">
                <Image
                  src={certImageSrc(selectedCert.image)}
                  alt={selectedCert.name}
                  width={1600}
                  height={1200}
                  className="mx-auto h-auto max-h-[calc(95vh-6rem)] w-full object-contain"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Certifications
