import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const socials = [
  { icon: '🐙', label: 'GitHub', href: '#', color: '#ffffff' },
  { icon: '💼', label: 'LinkedIn', href: '#', color: '#0A66C2' },
  { icon: '📧', label: 'Email', href: 'mailto:mohit@example.com', color: '#EA4335' },
  { icon: '🐦', label: 'Twitter', href: '#', color: '#1DA1F2' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 14,
    padding: '14px 18px',
    color: 'white',
    fontSize: 15,
    outline: 'none',
    transition: 'all 0.2s ease',
    fontFamily: 'Inter, sans-serif',
  }

  return (
    <section id="contact" style={{ padding: '100px 5%', position: 'relative' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ color: '#3B82F6', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Get in Touch</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Say Hello 👋</h3>
            <p style={{ color: '#94A3B8', lineHeight: 1.7, marginBottom: 32 }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {[
                { icon: '📍', label: 'Location', value: 'India' },
                { icon: '📧', label: 'Email', value: 'ranjanayush412@gmail.com' },
                { icon: '📞', label: 'Phone', value: '+91 7546876733' },
              ].map((info) => (
                <div key={info.label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(59,130,246,0.12)',
                      border: '1px solid rgba(59,130,246,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ color: '#94A3B8', fontSize: 12, fontWeight: 500, marginBottom: 2 }}>{info.label}</div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={s.label}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 14,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = s.color
                    el.style.background = `${s.color}18`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.1)'
                    el.style.background = 'rgba(255,255,255,0.05)'
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass" style={{ padding: '36px 32px' }}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: '#94A3B8' }}>Thanks for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#94A3B8', marginBottom: 8, display: 'block' }}>Your Name</label>
                    <input
                      type="text"
                      placeholder="Mohit Kumar"
                      value={form.name}
                      required
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#94A3B8', marginBottom: 8, display: 'block' }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      required
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#94A3B8', marginBottom: 8, display: 'block' }}>Message</label>
                    <textarea
                      placeholder="Tell me about your project..."
                      value={form.message}
                      required
                      rows={5}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={(e) => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                    style={{ width: '100%', fontSize: 15 }}
                  >
                    Send Message ✈️
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
