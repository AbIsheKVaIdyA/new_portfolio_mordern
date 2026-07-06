'use client'

import { Code2, Shield } from 'lucide-react'
import { useViewMode } from '@/contexts/ViewModeContext'
import { cn } from '@/lib/utils'
import type { ViewMode } from '@/lib/view-mode'

const OPTIONS: { value: ViewMode; label: string; short: string; icon: typeof Code2 }[] = [
  { value: 'developer', label: 'Developer View', short: 'Dev', icon: Code2 },
  { value: 'security', label: 'Security View', short: 'Sec', icon: Shield },
]

type ViewModeToggleProps = {
  compact?: boolean
  vertical?: boolean
  className?: string
}

export function ViewModeToggle({ compact = false, vertical = false, className }: ViewModeToggleProps) {
  const { view, setView } = useViewMode()

  return (
    <div
      role="group"
      aria-label="Portfolio view mode"
      className={cn(
        'inline-flex rounded-full border border-primary/25 bg-background/80 p-0.5 shadow-[0_0_20px_-8px_oklch(0.78_0.14_195/0.45)] backdrop-blur-sm',
        vertical && 'flex-col rounded-xl',
        className
      )}
    >
      {OPTIONS.map((opt) => {
        const active = view === opt.value
        const Icon = opt.icon
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setView(opt.value)}
            aria-pressed={active}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider transition-all duration-200 sm:px-3 sm:text-[10px]',
              active
                ? 'bg-primary/20 text-primary shadow-[inset_0_0_0_1px_oklch(0.78_0.14_195/0.35)]'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Icon className="size-3 shrink-0" aria-hidden />
            {compact ? opt.short : opt.label}
          </button>
        )
      })}
    </div>
  )
}
