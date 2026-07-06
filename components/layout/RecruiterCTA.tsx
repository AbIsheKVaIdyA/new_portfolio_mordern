'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Download, Github, Linkedin, Mail, MapPin, X } from 'lucide-react'
import { profile } from '@/data/profile'
import { useViewMode } from '@/contexts/ViewModeContext'
import { getResumeForView } from '@/lib/profile-helpers'
import { cn } from '@/lib/utils'

export function RecruiterCTA() {
  const { view } = useViewMode()
  const [expanded, setExpanded] = useState(true)
  const { recruiter, identity } = profile
  const resumeUrl = getResumeForView(view)

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[min(100vw-2rem,24rem)] flex-col items-end gap-2">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className={cn(
              'w-full rounded-2xl border p-5 shadow-2xl backdrop-blur-xl',
              view === 'security'
                ? 'border-primary/25 bg-card/95'
                : 'border-black/[0.08] bg-white/95'
            )}
          >
            <div className="mb-4 flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {recruiter.headline}
                </p>
                <p className="mt-1 text-sm font-semibold">{identity.name}</p>
              </div>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted"
                aria-label="Minimize recruiter panel"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <p className="mb-1.5 font-medium text-foreground">Available for</p>
                <ul className="space-y-1 text-muted-foreground">
                  {recruiter.availability.map((role) => (
                    <li key={role} className="flex gap-2">
                      <span className="text-primary">▹</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-2 rounded-lg border border-border/50 bg-muted/20 p-3">
                <p className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <span className="font-medium text-foreground">Location</span>
                    <br />
                    {recruiter.location}
                  </span>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Work authorization</span>
                  <br />
                  {recruiter.workAuthorization}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Education</span>
                  <br />
                  {recruiter.education}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Certification</span>
                  <br />
                  {recruiter.certification}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Experience</span>
                  <br />
                  {recruiter.experience}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={resumeUrl}
                download={
                  view === 'developer'
                    ? 'Abhishek_Vaidya_Developer.pdf'
                    : 'Abhishek_Vaidya_Security.pdf'
                }
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Download className="size-3.5" />
                Resume
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors hover:bg-muted/50"
              >
                <Mail className="size-3.5" />
                Email
              </a>
              <a
                href={identity.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors hover:bg-muted/50"
              >
                <Linkedin className="size-3.5" />
                LinkedIn
              </a>
              <a
                href={identity.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors hover:bg-muted/50"
              >
                <Github className="size-3.5" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold shadow-lg transition-transform hover:scale-[1.02]',
            view === 'security'
              ? 'bg-primary text-primary-foreground'
              : 'bg-gradient-to-r from-violet-600 to-blue-600 text-white'
          )}
        >
          <ChevronUp className="size-4" />
          {recruiter.headline}
        </button>
      )}
    </div>
  )
}
