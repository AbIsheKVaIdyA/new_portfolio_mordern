'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const HIGHLIGHTS = [
  { label: 'Full-Stack Engineer', detail: 'M.S. Cybersecurity @ UT Dallas (GPA 3.89)' },
  { label: 'Production Stack', detail: 'React · Next.js 14 · Spring Boot · Supabase · PostgreSQL' },
  { label: 'Recent Work', detail: 'UTD inventory platform · Boeing HR RBAC + SonarQube @ TCS' },
]

type TerminalBlockProps = {
  variant?: 'security' | 'developer'
}

export function TerminalBlock({ variant = 'security' }: TerminalBlockProps) {
  return (
    <Card className="mt-8 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="space-y-3 pt-6 text-sm">
        {HIGHLIGHTS.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <Badge variant="outline" className="w-fit text-xs font-medium">
              {item.label}
            </Badge>
            <p className="text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
