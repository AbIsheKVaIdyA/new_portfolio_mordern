'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: ReactNode
  className?: string
  align?: 'left' | 'center'
  /** Brackets + mono rail — stronger “SOC / terminal” vibe */
  cyber?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'left',
  cyber = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-10 sm:mb-14',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary',
            align === 'center' && 'mx-auto max-w-prose',
            cyber && 'text-primary/90'
          )}
        >
          {cyber ? `┌ ${eyebrow.replace(/^\/\/\s*/, '')} ┐` : eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-2xl font-semibold tracking-tight text-foreground sm:text-3xl',
          align === 'center' && 'mx-auto',
          cyber &&
            'bg-gradient-to-br from-foreground via-foreground to-primary/80 bg-clip-text text-transparent'
        )}
      >
        {cyber ? <span className="font-mono tracking-tight">▸ {title}</span> : title}
      </h2>
      {subtitle && (
        <div
          className={cn(
            'mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </div>
      )}
      {cyber ? (
        <div
          className={cn('mt-6 flex items-center gap-2', align === 'center' && 'mx-auto justify-center')}
          aria-hidden
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
          <span className="h-1.5 w-1.5 animate-pulse border border-primary/50 bg-primary/20" />
          <span className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
        </div>
      ) : (
        <div
          className={cn('mt-6 h-px w-12 bg-gradient-to-r from-primary to-transparent', align === 'center' && 'mx-auto')}
          aria-hidden
        />
      )}
    </motion.div>
  )
}
