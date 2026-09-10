import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Linux SVG icon (Tux)
const LinuxIcon = () => (
  <svg viewBox="0 0 48 48" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="16" rx="10" ry="13" fill="#F5E6C8"/>
    <ellipse cx="19" cy="13" rx="2.5" ry="3" fill="#1a1a1a"/>
    <ellipse cx="29" cy="13" rx="2.5" ry="3" fill="#1a1a1a"/>
    <circle cx="19.5" cy="13" r="1" fill="#fff"/>
    <circle cx="29.5" cy="13" r="1" fill="#fff"/>
    <ellipse cx="24" cy="19" rx="3" ry="2" fill="#e8c89a"/>
    <path d="M21 22 Q24 25 27 22" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <ellipse cx="24" cy="33" rx="12" ry="9" fill="#2D2D2D"/>
    <path d="M12 40 Q8 46 14 46 Q18 46 18 42" fill="#2D2D2D"/>
    <path d="M36 40 Q40 46 34 46 Q30 46 30 42" fill="#2D2D2D"/>
    <ellipse cx="18" cy="36" rx="3" ry="4" fill="#F5E6C8"/>
    <ellipse cx="30" cy="36" rx="3" ry="4" fill="#F5E6C8"/>
    <path d="M16 26 Q12 30 13 36" stroke="#F5E6C8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 26 Q36 30 35 36" stroke="#F5E6C8" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// AWS SVG icon
const AWSIcon = () => (
  <svg viewBox="0 0 48 48" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 28.5 L10 38 L7 38 L3 26 L5.5 26 L8.5 35.5 L12 26 L15 26 L18.5 35.5 L21.5 26 L24 26 L20 38 L17 38 Z" fill="#FF9900"/>
    <path d="M24.5 32 C24.5 29.5 26.5 28 29 28 C30 28 31 28.3 31.8 28.8 L31.8 28 C31.8 26.5 30.8 25.5 29 25.5 C27.8 25.5 26.8 26 26 26.8 L25 25.2 C26.2 24.2 27.5 23.5 29.2 23.5 C32 23.5 34 25 34 28.2 L34 38 L31.8 38 L31.8 36.8 C31 37.7 29.8 38.2 28.5 38.2 C26.2 38.2 24.5 36.5 24.5 34 Z M31.8 34.5 L31.8 31 C31 30.5 30 30.2 29 30.2 C27.5 30.2 26.5 31 26.5 32.2 C26.5 33.5 27.5 34.5 29 34.5 C30 34.5 31 34.2 31.8 33.5 Z" fill="#FF9900"/>
    <path d="M36 26 L38.5 26 L41.5 35 L44.5 26 L47 26 L43 38 L40 38 Z" fill="#FF9900"/>
    <path d="M38 18 C34 15.5 28 14 24 14 C19 14 14.5 15.5 11 18 L10 16.5 C14 14 19 12 24 12 C29.5 12 35 13.5 39 16.5 Z" fill="#FF9900"/>
    <path d="M40 20 L38.5 18.8 C40 17.8 41 17 41 17 L42.5 18.2 C42.5 18.2 41.5 19 40 20 Z" fill="#FF9900"/>
  </svg>
)

const skills = [
  { name: 'HTML5',      icon: null,  emoji: '🌐', color: '#E34F26', level: 90, category: 'Frontend' },
  { name: 'CSS3',       icon: null,  emoji: '🎨', color: '#1572B6', level: 88, category: 'Frontend' },
  { name: 'JavaScript', icon: null,  emoji: '🟨', color: '#F7DF1E', level: 80, category: 'Programming' },
  { name: 'Linux',      icon: 'linux', emoji: null, color: '#7C6FCD', level: 75, category: 'Operating System' },
  { name: 'Java',       icon: null,  emoji: '☕', color: '#ED8B00', level: 75, category: 'Programming' },
  { name: 'GitHub',     icon: null,  emoji: '🐙', color: '#e2e8f0', level: 80, category: 'Version Control' },
  { name: 'AWS',        icon: 'aws', emoji: null, color: '#FF9900', level: 65, category: 'Cloud Computing' },
  { name: 'Figma',      icon: null,  emoji: '🎭', color: '#F24E1E', level: 50, category: 'UI/UX Design' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" style={{ padding: '100px 5%', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ color: '#8B5CF6', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Technical Stack</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Technologies, programming languages, and tools I'm continuously learning and using to build modern applications.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass"
              style={{ padding: 24, cursor: 'default', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = `0 0 30px ${skill.color}30`
                el.style.borderColor = `${skill.color}40`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = 'none'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              {/* BG glow */}
              <div
                style={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: `${skill.color}15`,
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: `${skill.color}18`,
                    border: `1px solid ${skill.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                  }}
                >
                  {skill.icon === 'linux' ? <LinuxIcon /> : skill.icon === 'aws' ? <AWSIcon /> : skill.emoji}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{skill.name}</div>
                  <div style={{ color: '#94A3B8', fontSize: 12, fontWeight: 500 }}>{skill.category}</div>
                </div>
                <div style={{ marginLeft: 'auto', fontWeight: 700, fontSize: 14, color: skill.color }}>
                  {skill.level}%
                </div>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: 5,
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: 100,
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    borderRadius: 100,
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
