import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { Skill } from '../../../types'

interface SkillBarProps {
  skill: Skill
  delay?: number
}

export function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {skill.highlight && (
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          )}
          <span className={`text-sm font-medium ${skill.highlight ? 'text-text-primary' : 'text-text-secondary'}`}>
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono text-text-muted">{skill.level}%</span>
      </div>

      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: skill.highlight
              ? 'linear-gradient(90deg, #00d4ff, #00a8cc)'
              : 'linear-gradient(90deg, #7c3aed, #a855f7)',
          }}
        >
          {/* Shimmer */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, delay: delay + 0.5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </div>
  )
}
