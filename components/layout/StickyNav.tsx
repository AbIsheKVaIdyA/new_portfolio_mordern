'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Download, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useViewMode } from '@/contexts/ViewModeContext'
import { getResumeForView } from '@/lib/profile-helpers'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const NAV = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Blog', href: '#writing' },
  { label: 'Contact', href: '#contact' },
] as const

export function StickyNav() {
  const { view } = useViewMode()
  const isSecurity = view === 'security'
  const resumeUrl = getResumeForView(view)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 transition-all duration-500',
          scrolled
            ? isSecurity
              ? 'border-b border-border/50 bg-background/75 shadow-lg shadow-black/20 backdrop-blur-xl'
              : 'border-b border-black/[0.06] bg-white/75 shadow-sm backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 py-3 sm:justify-center sm:px-6">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm transition-colors',
                  isSecurity
                    ? 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download={view === 'developer' ? 'Abhishek_Vaidya_Developer.pdf' : 'Abhishek_Vaidya_Security.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'sm' }),
                'ml-2 gap-1.5 rounded-full no-underline',
                !isSecurity && 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500'
              )}
            >
              <Download className="size-3.5" />
              Resume
            </a>
          </nav>

          <button
            type="button"
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-lg border lg:hidden',
              isSecurity ? 'border-border/60' : 'border-neutral-200'
            )}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="ml-auto flex h-full w-[min(100%,320px)] flex-col bg-background p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold">Menu</span>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={resumeUrl}
                  download={view === 'developer' ? 'Abhishek_Vaidya_Developer.pdf' : 'Abhishek_Vaidya_Security.pdf'}
                  className="mt-4 rounded-lg bg-primary px-3 py-3 text-center text-sm font-medium text-primary-foreground"
                >
                  Download Resume
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
