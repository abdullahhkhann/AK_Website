import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { ParticleGrid } from './ParticleGrid'
import { TypewriterText } from './TypewriterText'
import { TYPEWRITER_PHRASES } from '../../../constants/data'
import { staggerContainer, fadeInUp } from '../../../constants/animations'

const techPills = ['JavaScript', 'Java', 'C#', 'Python', '.NET Core', 'React', 'Cloud', 'Networking', 'Cyber Security', 'AI/ML', 'Product Management']

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Particle canvas */}
      <ParticleGrid />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              Open to New Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="font-bold text-text-primary leading-none mb-4"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #f0f6fc 30%, #00d4ff 100%)' }}
            >
              Abdullah Khan
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={fadeInUp} className="mb-6 h-12 flex items-center justify-center">
            <span className="text-xl md:text-2xl font-mono text-text-secondary">
              {'// '}
              <TypewriterText
                phrases={TYPEWRITER_PHRASES}
                className="text-accent-cyan font-semibold"
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-text-secondary text-base md:text-lg leading-relaxed mb-8"
          >
            MS Computer Science student at Wichita State (GPA 3.89). Software engineer, product thinker, and team leader — I build accessible full stack systems and challenge existing processes with innovative, business-informed solutions.
          </motion.p>

          {/* Tech pills */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-10">
            {techPills.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="/AbdullahKhan_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)' }}
            >
              <FiDownload size={16} />
              Download Resume
            </motion.a>

            <Link to="experience" smooth duration={600} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-200 cursor-pointer"
              >
                <FiExternalLink size={16} />
                View My Experience
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors"
        >
          <span className="text-xs font-mono">scroll</span>
          <FiArrowDown size={16} />
        </motion.div>
      </Link>
    </section>
  )
}
