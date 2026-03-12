import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  download?: boolean
  target?: string
}

export function Button({ children, variant = 'primary', href, onClick, className, download, target }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-sm transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white shadow-glow-cyan/30 hover:shadow-glow-cyan hover:scale-105 active:scale-95',
    outline: 'border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan hover:shadow-glow-cyan/20',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
  }

  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
