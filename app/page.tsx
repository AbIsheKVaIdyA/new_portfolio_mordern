import VerticalNav from '@/components/VerticalNav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import ActiveProjects from '@/components/ActiveProjects'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <VerticalNav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <ActiveProjects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}

