'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Download, Github, Linkedin, Mail, X } from 'lucide-react'
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
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[min(100vw-2rem,22rem)] flex-col items-end gap-2">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            className={cn(
              'w-full rounded-2xl border p-4 shadow-2xl backdrop-blur-xl',
              view === 'security'
                ? 'border-primary/25 bg-card/95'
                : 'border-black/[0.08] bg-white/95'
            )}
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {recruiter.headline}
                </p>
                <p className="mt-1 text-sm font-semibold">{identity.name}</p>
              </div>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="rounded-md p-1 text-muted-foreground hover:bg-muted"
                aria-label="Minimize recruiter panel"
              >
                <X className="size-4" />
              </button>
            </div>

            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {recruiter.credentials.map((c) => (
                <li key={c}>• {c}</li>
              ))}
              <li>• {recruiter.location}</li>
              <li>• {recruiter.workAuthorization}</li>
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={resumeUrl}
                download={view === 'developer' ? 'Abhishek_Vaidya_Developer.pdf' : 'Abhishek_Vaidya_Security.pdf'}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground"
              >
                <Download className="size-3.5" />
                Resume
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium"
              >
                <Mail className="size-3.5" />
                Email
              </a>
              <a
                href={identity.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium"
              >
                <Linkedin className="size-3.5" />
                LinkedIn
              </a>
              <a
                href={identity.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium"
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
            'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold shadow-lg',
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
