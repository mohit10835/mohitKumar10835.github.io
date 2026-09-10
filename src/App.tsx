import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div style={{ background: '#0B1120', minHeight: '100vh', position: 'relative' }}>
      {/* Cursor glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${cursorPos.x - 200}px, ${cursorPos.y - 200}px)`,
          transition: 'transform 0.1s ease',
        }}
      />

      {/* Background blobs */}
      <div className="blob" style={{ width: 600, height: 600, background: 'rgba(59,130,246,0.08)', top: -200, right: -200 }} />
      <div className="blob" style={{ width: 500, height: 500, background: 'rgba(139,92,246,0.08)', top: 400, left: -200 }} />
      <div className="blob" style={{ width: 400, height: 400, background: 'rgba(59,130,246,0.06)', top: '60vh', right: 100 }} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
