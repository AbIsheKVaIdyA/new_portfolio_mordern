'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { useViewMode } from '@/contexts/ViewModeContext'

const studio = profile.activeProjects[0]

const ActiveProjects = () => {
  const { view } = useViewMode()

  return (
    <section id="active-projects" className="section-bg container-custom">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Studio"
          title="Pixelora"
          subtitle="My product studio — client software, restaurant systems, and full-stack builds shipped to production."
          className="text-center"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href={studio.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'inline-flex gap-2 rounded-full no-underline transition-transform hover:scale-[1.02]',
              view === 'developer' && 'border-violet-200 hover:bg-violet-50'
            )}
          >
            Visit pixelora.org
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ActiveProjects
