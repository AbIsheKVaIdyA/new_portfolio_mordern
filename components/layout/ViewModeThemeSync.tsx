'use client'

import { useEffect } from 'react'
import { useViewMode } from '@/contexts/ViewModeContext'

export function ViewModeThemeSync() {
  const { view } = useViewMode()

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-view', view)
    if (view === 'security') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [view])

  return null
}
