'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { resolveProjectLinks } from '@/lib/project-links'
import type { ProjectEntry } from '@/data/profile'

type ProjectLinkActionsProps = {
  project: ProjectEntry
  size?: 'sm' | 'default'
  className?: string
}

export function ProjectLinkActions({ project, size = 'sm', className }: ProjectLinkActionsProps) {
  const links = resolveProjectLinks(project)

  if (links.showPrivateBadge) {
    return (
      <Badge variant="outline" className={cn('text-[10px] font-normal', className)}>
        Private repo — available on request
      </Badge>
    )
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={cn(buttonVariants({ variant: 'outline', size }), 'gap-1 no-underline')}
        >
          <Github className="size-3.5" /> GitHub
        </a>
      )}
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={cn(buttonVariants({ size }), 'gap-1 no-underline')}
        >
          <ExternalLink className="size-3.5" /> {links.demoLabel}
        </a>
      )}
    </div>
  )
}
