'use client'

import type { ReactNode } from 'react'
import { useCallback, useRef, useState } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'

type TiltCardProps = {
  children: ReactNode
  className?: string
  intensity?: number
}

/**
 * Mouse-reactive 3D tilt + spotlight follow (no useMotionTemplate — FM v10 compatible).
 */
export function TiltCard({ children, className = '', intensity = 9 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), {
    stiffness: 260,
    damping: 35,
  })
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), {
    stiffness: 260,
    damping: 35,
  })

  const [glow, setGlow] = useState('radial-gradient(circle at 50% 50%, oklch(0.78 0.14 195 / 0.12), transparent 55%)')

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return
      const r = ref.current.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      x.set(px)
      y.set(py)
      const gx = px * 100
      const gy = py * 100
      setGlow(
        `radial-gradient(circle at ${gx}% ${gy}%, oklch(0.78 0.14 195 / 0.16), transparent 52%)`
      )
    },
    [x, y]
  )

  const handleLeave = useCallback(() => {
    x.set(0.5)
    y.set(0.5)
    setGlow('radial-gradient(circle at 50% 50%, oklch(0.78 0.14 195 / 0.12), transparent 55%)')
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      className={`[perspective:1200px] ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative h-full overflow-hidden rounded-xl [transform-style:preserve-3d]">
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-xl transition-[background] duration-100"
          style={{ background: glow }}
        />
        <div className="relative z-[1] h-full [transform:translateZ(18px)]">{children}</div>
      </div>
    </motion.div>
  )
}
