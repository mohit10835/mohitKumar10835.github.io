import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import profilePhoto from '../imports/image.png'
import resumePDF from '../imports/mohit_resume.pdf'

const techIcons = [
  { icon: '🐧', label: 'Linux',      top: '14%', left: '7%',   delay: 0,   dur: 3.8 },
  { icon: '🟨', label: 'JavaScript', top: '22%', right: '9%',  delay: 0.5, dur: 4.2 },
  { icon: '☕', label: 'Java',        top: '62%', left: '5%',   delay: 1.0, dur: 3.5 },
  { icon: '🎨', label: 'Figma',       top: '68%', right: '7%',  delay: 1.5, dur: 4.6 },
  { icon: '🐙', label: 'GitHub',      top: '9%',  right: '23%', delay: 0.3, dur: 3.9 },
  { icon: '💙', label: 'TypeScript',  top: '78%', left: '22%',  delay: 0.8, dur: 4.1 },
  { icon: '☁️', label: 'AWS',    top: '17%', left: '28%',  delay: 1.2, dur: 3.6 },
  { icon: '🌐', label: 'HTML5',       top: '55%', right: '14%', delay: 0.6, dur: 4.3 },
  { icon: '🎨', label: 'CSS3',        top: '40%', left: '4%',   delay: 1.4, dur: 3.7 },
]

const typeStrings = ['Frontend Developer','Java Developer','Cloud Computing Learner', 'Problem Solver']

const stats = [
  { value: '8.94', label: 'CGPA', icon: '⭐' },
  { value: '2',   label: 'Projects', icon: '🚀' },
  { value: '10+',   label: 'Certificates', icon: '🏆' },
  { value: 'open', label: 'Intership', icon: '💼' },
]

// Particle component
function Particles() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'rgba(59,130,246,0.6)' : 'rgba(139,92,246,0.5)',
            left: `${(i * 4.2 + 3) % 100}%`,
            top: `${(i * 7.7 + 5) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [typeIdx, setTypeIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = typeStrings[typeIdx]
    let i = displayed.length

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 35)
        return () => clearTimeout(t)
      } else {
        setTypeIdx((prev) => (prev + 1) % typeStrings.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, typeIdx])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '110px 5% 60px',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            filter: 'blur(10px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 70%)',
            top: '60%',
            left: '30%',
            filter: 'blur(10px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      <Particles />

      {/* Floating tech icons */}
      {techIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay + 0.8, duration: 0.5 }}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            zIndex: 0,
            animation: `float ${item.dur}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.12, y: -4 }}
            className="glass"
            style={{
              borderRadius: 16,
              padding: '9px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12.5,
              color: '#CBD5E1',
              userSelect: 'none',
              cursor: 'default',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(59,130,246,0.12)'
              el.style.borderColor = 'rgba(59,130,246,0.3)'
              el.style.boxShadow = '0 8px 30px rgba(59,130,246,0.2)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(255,255,255,0.05)'
              el.style.borderColor = 'rgba(255,255,255,0.08)'
              el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            <span style={{ fontSize: 17 }}>{item.icon}</span>
            <span style={{ fontWeight: 600 }}>{item.label}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Center content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          maxWidth: 760,
        }}
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: 100,
            padding: '6px 18px',
            fontSize: 12.5,
            color: '#10B981',
            marginBottom: 32,
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#10B981',
              display: 'inline-block',
              boxShadow: '0 0 8px #10B981',
              animation: 'pulse-glow 2s ease infinite',
            }}
          />
          Available for Internship & Opportunities
        </motion.div>

        {/* Avatar with animated glow ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 110 }}
          style={{ position: 'relative', marginBottom: 32 }}
        >
          {/* Outer animated ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: -8,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #3B82F6, #8B5CF6, #3B82F6)',
              zIndex: -1,
              opacity: 0.6,
              filter: 'blur(2px)',
            }}
          />
          {/* Glow halo */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: -20,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)',
              zIndex: -2,
            }}
          />
          {/* Avatar circle */}
          <div
            style={{
              width: 132,
              height: 132,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0f1f3d, #1a0f3d)',
              border: '3px solid rgba(255,255,255,0.13)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 24px rgba(59,130,246,0.15)',
            }}
          >
            {/* Photo — object-position nudged up so face is centred */}
            <img
              src={profilePhoto}
              alt="Mohit Kumar"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 8%',
                transform: 'scale(1.08)',
                transformOrigin: 'center top',
                mixBlendMode: 'normal',
              }}
            />
            {/* Subtle vignette so edges dissolve into the ring */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'radial-gradient(circle at center, transparent 55%, rgba(7,9,15,0.55) 100%)',
                pointerEvents: 'none',
              }}
            />
            {/* Top-edge shine */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '38%',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)',
                borderRadius: '50% 50% 0 0 / 40% 40% 0 0',
                pointerEvents: 'none',
              }}
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 14,
            letterSpacing: '-0.03em',
          }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">Mohit Kumar</span>{' '}
          <span style={{ display: 'inline-block' }}>👋</span>
        </motion.h1>

        {/* Static subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            color: '#64748B',
            fontWeight: 500,
            marginBottom: 18,
            letterSpacing: '0.02em',
          }}
        >
          Frontend Developer &nbsp;•&nbsp; Java Programmer &nbsp;•&nbsp; B.Tech CSE Student
        </motion.p>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.45rem)',
            color: '#94A3B8',
            marginBottom: 22,
            minHeight: 44,
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          I'm a{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {displayed}
          </span>
          <span
            style={{
              display: 'inline-block',
              width: 2,
              height: '1.1em',
              background: '#3B82F6',
              marginLeft: 2,
              verticalAlign: 'text-bottom',
              animation: 'pulse-glow 1s steps(1) infinite',
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            color: '#64748B',
            fontSize: 15.5,
            lineHeight: 1.75,
            maxWidth: 540,
            marginBottom: 40,
          }}
        >
          Passionate about crafting beautiful, performant web experiences. I turn complex problems
          into elegant digital solutions with clean code and thoughtful design.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 60 }}
        >
          <motion.a
            href={resumePDF}
            download="Mohit_Kumar_Resume.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
          >
            <span>Download Resume</span>
            <span style={{ fontSize: 14 }}>↓</span>
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline"
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>View Projects</span>
            <span style={{ fontSize: 14 }}>→</span>
          </motion.button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            width: '100%',
            maxWidth: 600,
            marginBottom: 56,
            backdropFilter: 'blur(20px)',
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ background: 'rgba(59,130,246,0.08)' }}
              style={{
                padding: '20px 16px',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                transition: 'background 0.2s ease',
              }}
            >
              <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
              <div
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                  marginBottom: 3,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 11.5, color: '#64748B', fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
        >
          <span style={{ color: '#475569', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Scroll to explore
          </span>
          <div
            style={{
              width: 28,
              height: 46,
              border: '1.5px solid rgba(255,255,255,0.15)',
              borderRadius: 20,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '6px 0',
            }}
          >
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 4,
                height: 8,
                borderRadius: 10,
                background: 'linear-gradient(to bottom, #3B82F6, #8B5CF6)',
              }}
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
