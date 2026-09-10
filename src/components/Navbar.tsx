import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import resumePDF from '../imports/mohit_resume.pdf'

const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 5%',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'rgba(7,11,22,0.88)'
          : 'rgba(7,11,22,0.4)',
        backdropFilter: 'blur(32px) saturate(180%)',
        WebkitBackdropFilter: 'blur(32px) saturate(180%)',
        borderBottom: scrolled
          ? '1px solid rgba(59,130,246,0.12)'
          : '1px solid rgba(255,255,255,0.05)',
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
        onClick={() => scrollTo('home')}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: 14,
            color: 'white',
            boxShadow: '0 4px 14px rgba(59,130,246,0.4)',
          }}
        >
          MK
        </div>
        <span style={{ fontSize: 16, fontWeight: 700, color: 'white', letterSpacing: '-0.01em' }}>
          Mohit Kumar
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, fontWeight: 400, marginLeft: 4 }}>
            .dev
          </span>
        </span>
      </motion.div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="hidden-mobile">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link.toLowerCase())}
            style={{
              background: active === link ? 'rgba(59,130,246,0.1)' : 'none',
              border: active === link ? '1px solid rgba(59,130,246,0.2)' : '1px solid transparent',
              color: active === link ? '#3B82F6' : '#94A3B8',
              fontSize: 13.5,
              fontWeight: 500,
              padding: '7px 14px',
              borderRadius: 10,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              if (active !== link) {
                el.style.color = 'white'
                el.style.background = 'rgba(255,255,255,0.06)'
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              if (active !== link) {
                el.style.color = '#94A3B8'
                el.style.background = 'none'
              }
            }}
          >
            {link}
          </button>
        ))}
        <motion.a
          href={resumePDF}
          download="Mohit_Kumar_Resume.pdf"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="btn-primary"
          style={{ padding: '8px 20px', fontSize: 13.5, marginLeft: 10, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
        >
          Download Resume ↓
        </motion.a>
      </div>

      {/* Hamburger */}
      <button
        className="show-mobile"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 10,
          color: 'white',
          cursor: 'pointer',
          fontSize: 18,
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: 72,
            left: 0,
            right: 0,
            background: 'rgba(7,11,22,0.97)',
            backdropFilter: 'blur(32px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '16px 5%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                color: active === link ? '#3B82F6' : '#94A3B8',
                fontSize: 16,
                fontWeight: 500,
                padding: '12px 0',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}
