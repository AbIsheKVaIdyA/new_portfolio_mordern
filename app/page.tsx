import { CyberAtmosphere } from '@/components/CyberAtmosphere'
import VerticalNav from '@/components/VerticalNav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import { MediumSection } from '@/components/MediumSection'
import { GitHubPulse } from '@/components/GitHubPulse'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import ActiveProjects from '@/components/ActiveProjects'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="cyber-frame min-h-screen overflow-x-hidden">
      <CyberAtmosphere />
      <VerticalNav />
      <main className="relative z-[2] lg:pl-20">
        <div className="pointer-events-none absolute inset-0 cyber-noise" aria-hidden />
        <div
          className="pointer-events-none sticky top-0 z-20 hidden h-7 items-center justify-end border-b border-primary/15 bg-background/55 px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/85 backdrop-blur-md md:flex"
          aria-hidden
        >
          threat-level: monitored <span className="ml-2 cyber-blink">■</span>
        </div>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <MediumSection />
        <GitHubPulse />
        <Projects />
        <Awards />
        <ActiveProjects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
