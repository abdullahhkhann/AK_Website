import { useState, useEffect, useRef } from 'react'

export function useTypewriter(phrases: string[], speed = 80, deleteSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const phraseIndex = useRef(0)
  const charIndex = useRef(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      const currentPhrase = phrases[phraseIndex.current]

      if (!isDeleting) {
        if (charIndex.current < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, charIndex.current + 1))
          charIndex.current++
          timeout = setTimeout(tick, speed)
        } else {
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        if (charIndex.current > 0) {
          setDisplayText(currentPhrase.slice(0, charIndex.current - 1))
          charIndex.current--
          timeout = setTimeout(tick, deleteSpeed)
        } else {
          setIsDeleting(false)
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length
          timeout = setTimeout(tick, 300)
        }
      }
    }

    timeout = setTimeout(tick, speed)
    return () => clearTimeout(timeout)
  }, [isDeleting, phrases, speed, deleteSpeed, pauseDuration])

  return displayText
}
