import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { CONTACT_INFO } from '../../constants/data'

const socials = [
  { icon: <FiGithub size={18} />, href: CONTACT_INFO.github, label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-bg-secondary py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="hero" smooth duration={500} className="cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} className="font-mono text-lg font-semibold">
            <span className="text-accent-cyan">{'<'}</span>
            <span className="text-text-primary">AK</span>
            <span className="text-accent-cyan">{'/>'}</span>
          </motion.div>
        </Link>

        <p className="text-text-muted text-sm font-mono">
          Designed & Built by <span className="text-accent-cyan">Abdullah Khan</span> © {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -3, color: '#00d4ff' }}
              className="text-text-muted transition-colors duration-200"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
