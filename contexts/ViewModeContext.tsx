'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  DEFAULT_VIEW,
  isViewMode,
  VIEW_QUERY_PARAM,
  VIEW_STORAGE_KEY,
  type ViewMode,
} from '@/lib/view-mode'

type ViewModeContextValue = {
  view: ViewMode
  setView: (view: ViewMode) => void
  isTransitioning: boolean
}

const ViewModeContext = createContext<ViewModeContextValue | null>(null)

function readStoredView(): ViewMode {
  if (typeof window === 'undefined') return DEFAULT_VIEW
  try {
    const stored = localStorage.getItem(VIEW_STORAGE_KEY)
    return isViewMode(stored) ? stored : DEFAULT_VIEW
  } catch {
    return DEFAULT_VIEW
  }
}

function readViewFromLocation(): ViewMode {
  if (typeof window === 'undefined') return DEFAULT_VIEW
  const param = new URLSearchParams(window.location.search).get(VIEW_QUERY_PARAM)
  if (param === 'developer') return 'developer'
  if (param === 'security') return 'security'
  return readStoredView()
}

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [view, setViewState] = useState<ViewMode>(DEFAULT_VIEW)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setViewState(readViewFromLocation())
    setHydrated(true)
  }, [])

  const setView = useCallback(
    (next: ViewMode) => {
      setViewState((current) => {
        if (next === current) return current

        setIsTransitioning(true)
        try {
          localStorage.setItem(VIEW_STORAGE_KEY, next)
        } catch {
          /* ignore */
        }

        const params = new URLSearchParams(window.location.search)
        if (next === DEFAULT_VIEW) {
          params.delete(VIEW_QUERY_PARAM)
        } else {
          params.set(VIEW_QUERY_PARAM, next)
        }
        const qs = params.toString()
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })

        window.setTimeout(() => setIsTransitioning(false), 280)
        return next
      })
    },
    [pathname, router]
  )

  const value = useMemo(
    () => ({ view: hydrated ? view : DEFAULT_VIEW, setView, isTransitioning }),
    [view, setView, isTransitioning, hydrated]
  )

  return <ViewModeContext.Provider value={value}>{children}</ViewModeContext.Provider>
}

export function useViewMode() {
  const ctx = useContext(ViewModeContext)
  if (!ctx) throw new Error('useViewMode must be used within ViewModeProvider')
  return ctx
}
