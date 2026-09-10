import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    name: 'RasoiRoom',
    subtitle: 'Hospitality Management System',
    description: 'A full-featured hospitality management platform for restaurants and hotels. Streamlines table booking, order management, inventory tracking, and staff coordination in one elegant dashboard.',
    tags: ['React', 'JavaScript', 'CSS', 'Firebase'],
    emoji: '🍽️',
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    accent: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=340&fit=crop&auto=format',
  },
  {
    name: 'HisabRoom',
    subtitle: 'Expense Tracker',
    description: 'Smart expense tracking application that helps users manage personal finances, split bills with friends, visualize spending patterns, and set budget goals with insightful analytics.',
    tags: ['React', 'Tailwind CSS', 'Chart.js', 'LocalStorage'],
    emoji: '💰',
    gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
    accent: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=340&fit=crop&auto=format',
  },
  {
    name: 'Portfolio Website',
    subtitle: 'Personal Portfolio',
    description: 'This very portfolio — a premium, glassmorphism-styled personal website showcasing projects, skills, and achievements. Built with React, Framer Motion, and Tailwind CSS.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    emoji: '🚀',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    accent: '#10B981',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=340&fit=crop&auto=format',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" style={{ padding: '100px 5%', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ color: '#3B82F6', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Portfolio</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Real-world applications I've built with passion and precision.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                minHeight: 260,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${project.accent}25`
                ;(e.currentTarget as HTMLElement).style.borderColor = `${project.accent}30`
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              {/* Image (reorder on odd) */}
              {i % 2 !== 0 && (
                <div style={{ position: 'relative', overflow: 'hidden', minHeight: 240 }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,17,32,0.5)' }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: 20,
                      left: 20,
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: project.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      boxShadow: `0 8px 24px ${project.accent}50`,
                    }}
                  >
                    {project.emoji}
                  </div>
                </div>
              )}

              {/* Content */}
              <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ color: project.accent, fontWeight: 600, fontSize: 13, marginBottom: 8, letterSpacing: '0.05em' }}>
                  {project.subtitle}
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 14 }}>{project.name}</h3>
                <p style={{ color: '#94A3B8', lineHeight: 1.7, fontSize: 15, marginBottom: 24 }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: `${project.accent}12`,
                        border: `1px solid ${project.accent}30`,
                        borderRadius: 8,
                        padding: '4px 12px',
                        fontSize: 12,
                        color: project.accent,
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: project.gradient,
                      border: 'none',
                      borderRadius: 10,
                      padding: '10px 22px',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Live Demo →
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 10,
                      padding: '10px 22px',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    🐙 GitHub
                  </motion.button>
                </div>
              </div>

              {/* Image (on even) */}
              {i % 2 === 0 && (
                <div style={{ position: 'relative', overflow: 'hidden', minHeight: 240 }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,17,32,0.4)' }} />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 20,
                      right: 20,
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: project.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      boxShadow: `0 8px 24px ${project.accent}50`,
                    }}
                  >
                    {project.emoji}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          section#projects .glass {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
