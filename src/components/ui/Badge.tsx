import { cn } from '../../utils/cn'

interface BadgeProps {
  label: string
  variant?: 'default' | 'highlight' | 'outline'
  className?: string
}

export function Badge({ label, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-white/5 text-text-secondary border border-white/10',
    highlight: 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30',
    outline: 'bg-transparent text-accent-purple border border-accent-purple/40',
  }

  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-xs font-mono font-medium',
        'transition-colors duration-200',
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  )
}
