import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { label: 'Projects Completed', value: 12, suffix: '+', icon: '🚀', color: '#3B82F6' },
  { label: 'Certificates Earned', value: 8, suffix: '', icon: '🏆', color: '#8B5CF6' },
  { label: 'Problems Solved', value: 200, suffix: '+', icon: '💻', color: '#10B981' },
  { label: 'GitHub Commits', value: 450, suffix: '+', icon: '🐙', color: '#F59E0B' },
]

function Counter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(false)

  useEffect(() => {
    if (ref.current) return
    ref.current = true
    let start = 0
    const step = target / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [target, duration])

  return <>{count}</>
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{ padding: '100px 5%', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ color: '#F59E0B', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Numbers</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Achievements <span className="gradient-text">at a Glance</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20, marginBottom: 60 }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 120 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass"
              style={{ padding: 32, textAlign: 'center', cursor: 'default', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = `0 20px 50px ${stat.color}25`
                el.style.borderColor = `${stat.color}35`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = 'none'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}99)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {inView ? <Counter target={stat.value} /> : 0}
                {stat.suffix}
              </div>
              <div style={{ color: '#94A3B8', fontWeight: 500, fontSize: 14 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass"
          style={{
            padding: '40px 48px',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
            borderColor: 'rgba(59,130,246,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
              Open to <span className="gradient-text">Internship Opportunities</span>
            </h3>
            <p style={{ color: '#94A3B8', lineHeight: 1.6 }}>
              Looking for frontend development internships to apply my skills and grow professionally.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
