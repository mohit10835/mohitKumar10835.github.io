import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { icon: '🎓', label: 'Degree', value: 'B.Tech CSE', sub: '2025-2029' },
  { icon: '⭐', label: 'CGPA', value: '8.94 / 10', sub: 'Academic Excellence' },
  { icon: '💻', label: 'Role', value: 'Web Development', sub: 'HTML, CSS & JavaScript' },
  { icon: '☕', label: 'Skills', value: 'Java', sub: 'OOP & DSA' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" style={{ padding: '100px 5%', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ color: '#3B82F6', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>About Me</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            A brief introduction to my journey, skills, and what drives me.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center' }}>
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16 }}>
              Building Modern,{' '}
              <span className="gradient-text">Cloud & Web Solutions</span>
              
            </h3>
            <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: 16 }}>
              I'm Mohit Kumar, a B.Tech Computer Science student passionate about Web Development, Java, Linux, and Cloud Computing. I enjoy building responsive web applications, learning modern technologies, and improving my skills through hands-on projects and certifications.
            </p>
            <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: 28 }}>
              I'm currently focused on strengthening my development skills while exploring cloud technologies and backend development. My goal is to build scalable applications, contribute to real-world projects, and start my career as a Software Developer.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['HTML5', 'JavaScript', 'Java', 'Linux', 'AWS', 'GitHub','Git'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.25)',
                    borderRadius: 8,
                    padding: '6px 14px',
                    fontSize: 13,
                    color: '#3B82F6',
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass"
                style={{
                  padding: 24,
                  cursor: 'default',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(59,130,246,0.2)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.3)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{s.value}</div>
                <div style={{ color: '#94A3B8', fontSize: 12, fontWeight: 500 }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
