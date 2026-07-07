import type { ProjectEntry } from '@/data/profile'

const GITHUB_PROFILE = 'https://github.com/AbIsheKVaIdyA'
const MEDIUM_PROFILE = 'https://medium.com/@abhishekcv.us'

export function isPlaceholderUrl(url?: string): boolean {
  if (!url?.trim()) return true
  return url === '#' || /TODO/i.test(url)
}

export function isGithubProfileRoot(url?: string): boolean {
  if (!url?.trim()) return true
  return url.replace(/\/$/, '') === GITHUB_PROFILE
}

export function isMediumProfileRoot(url?: string): boolean {
  if (!url?.trim()) return true
  return url.replace(/\/$/, '') === MEDIUM_PROFILE
}

function isValidProjectUrl(url?: string): boolean {
  if (isPlaceholderUrl(url)) return false
  if (isGithubProfileRoot(url)) return false
  if (isMediumProfileRoot(url)) return false
  return true
}

export type ResolvedProjectLinks = {
  github: string | null
  demo: string | null
  demoLabel: string
  showPrivateBadge: boolean
}

export function resolveProjectLinks(project: ProjectEntry): ResolvedProjectLinks {
  const github = isValidProjectUrl(project.github) ? project.github! : null
  const demo = isValidProjectUrl(project.demo) ? project.demo! : null

  const showPrivateBadge = project.privateRepo === true || (!github && !demo)

  return {
    github,
    demo,
    demoLabel: project.demoLabel ?? 'Demo',
    showPrivateBadge,
  }
}
