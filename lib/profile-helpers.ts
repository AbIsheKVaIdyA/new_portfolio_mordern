import { profile, type Profile, type ProjectEntry, type TaggedBullet } from '@/data/profile'
import type { ViewMode } from '@/lib/view-mode'

export function getBulletsForView(bullets: readonly TaggedBullet[], view: ViewMode): TaggedBullet[] {
  return bullets.filter((b) => b.tag === 'both' || b.tag === view)
}

export function getHeroForView(view: ViewMode) {
  return {
    ...profile.hero[view],
    stats: profile.hero.stats,
  }
}

export function getEducationEntries() {
  return profile.experience.filter((e) => e.type === 'education')
}

export function getProjectCaseStudy(project: ProjectEntry) {
  if (project.caseStudy) return project.caseStudy

  const isSecurityHeavy = ['THREAT INTEL', 'COMPLIANCE', 'RBAC + AUTH'].includes(project.posture)

  return {
    overview: project.description,
    problem: isSecurityHeavy
      ? `Deliver ${project.title.toLowerCase()} with strong security posture and operational visibility.`
      : `Build a production-grade ${project.title.toLowerCase()} with scalable architecture and reliable user experience.`,
    solution: project.description,
    architecture: `${project.stack.slice(0, 4).join(' + ')} architecture with modular services and clear data boundaries.`,
    architectureLayers: project.stack.slice(0, 5),
    keyFeatures: project.stack.slice(0, 4),
    challenges: [
      'Balancing feature velocity with reliability and maintainability.',
      'Designing secure data flows across frontend, API, and persistence layers.',
    ],
    securityConsiderations: isSecurityHeavy
      ? [project.posture, project.clearance, 'OWASP-aligned controls', 'Least-privilege access patterns']
      : ['Input validation', 'Authentication/session hygiene', 'Secure API design', project.posture],
    metrics:
      project.id === 'utd-learning-platform'
        ? [
            '70% faster publishing',
            '60% faster loads',
            'Hardened auth flow and input validation against OWASP Top 10',
          ]
        : project.id === 'walmart-ecommerce'
          ? ['16 vulnerabilities closed pre-launch', 'OWASP Top 10 controls implemented']
          : ['Production-ready deployment', 'Documented architecture'],
    lessonsLearned: [
      'Security and delivery quality improve when validation is automated early in CI/CD.',
      'Clear module boundaries reduce regression risk as features scale.',
    ],
    categories: (isSecurityHeavy
      ? ['security', 'fullstack', 'cloud']
      : ['developer', 'fullstack', 'cloud']) as Array<
      'developer' | 'security' | 'cloud' | 'ai' | 'fullstack'
    >,
  }
}

export function getSkillsLayout(view: ViewMode) {
  return profile.skills.viewLayout[view]
}

export function getProjectsForView(view: ViewMode) {
  return [...profile.projects].sort((a, b) => a.sortOrder[view] - b.sortOrder[view])
}

export function getFeaturedExperience() {
  return profile.experience.find((e) => e.featured) ?? profile.experience[0]
}

export function getResumeForView(view: ViewMode) {
  return view === 'developer'
    ? profile.identity.links.resumeDeveloper
    : profile.identity.links.resumeSecurity
}

export function getTimelineExperience() {
  const featured = getFeaturedExperience()
  return profile.experience.filter((e) => e.id !== featured.id && e.type === 'work')
}

export function getSectionCopy(
  section: keyof Profile['sections'],
  view: ViewMode
): { eyebrow: string; title: string; subtitle: string } {
  const s = profile.sections[section]
  return {
    eyebrow: s.eyebrow,
    title: s.title,
    subtitle: s.subtitle[view],
  }
}

export { profile }
