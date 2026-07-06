import { ModeSwitchBanner } from '@/components/layout/ModeSwitchBanner'
import { StickyNav } from '@/components/layout/StickyNav'
import { RecruiterCTA } from '@/components/layout/RecruiterCTA'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import { MediumSection } from '@/components/MediumSection'
import { GitHubSection } from '@/components/GitHubSection'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import ActiveProjects from '@/components/ActiveProjects'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-500">
      <ModeSwitchBanner />
      <StickyNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <GitHubSection />
        <MediumSection />
        <Awards />
        <ActiveProjects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
      <RecruiterCTA />
    </div>
  )
}
