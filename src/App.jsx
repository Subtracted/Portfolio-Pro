import React from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FloatingElements from './components/FloatingElements'

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <FloatingElements />
      <Navigation />
      
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Subtle background accent */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-forest-500 to-sage-500 z-50"></div>
    </div>
  )
}

export default App 