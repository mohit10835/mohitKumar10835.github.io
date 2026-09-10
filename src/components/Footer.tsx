import { motion } from 'framer-motion'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      style={{
        background: '#060D1A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '40px 5%',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 6 }}>
            <span className="gradient-text">MK</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginLeft: 4, fontWeight: 400 }}>portfolio</span>
          </div>
          <p style={{ color: '#94A3B8', fontSize: 13 }}>
            © {new Date().getFullYear()} Mohit Kumar. Crafted with ❤️ and React.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
            <button
              key={link}
              onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'none',
                border: 'none',
                color: '#94A3B8',
                fontSize: 13,
                fontWeight: 500,
                padding: '6px 12px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'white')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#94A3B8')}
            >
              {link}
            </button>
          ))}
        </div>

        <motion.button
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollTop}
          style={{
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
            border: 'none',
            borderRadius: 12,
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            cursor: 'pointer',
            color: 'white',
          }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  )
}
