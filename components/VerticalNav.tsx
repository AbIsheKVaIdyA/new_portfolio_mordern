'use client'

import { useState, useEffect } from 'react'
import { Home, User, Code, Briefcase, FolderOpen, Award, Mail } from 'lucide-react'

const VerticalNav = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 200
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Code },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderOpen },
    { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full p-2">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                title={item.name}
              >
                <item.icon size={18} className="sm:w-5 sm:h-5" />
                
                {/* Tooltip */}
                <div className="absolute left-14 sm:left-16 bg-gray-800 text-white text-xs sm:text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {item.name}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-full px-3 py-2">
          <div className="flex space-x-1">
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300
                  ${activeSection === item.id
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                title={item.name}
              >
                <item.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default VerticalNav
