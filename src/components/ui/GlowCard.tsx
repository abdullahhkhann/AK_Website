import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'cyan' | 'purple' | 'none'
  hover?: boolean
}

export function GlowCard({ children, className, glowColor = 'cyan', hover = true }: GlowCardProps) {
  const glowStyles = {
    cyan: 'hover:shadow-glow-cyan hover:border-accent-cyan/30',
    purple: 'hover:shadow-glow-purple hover:border-accent-purple/30',
    none: '',
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'rounded-xl border border-white/5 bg-bg-card backdrop-blur-sm',
        'transition-all duration-300',
        hover && glowStyles[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  )
}
