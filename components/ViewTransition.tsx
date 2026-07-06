'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useViewMode } from '@/contexts/ViewModeContext'
import type { ReactNode } from 'react'

type ViewTransitionProps = {
  children: ReactNode
  className?: string
}

export function ViewTransition({ children, className }: ViewTransitionProps) {
  const { view } = useViewMode()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={view}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
