'use client'

import { useEffect, useMemo, useState } from 'react'
import { Terminal } from 'lucide-react'

const LINES = [
  { prompt: 'whoami', out: 'abhishek_vaidya | full-stack engineer · M.S. Cybersecurity @ UT Dallas' },
  { prompt: 'stack --prod', out: 'React · Next.js 14 · Spring Boot · Firebase · Docker · PostgreSQL' },
  { prompt: 'recent_ship', out: 'UTD learning platform (university-wide) · Boeing HR rebuild @ TCS' },
]

type TerminalBlockProps = {
  variant?: 'security' | 'developer'
}

export function TerminalBlock({ variant = 'security' }: TerminalBlockProps) {
  const isDev = variant === 'developer'
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
    <div
      className={
        isDev
          ? 'mt-8 overflow-hidden rounded-xl border border-violet-200/80 bg-white/80 font-mono text-xs shadow-lg shadow-violet-500/10 backdrop-blur-md sm:text-sm'
          : 'mt-8 overflow-hidden rounded-xl border border-primary/25 bg-black/50 font-mono text-xs shadow-[0_0_40px_-12px_oklch(0.78_0.14_195/0.35)] backdrop-blur-md sm:text-sm'
      }
    >
      <div
        className={
          isDev
            ? 'flex items-center gap-2 border-b border-violet-100 bg-violet-50/80 px-3 py-2'
            : 'flex items-center gap-2 border-b border-border/50 bg-muted/30 px-3 py-2'
        }
      >
        <Terminal className={isDev ? 'size-3.5 text-violet-600' : 'size-3.5 text-primary'} aria-hidden />
        <span className={isDev ? 'text-[10px] uppercase tracking-widest text-neutral-500' : 'text-[10px] uppercase tracking-widest text-muted-foreground'}>
          dev_shell — bash
        </span>
        <span className="ml-auto flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-500/80" />
        </span>
      </div>
      <div className="space-y-2 p-4 text-left leading-relaxed">
        <p className={isDev ? 'text-neutral-500' : 'text-muted-foreground'}>
          <span className={isDev ? 'text-violet-600' : 'text-primary'}>abhishek@portfolio</span>
          <span className={isDev ? 'text-neutral-400' : 'text-muted-foreground'}>:</span>
          <span className={isDev ? 'text-blue-600' : 'text-accent-foreground'}>~</span>
          <span className={isDev ? 'text-neutral-400' : 'text-muted-foreground'}>$</span>{' '}
          <span className={isDev ? 'text-neutral-800' : 'text-foreground/90'}>session_init --verify</span>
        </p>
        {done.map((line) => (
          <p key={line.slice(0, 32)} className={isDev ? 'text-violet-700' : 'text-primary/95'}>
            {line}
          </p>
        ))}
        {lineIdx < fullLines.length && (
          <p className={isDev ? 'text-violet-700' : 'text-primary/95'}>
            {typing}
            <span
              className={
                isDev
                  ? 'ml-0.5 inline-block h-4 w-2 animate-pulse bg-violet-500 align-middle'
                  : 'ml-0.5 inline-block h-4 w-2 animate-pulse bg-primary/90 align-middle'
              }
            />
          </p>
        )}
      </div>
    </div>
  )
}
