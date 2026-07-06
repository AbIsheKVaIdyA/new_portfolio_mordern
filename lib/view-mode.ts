export const VIEW_MODES = ['developer', 'security'] as const

export type ViewMode = (typeof VIEW_MODES)[number]

export const DEFAULT_VIEW: ViewMode = 'security'

export const VIEW_STORAGE_KEY = 'portfolio-view'

export const VIEW_QUERY_PARAM = 'view'

export function isViewMode(value: string | null | undefined): value is ViewMode {
  return value === 'developer' || value === 'security'
}
