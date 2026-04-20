'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, CheckCircle, Clock3, Lock, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null)

  const certImageSrc = (path: string) => {
    if (!path) return ''
    const parts = path.split('/')
    const file = parts[parts.length - 1]
    return `${parts.slice(0, -1).join('/')}/${encodeURIComponent(file)}`
  }

  const certifications = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2025',
      status: 'completed' as const,
      credentialId: null as string | null,
      image: '/CompTIA Security+ ce certificate-1.png',
      link: '#',
      clearance: 'L2 — VALIDATED',
    },
    {
      name: 'ISC2 Certified in Cybersecurity',
      issuer: 'ISC2',
      year: '2025',
      status: 'completed' as const,
      credentialId: null,
      image: '/digitalcert.jpg',
      link: '#',
      clearance: 'L2 — VALIDATED',
    },
    {
      name: 'AWS Security Specialty',
      issuer: 'Amazon Web Services',
      year: '2025',
      status: 'in-progress' as const,
      credentialId: null,
      image: null as string | null,
      link: '#',
      clearance: 'PIPELINE',
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2025',
      status: 'in-progress' as const,
      credentialId: null,
      image: null,
      link: '#',
      clearance: 'PIPELINE',
    },
  ]

  const completed = certifications.filter((cert) => cert.status === 'completed')
  const pipeline = certifications.filter((cert) => cert.status === 'in-progress')

  return (
    <section id="certifications" className="section-bg-alt container-custom relative">
      <div className="pointer-events-none absolute inset-0 deploy-matrix opacity-[0.35]" aria-hidden />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="// vault.credentials"
          title="Credential vault"
          subtitle="Encrypted-style presentation — click completed artifacts to verify imagery (client-side viewer)."
          className="text-center"
          align="center"
          cyber
        />

        <div className="mb-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => completed[0]?.image && setSelectedCert(completed[0])}
            className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-card/85 text-left shadow-[0_0_60px_-26px_oklch(0.78_0.14_195/0.5)] backdrop-blur-sm transition hover:border-primary/45"
          >
            <div className="absolute left-4 top-4 z-10">
              <Badge className="border-primary/40 bg-background/80 font-mono text-[10px] uppercase tracking-wider text-primary">
                featured credential
              </Badge>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-primary/15 bg-muted/40">
              {completed[0]?.image ? (
                <Image
                  src={certImageSrc(completed[0].image)}
                  alt={completed[0].name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              ) : null}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="space-y-3 p-5 sm:p-6">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">{completed[0]?.name}</h3>
              <p className="font-mono text-xs text-muted-foreground">
                {completed[0]?.issuer} · {completed[0]?.year}
              </p>
              <p className="inline-flex items-center gap-2 font-mono text-xs text-primary">
                <CheckCircle className="size-3.5" aria-hidden />
                Open full credential artifact
              </p>
            </div>
          </motion.button>

          <div className="space-y-4 rounded-2xl border border-border/50 bg-card/65 p-5 backdrop-blur-sm sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">certification pipeline</p>
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
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{cert.name}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <Badge variant="secondary" className="font-mono text-[9px] uppercase">
                    queued
                  </Badge>
                </div>
                <p className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                  <Clock3 className="size-3.5 text-primary/80" aria-hidden />
                  Target year: {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {completed.slice(1).map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <button
                type="button"
                disabled={!cert.image}
                onClick={() => cert.image && setSelectedCert(cert)}
                className={cn(
                  'cert-vault-card group relative w-full rounded-2xl border border-border/40 bg-card/80 text-left shadow-[0_0_50px_-24px_oklch(0.78_0.14_195/0.45)] backdrop-blur-md transition',
                  cert.image && 'cursor-pointer hover:border-primary/40 hover:shadow-[0_0_60px_-20px_oklch(0.78_0.14_195/0.55)]',
                  !cert.image && 'cursor-default opacity-95'
                )}
              >
                <div className="cert-vault-scan rounded-2xl" />
                <div className="relative p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                        <Lock className="size-5 text-primary" aria-hidden />
                      </div>
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary/90">
                          {cert.clearance}
                        </p>
                        <h3 className="mt-1 text-base font-semibold leading-snug text-foreground sm:text-lg">
                          {cert.name}
                        </h3>
                      </div>
                    </div>
                    <Badge
                      variant={cert.status === 'completed' ? 'default' : 'secondary'}
                      className="shrink-0 font-mono text-[9px] uppercase"
                    >
                      {cert.status === 'completed' ? 'sealed' : 'queued'}
                    </Badge>
                  </div>

                  {cert.image && (
                    <div className="relative mt-4 h-36 overflow-hidden rounded-xl border border-primary/15 bg-muted/50 sm:h-40">
                      <Image
                        src={certImageSrc(cert.image)}
                        alt={cert.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded border border-primary/30 bg-background/80 px-2 py-0.5 font-mono text-[9px] text-primary">
                        <ShieldCheck className="size-3" aria-hidden />
                        preview
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/40 pt-4">
                    <Award className="size-4 text-muted-foreground" aria-hidden />
                    <span className="font-mono text-xs text-muted-foreground">
                      {cert.issuer} · {cert.year}
                    </span>
                  </div>

                  {cert.status === 'completed' && cert.image && (
                    <p className="mt-3 flex items-center gap-2 font-mono text-[11px] text-primary">
                      <CheckCircle className="size-3.5" aria-hidden />
                      Authenticate — open full credential
                    </p>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-3xl border-primary/30 bg-card p-2 shadow-[0_0_80px_-30px_oklch(0.78_0.14_195/0.5)] sm:p-4">
          {selectedCert?.image && (
            <>
              <DialogHeader className="px-2 pt-2">
                <DialogTitle className="text-left font-mono">
                  <span className="text-primary">vault://</span>
                  {selectedCert.name}
                </DialogTitle>
              </DialogHeader>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg border border-border/50 bg-white p-2 shadow-inner"
              >
                <Image
                  src={certImageSrc(selectedCert.image)}
                  alt={selectedCert.name}
                  width={1400}
                  height={990}
                  className="max-h-[85vh] w-full object-contain"
                />
              </motion.div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Certifications
