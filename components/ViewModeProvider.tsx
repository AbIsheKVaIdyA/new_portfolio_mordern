'use client'

import { ViewModeProvider } from '@/contexts/ViewModeContext'
import { ViewModeThemeSync } from '@/components/layout/ViewModeThemeSync'
import type { ReactNode } from 'react'

export function AppViewModeProvider({ children }: { children: ReactNode }) {
  return (
    <ViewModeProvider>
      <ViewModeThemeSync />
      {children}
    </ViewModeProvider>
  )
}
