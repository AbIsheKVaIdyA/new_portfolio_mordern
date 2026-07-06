'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useViewMode } from '@/contexts/ViewModeContext'
import { DeveloperHero } from '@/components/hero/DeveloperHero'
import { SecurityHero } from '@/components/hero/SecurityHero'

const Hero = () => {
  const { view } = useViewMode()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={view}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {view === 'developer' ? <DeveloperHero /> : <SecurityHero />}
      </motion.div>
    </AnimatePresence>
  )
}

export default Hero
