import { useTypewriter } from '../../../hooks/useTypewriter'

interface TypewriterTextProps {
  phrases: string[]
  className?: string
}

export function TypewriterText({ phrases, className }: TypewriterTextProps) {
  const text = useTypewriter(phrases)

  return (
    <span className={className}>
      {text}
      <span className="animate-blink text-accent-cyan ml-0.5">|</span>
    </span>
  )
}
