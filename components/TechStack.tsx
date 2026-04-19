'use client'

import { motion } from 'framer-motion'

const TechStack = () => {
  const techStack = [
    { name: 'Burp Suite', logo: '🕷️' },
    { name: 'Nmap', logo: '🗺️' },
    { name: 'Linux', logo: '🐧' },
    { name: 'Postman', logo: '📮' },
    { name: 'Penetration testing', logo: '🛡️' },
    { name: 'Network security', logo: '🔒' },
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'TypeScript', logo: '🔷' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'Spring Boot', logo: '🍃' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Azure', logo: '🔵' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '⚓' },
    { name: 'Tailwind CSS', logo: '💨' },
    { name: 'Redis', logo: '🔴' },
    { name: 'GraphQL', logo: '🔺' },
    { name: 'CI/CD', logo: '🔄' },
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-muted/30 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex w-max gap-3 px-4"
        animate={{ x: [0, -2200] }}
        transition={{
          x: { repeat: Infinity, repeatType: 'loop', duration: 55, ease: 'linear' },
        }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-3">
            {techStack.map((tech) => (
              <span
                key={`${dup}-${tech.name}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/40 bg-card/80 px-3 py-1.5 font-mono text-[11px] text-muted-foreground shadow-sm backdrop-blur-sm"
              >
                <span aria-hidden>{tech.logo}</span>
                {tech.name}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default TechStack
