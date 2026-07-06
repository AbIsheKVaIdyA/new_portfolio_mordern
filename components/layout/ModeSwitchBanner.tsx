'use client'

import { motion } from 'framer-motion'
import { Code2, Shield } from 'lucide-react'
import { useViewMode } from '@/contexts/ViewModeContext'
import { cn } from '@/lib/utils'

export function ModeSwitchBanner() {
  const { view, setView } = useViewMode()
  const isSecurity = view === 'security'

  return (
    <div
      className={cn(
        'relative z-50 border-b transition-colors duration-500',
        isSecurity
          ? 'border-border/40 bg-background/90'
          : 'border-black/[0.06] bg-white/80 backdrop-blur-xl'
      )}
    >
      <div className="mx-auto flex max-w-7xl justify-center px-4 py-3 sm:px-6">
        <div
          className={cn(
            'relative flex rounded-full p-1 transition-colors duration-500',
            isSecurity ? 'bg-secondary/80' : 'bg-neutral-100 shadow-inner'
          )}
          role="tablist"
          aria-label="Portfolio identity mode"
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            className={cn(
              'absolute inset-y-1 w-[calc(50%-4px)] rounded-full',
              isSecurity
                ? 'bg-primary/20 shadow-[0_0_24px_-4px_oklch(0.78_0.14_195/0.5)]'
                : 'bg-white shadow-md'
            )}
            style={{ left: isSecurity ? 'calc(50% + 2px)' : '4px' }}
          />
          <button
            type="button"
            role="tab"
            aria-selected={!isSecurity}
            onClick={() => setView('developer')}
            className={cn(
              'relative z-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors sm:px-5 sm:text-sm',
              !isSecurity ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Code2 className="size-3.5" aria-hidden />
            Developer
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isSecurity}
            onClick={() => setView('security')}
            className={cn(
              'relative z-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors sm:px-5 sm:text-sm',
              isSecurity ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Shield className="size-3.5" aria-hidden />
            Security
          </button>
        </div>
      </div>
    </div>
  )
}
