'use client'

/**
 * Subtle full-viewport layers: scanlines + vignette + slow drift.
 * pointer-events-none so it never blocks interaction.
 */
export function CyberAtmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_20%,transparent_40%,oklch(0.06_0.04_260/0.85)_100%)]" />
      {/* Animated scanlines */}
      <div className="cyber-scanlines absolute inset-0 opacity-[0.45]" />
      {/* Hex mesh — very low contrast */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300e5ff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41h2v-6.35L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2zM0 41.41l12.98 7.5V49H28v-6.35L0 35.81v2.3zm27.99-25.03h-.01L17 6.35V0h2v7.5l12.99 7.5h-.01v2.33z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Corner accents */}
      <div className="absolute left-0 top-0 h-24 w-24 border-l border-t border-primary/15 lg:left-[280px]" />
      <div className="absolute bottom-0 right-0 h-24 w-24 border-b border-r border-primary/15" />
    </div>
  )
}
