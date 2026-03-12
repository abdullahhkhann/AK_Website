import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { FiMapPin, FiBook, FiCode, FiCloud, FiTrendingUp, FiUsers } from 'react-icons/fi'
import { SectionHeading } from '../../ui/SectionHeading'
import { STATS } from '../../../constants/data'
import { staggerContainer, fadeInLeft, fadeInRight, scaleIn } from '../../../constants/animations'

const floatingBadges = [
  { label: 'Java', color: '#f59e0b' },
  { label: 'JavaScript', color: '#facc15' },
  { label: 'TypeScript', color: '#3b82f6' },
  { label: 'React', color: '#00d4ff' },
  { label: 'React Native', color: '#a855f7' },
  { label: 'Angular', color: '#ef4444' },
  { label: 'Node.js', color: '#22c55e' },
  { label: 'Python', color: '#3b82f6' },
  { label: 'C#', color: '#a855f7' },
  { label: 'APIs', color: '#00d4ff' },
  { label: 'Cloud', color: '#22c55e' },
  { label: 'Product Management', color: '#f59e0b' },
]

function StatCounter({ value, numericValue, label }: { value: string; numericValue: number; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const motionVal = useMotionValue(0)
  const display = useTransform(motionVal, (v) => {
    if (value.includes('.')) return v.toFixed(2)
    if (value.includes('+')) return `${Math.round(v)}+`
    return Math.round(v).toString()
  })

  useEffect(() => {
    if (inView) {
      animate(motionVal, numericValue, { duration: 1.5, ease: 'easeOut' })
    }
  }, [inView, motionVal, numericValue])

  return (
    <div ref={ref} className="text-center">
      <motion.span className="block text-3xl md:text-4xl font-bold text-accent-cyan font-mono">
        {display}
      </motion.span>
      <span className="text-sm text-text-secondary mt-1 block">{label}</span>
    </div>
  )
}

const bioItems = [
  {
    icon: <FiCode className="text-accent-cyan" size={18} />,
    text: 'Software Engineer and MS CS student (GPA 3.89) at Wichita State University. I have 2+ years of professional experience building and deploying full-stack solutions across web, mobile, and enterprise platforms.',
  },
  {
    icon: <FiCloud className="text-accent-purple" size={18} />,
    text: 'Proficient in Java, JavaScript (React, Node.js, TypeScript), Python, C, and C#. I have hands-on experience integrating APIs, leading data migrations, and building scalable enterprise applications with .NET Core and SQL.',
  },
  {
    icon: <FiTrendingUp className="text-accent-cyan" size={18} />,
    text: 'At Ansen AI, I wore the product manager hat — designing copilot features, revamping UX for an enterprise SIEM platform, and driving a 50% operational efficiency gain through data-driven product decisions. I bridge the gap between engineering and business.',
  },
  {
    icon: <FiUsers className="text-accent-purple" size={18} />,
    text: 'A natural leader — captained a varsity basketball team, served as a Graduate Student Advocate, and consistently led cross-functional teams in high-pressure environments. I believe great software starts with great collaboration.',
  },
  {
    icon: <FiBook className="text-accent-cyan" size={18} />,
    text: "Driven by a passion for innovation — I don't just build to spec. I challenge existing processes, propose smarter designs, and look for creative ways to make systems faster, more intuitive, and more impactful.",
  },
]

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="01." title="About Me" />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Avatar + floating badges */}
          <motion.div variants={fadeInLeft} className="flex flex-col items-center relative">
            {/* Avatar */}
            <div className="relative w-64 h-64">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-[2px] animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-bg-card flex items-center justify-center overflow-hidden">
                  {/* Initials avatar */}
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center text-5xl font-bold text-text-primary"
                    style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2235 100%)' }}
                  >
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}>
                      AK
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => {
                const angle = (i / floatingBadges.length) * 360
                const rad = (angle * Math.PI) / 180
                const r = 148
                const x = Math.cos(rad) * r
                const y = Math.sin(rad) * r
                return (
                  <motion.div
                    key={badge.label}
                    animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3,
                    }}
                    className="absolute text-xs font-mono font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      left: `calc(50% + ${x}px - 28px)`,
                      top: `calc(50% + ${y}px - 12px)`,
                      color: badge.color,
                      borderColor: `${badge.color}40`,
                      background: `${badge.color}15`,
                    }}
                  >
                    {badge.label}
                  </motion.div>
                )
              })}
            </div>

            {/* Location */}
            <motion.div variants={scaleIn} className="mt-8 flex items-center gap-2 text-text-secondary text-sm">
              <FiMapPin className="text-accent-cyan" size={14} />
              <span>Wichita, KS · Open to Relocation</span>
            </motion.div>
          </motion.div>

          {/* Right: Bio + Stats */}
          <motion.div variants={fadeInRight} className="space-y-6">
            {bioItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInRight}
                className="flex gap-4 p-4 rounded-xl bg-bg-card border border-white/5 hover:border-accent-cyan/20 transition-colors duration-300"
              >
                <div className="mt-1 flex-shrink-0">{item.icon}</div>
                <p className="text-text-secondary leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              variants={scaleIn}
              className="grid grid-cols-4 gap-4 mt-8 p-6 rounded-xl bg-bg-card border border-white/5"
            >
              {STATS.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  numericValue={stat.numericValue}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
