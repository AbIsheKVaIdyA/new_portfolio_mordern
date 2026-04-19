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
    <div className="min-h-screen overflow-x-hidden">
      <CyberAtmosphere />
      <VerticalNav />
      <main className="relative z-[2] lg:pl-[min(280px,100%)]">
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
