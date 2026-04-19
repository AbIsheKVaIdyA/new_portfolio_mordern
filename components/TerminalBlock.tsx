'use client'

import { useEffect, useMemo, useState } from 'react'
import { Terminal } from 'lucide-react'

const LINES = [
  { prompt: 'whoami', out: 'abhishek_vaidya | MS Cybersecurity @ UT Dallas | full-stack' },
  { prompt: 'sec_profile --brief', out: 'React · Next.js · Spring Boot · AWS/Azure · Docker · JWT/OAuth patterns' },
  { prompt: 'certs --pipeline', out: 'Security+ · CC · AWS Sec Specialty & CCP (in progress) · CISSP prep' },
]

export function TerminalBlock() {
  const fullLines = useMemo(() => LINES.map((l) => `$ ${l.prompt} → ${l.out}`), [])

  const [done, setDone] = useState<string[]>([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDone(fullLines)
      setLineIdx(fullLines.length)
      return
    }

    if (lineIdx >= fullLines.length) return

    const text = fullLines[lineIdx]
    if (!text) return

    if (charIdx < text.length) {
      const t = window.setTimeout(() => setCharIdx((c) => c + 1), 14)
      return () => window.clearTimeout(t)
    }

    const t = window.setTimeout(() => {
      setDone((d) => [...d, text])
      setCharIdx(0)
      setLineIdx((i) => i + 1)
    }, 720)
    return () => window.clearTimeout(t)
  }, [fullLines, lineIdx, charIdx])

  const current = lineIdx < fullLines.length ? fullLines[lineIdx] : ''
  const typing = current.slice(0, charIdx)

  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-primary/25 bg-black/50 font-mono text-xs shadow-[0_0_40px_-12px_oklch(0.78_0.14_195/0.35)] backdrop-blur-md sm:text-sm">
      <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-3 py-2">
        <Terminal className="size-3.5 text-primary" aria-hidden />
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">secure_shell — bash</span>
        <span className="ml-auto flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-500/80" />
        </span>
      </div>
      <div className="space-y-2 p-4 text-left leading-relaxed">
        <p className="text-muted-foreground">
          <span className="text-primary">abhishek@portfolio</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-accent-foreground">~</span>
          <span className="text-muted-foreground">$</span>{' '}
          <span className="text-foreground/90">session_init --verify</span>
        </p>
        {done.map((line) => (
          <p key={line.slice(0, 32)} className="text-primary/95">
            {line}
          </p>
        ))}
        {lineIdx < fullLines.length && (
          <p className="text-primary/95">
            {typing}
            <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-primary/90 align-middle" />
          </p>
        )}
      </div>
    </div>
  )
}
