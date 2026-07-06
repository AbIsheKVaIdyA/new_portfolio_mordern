'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type ArchitectureDiagramProps = {
  layers: string[]
  variant?: 'security' | 'developer'
  className?: string
}

export function ArchitectureDiagram({
  layers,
  variant = 'security',
  className,
}: ArchitectureDiagramProps) {
  if (layers.length === 0) return null

  const isDev = variant === 'developer'

  return (
    <div
      className={cn(
        'rounded-xl border p-4 sm:p-5',
        isDev ? 'border-violet-200/80 bg-violet-50/40' : 'border-primary/20 bg-primary/[0.04]',
        className
      )}
      role="img"
      aria-label={`Architecture: ${layers.join(' to ')}`}
    >
      <p
        className={cn(
          'mb-4 font-mono text-[10px] uppercase tracking-[0.2em]',
          isDev ? 'text-violet-600' : 'text-primary'
        )}
      >
        System flow
      </p>
      <div className="flex flex-col items-center gap-0">
        {layers.map((layer, index) => (
          <div key={`${layer}-${index}`} className="flex w-full max-w-xs flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              className={cn(
                'w-full rounded-lg border px-4 py-2.5 text-center text-xs font-medium shadow-sm transition-shadow hover:shadow-md sm:text-sm',
                isDev
                  ? 'border-violet-200/80 bg-white text-neutral-800'
                  : 'border-primary/25 bg-card/80 text-foreground'
              )}
            >
              {layer}
            </motion.div>
            {index < layers.length - 1 && (
              <ChevronDown
                className={cn(
                  'my-1 size-4 shrink-0',
                  isDev ? 'text-violet-400' : 'text-primary/50'
                )}
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
