import { useEffect, useState } from 'react'

const DEFAULT_DELAY_MS = 35
const DEFAULT_DURATION_MS = 550

/**
 * Splits text into letters and animates each with a staggered delay.
 * Use for hero headlines. Respects prefers-reduced-motion.
 */
function AnimatedLetters({
  children,
  className = '',
  as: Tag = 'span',
  delayPerLetter = DEFAULT_DELAY_MS,
  startDelay = 0,
  durationMs = DEFAULT_DURATION_MS,
  ...props
}) {
  const [mounted, setMounted] = useState(false)
  const text = typeof children === 'string' ? children : ''

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [])

  const letters = text.split('')

  return (
    <Tag
      className={`inline-block ${className}`.trim()}
      aria-label={text}
      {...props}
    >
      {letters.map((char, i) => (
        <span
          key={`${i}-${char}`}
          className="hero-letter"
          style={
            mounted
              ? {
                  animationDelay: `${startDelay + i * delayPerLetter}ms`,
                  animationDuration: `${durationMs}ms`,
                }
              : undefined
          }
          aria-hidden
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  )
}

export default AnimatedLetters
