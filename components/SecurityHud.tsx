'use client'

import { Activity, Fingerprint, Lock, Radar, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Shield, label: 'Defense in depth', state: 'HARDENED' },
  { icon: Lock, label: 'Auth & sessions', state: 'VERIFIED' },
  { icon: Radar, label: 'Attack surface', state: 'MAPPED' },
  { icon: Fingerprint, label: 'Identity', state: 'ZERO TRUST' },
  { icon: Activity, label: 'Posture', state: 'MONITORING' },
] as const

export function SecurityHud() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.5 }}
      className="mt-8 flex flex-wrap gap-2 border border-primary/20 bg-background/40 px-3 py-2 font-mono text-[10px] backdrop-blur-md sm:gap-3 sm:text-[11px]"
    >
      <span className="text-primary/80">[ SOC_VIEW ]</span>
      <span className="hidden text-muted-foreground sm:inline">|</span>
      {items.map(({ icon: Icon, label, state }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 rounded border border-border/50 bg-card/50 px-2 py-1 text-muted-foreground"
        >
          <Icon className="size-3 shrink-0 text-primary" aria-hidden />
          <span className="hidden sm:inline">{label}</span>
          <span className="text-primary">{state}</span>
        </span>
      ))}
    </motion.div>
  )
}
