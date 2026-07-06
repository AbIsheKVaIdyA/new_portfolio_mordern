'use client'

import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CaseStudySectionProps = {
  label: string
  defaultOpen?: boolean
  children: ReactNode
  variant?: 'security' | 'developer'
}

export function CaseStudySection({
  label,
  defaultOpen = false,
  children,
  variant = 'security',
}: CaseStudySectionProps) {
  const [open, setOpen] = useState(defaultOpen)
  const isDev = variant === 'developer'

  return (
    <div
      className={cn(
        'rounded-lg border',
        isDev ? 'border-neutral-200/80' : 'border-border/60'
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium transition-colors',
          isDev ? 'hover:bg-violet-50/60' : 'hover:bg-muted/40'
        )}
        aria-expanded={open}
      >
        {label}
        <ChevronRight
          className={cn(
            'size-4 shrink-0 text-muted-foreground transition-transform duration-200',
            open && 'rotate-90'
          )}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/40 px-4 py-3 text-sm text-muted-foreground">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function CaseStudyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
