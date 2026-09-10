import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import githubCopilotCert from '../imports/Credentials_-_mohitkumargupta-3098___Microsoft_Learn.pdf'
import javaCert from '../imports/java_certificate-1.pdf'
import figmaCert from '../imports/UI__UX_DESIGNER_certificate.pdf'
import mlCert from '../imports/certificate_of_machine_learning_using_calculus.pdf'

const certs = [
  {
    name: 'GitHub Copilot',
    issuer: 'Microsoft Learn',
    date: 'Dec 2024',
    icon: '🐙',
    color: '#6E40C9',
    gradient: 'linear-gradient(135deg, #6E40C9, #4B2FA4)',
    desc: 'AI-powered development with GitHub Copilot for enhanced productivity.',
    certFile: githubCopilotCert,
  },
  {
    name: 'Java Programming',
    issuer: 'Oracle / NPTEL',
    date: 'Oct 2024',
    icon: '☕',
    color: '#ED8B00',
    gradient: 'linear-gradient(135deg, #ED8B00, #C97700)',
    desc: 'Core Java fundamentals, OOP principles, and advanced data structures.',
    certFile: javaCert,
  },
  {
    name: 'Figma Design',
    issuer: 'Figma',
    date: 'Sep 2024',
    icon: '🎭',
    color: '#F24E1E',
    gradient: 'linear-gradient(135deg, #F24E1E, #C23D18)',
    desc: 'UI/UX design, prototyping, components, and design systems in Figma.',
    certFile: figmaCert,
  },
  {
    name: 'Machine Learning',
    issuer: 'Coursera / Andrew Ng',
    date: 'Aug 2024',
    icon: '🤖',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    desc: 'Supervised learning, neural networks, and ML algorithms fundamentals.',
    certFile: mlCert,
  },
]

export default function Certificates() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certificates" style={{ padding: '100px 5%', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ color: '#8B5CF6', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Credentials</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Validated skills through recognized certifications and courses.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass"
              style={{ padding: 28, cursor: 'default', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = `0 20px 50px ${cert.color}25`
                el.style.borderColor = `${cert.color}35`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = 'none'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              {/* Background shimmer */}
              <div
                style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: `${cert.color}12`,
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top bar gradient */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: cert.gradient,
                  borderRadius: '20px 20px 0 0',
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: cert.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 26,
                  marginBottom: 20,
                  boxShadow: `0 8px 24px ${cert.color}35`,
                }}
              >
                {cert.icon}
              </div>

              <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{cert.name}</h3>
              <div style={{ color: cert.color, fontWeight: 600, fontSize: 13, marginBottom: 12 }}>
                {cert.issuer} · {cert.date}
              </div>
              <p style={{ color: '#94A3B8', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>{cert.desc}</p>

              {cert.certFile ? (
                <motion.a
                  href={cert.certFile}
                  download
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}35`,
                    borderRadius: 10,
                    padding: '8px 18px',
                    color: cert.color,
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    textDecoration: 'none',
                  }}
                >
                  View Certificate ↓
                </motion.a>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: `${cert.color}10`,
                    border: `1px solid ${cert.color}20`,
                    borderRadius: 10,
                    padding: '8px 18px',
                    color: `${cert.color}80`,
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: 'not-allowed',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Coming Soon
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
