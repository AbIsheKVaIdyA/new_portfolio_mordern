'use client'

const TechStack = () => {
  const engineering = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Spring Boot',
    'PostgreSQL',
    'AWS',
    'Docker',
    'CI/CD',
    'Git',
    'Supabase',
    'REST APIs',
  ]

  const security = [
    'RBAC',
    'OWASP Top 10',
    'SonarQube',
    'Burp Suite',
    'OWASP ZAP',
    'SIEM',
    'Wireshark',
    'Nmap',
    'Zero Trust',
    'HIPAA',
    'Threat Detection',
    'Vulnerability Assessment',
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">Engineering</h3>
        <div className="flex flex-wrap gap-2">
          {engineering.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md border border-border/40 bg-card/80 px-2.5 py-1 text-xs text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">Security</h3>
        <div className="flex flex-wrap gap-2">
          {security.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md border border-border/40 bg-card/80 px-2.5 py-1 text-xs text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
