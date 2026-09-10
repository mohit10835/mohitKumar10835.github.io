import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    degree: 'B.Tech Computer Science & Engineering',
    institution: 'Rungta International Skill University',
    year: '2025 – 2029',
    grade: 'CGPA: 8.73',
    icon: '🎓',
    color: '#8B5CF6',
    highlights: ['Data Structures & Algorithms', 'Web Technologies', 'Cloud Computing', 'Operating Systems'],
    status: 'current',
  },
  {
    degree: 'Class XII — Science (PCM)',
    institution: 'TPS College, Patna',
    year: '2023 – 2025',
    grade: 'Percentage: 81.4%',
    icon: '📚',
    color: '#8B5CF6',
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'English'],
    status: 'completed',
  },
  {
    degree: 'Class X — Secondary Education',
    institution: 'Secondary School',
    year: '2021 – 2023',
    grade: 'Percentage: 88%',
    icon: '🏫',
    color: '#8B5CF6',
    highlights: ['Mathematics', 'Science', 'Social Studies', 'English'],
    status: 'completed',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" style={{ padding: '100px 5%', position: 'relative' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ color: '#3B82F6', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Academic Journey</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: 16,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, #3B82F6, #8B5CF6, #10B981, transparent)',
              transformOrigin: 'top',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {timeline.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                style={{ position: 'relative' }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -32,
                    top: 24,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: item.color,
                    boxShadow: `0 0 16px ${item.color}60`,
                    border: '2px solid #0B1120',
                  }}
                />

                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass"
                  style={{ padding: '28px 32px', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.boxShadow = `0 10px 40px ${item.color}20`
                    el.style.borderColor = `${item.color}30`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.boxShadow = 'none'
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 28 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{item.degree}</div>
                        <div style={{ color: '#94A3B8', fontSize: 14 }}>{item.institution}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}30`,
                          color: item.color,
                          fontWeight: 600,
                          fontSize: 12,
                          padding: '4px 12px',
                          borderRadius: 8,
                          marginBottom: 6,
                        }}
                      >
                        {item.year}
                      </div>
                      <div style={{ color: '#10B981', fontWeight: 600, fontSize: 13 }}>{item.grade}</div>
                    </div>
                  </div>

                  {item.status === 'current' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', animation: 'pulse-glow 2s infinite' }} />
                      <span style={{ color: '#10B981', fontWeight: 600, fontSize: 12 }}>Currently Enrolled</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: 8,
                          padding: '4px 12px',
                          fontSize: 12,
                          color: '#94A3B8',
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
