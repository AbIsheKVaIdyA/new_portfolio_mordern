'use client'

import { useEffect, useState } from 'react'
import {
  Home,
  User,
  Code,
  Briefcase,
  BookOpen,
  Github,
  FolderOpen,
  Trophy,
  Rocket,
  Award,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const NAV_ITEMS = [
  { name: 'Home', href: '#home', id: 'home', icon: Home },
  { name: 'About', href: '#about', id: 'about', icon: User },
  { name: 'Skills', href: '#skills', id: 'skills', icon: Code },
  { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
  { name: 'Blog', href: '#writing', id: 'writing', icon: BookOpen },
  { name: 'GitHub', href: '#github-pulse', id: 'github-pulse', icon: Github },
  { name: 'Projects', href: '#projects', id: 'projects', icon: FolderOpen },
  { name: 'Awards', href: '#awards', id: 'awards', icon: Trophy },
  { name: 'Active', href: '#active-projects', id: 'active-projects', icon: Rocket },
  { name: 'Certs', href: '#certifications', id: 'certifications', icon: Award },
  { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
] as const

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => n.id)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavLink = ({
    item,
    onNavigate,
  }: {
    item: (typeof NAV_ITEMS)[number]
    onNavigate?: () => void
  }) => {
    const active = activeSection === item.id
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className={cn(
          'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
          active
            ? 'bg-primary/15 text-primary'
            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
        )}
      >
        <item.icon
          className={cn('size-4 shrink-0 transition-transform', active && 'text-primary')}
          aria-hidden
        />
        <span className="font-medium">{item.name}</span>
        {active && (
          <motion.span
            layoutId="nav-active"
            className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </a>
    )
  }

  return (
    <>
      {/* Desktop — Brittany-style rail */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[min(100%,280px)] flex-col justify-between border-r border-border/60 bg-background/80 px-8 py-10 backdrop-blur-xl lg:flex">
        <div>
          <a href="#home" className="block">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Portfolio</p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">Abhishek Vaidya</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Cybersecurity · Full Stack
            </p>
          </a>
          <Separator className="my-8 bg-border/60" />
          <nav className="flex flex-col gap-0.5" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </nav>
        </div>
        <div className="font-mono text-[10px] leading-relaxed text-muted-foreground/80">
          <span className="text-primary">●</span> system ready
        </div>
      </aside>

      {/* Mobile header */}
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-border/60 bg-background/85 px-4 py-3 backdrop-blur-xl lg:hidden">
        <a href="#home" className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">Abhishek Vaidya</p>
          <p className="truncate font-mono text-[10px] uppercase tracking-wider text-primary">
            Cybersecurity · Full Stack
          </p>
        </a>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="shrink-0 border-border/80"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-label="Open menu"
        >
          <Menu className="size-4" />
        </Button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="ml-auto flex h-full w-[min(100%,320px)] flex-col border-l border-border/60 bg-card p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">Navigate</p>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="size-4" />
                </Button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Mobile primary">
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.id} item={item} onNavigate={() => setMobileOpen(false)} />
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
