import { useEffect, useRef, useState } from 'react'

const DEFAULT_DELAY_MS = 40
const DEFAULT_DURATION_MS = 500

/**
 * Splits text into letters and animates each with a staggered delay.
 * Uses inline transition: opacity 0→1, translateY(40px)→0 with cubic-bezier.
 * Supports both children (string) and text prop.
 * triggerOnScroll + scrollThreshold (0–1, e.g. 0.4 = 40% in view) for scroll-triggered animation.
 */
function AnimatedLetters({
  children,
  text: textProp,
  className = '',
  as: Tag = 'span',
  delayPerLetter = DEFAULT_DELAY_MS,
  startDelay = 0,
  durationMs = DEFAULT_DURATION_MS,
  duration,
  triggerOnScroll = false,
  scrollThreshold = 0.4,
  visible: visibleProp,
  ...props
}) {
  const [visibleState, setVisibleState] = useState(false)
  const ref = useRef(null)
  const text = textProp ?? (typeof children === 'string' ? children : '')
  const isControlled = visibleProp !== undefined && visibleProp !== null
  const visible = isControlled ? visibleProp : visibleState

  useEffect(() => {
    if (isControlled) return
    if (triggerOnScroll && ref.current) {
      const el = ref.current
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisibleState(true)
        },
        { threshold: scrollThreshold, rootMargin: scrollThreshold >= 1 ? '0px' : '0px 0px -30px 0px' }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }
    const t = requestAnimationFrame(() => setVisibleState(true))
    return () => cancelAnimationFrame(t)
  }, [triggerOnScroll, scrollThreshold, isControlled])

  const durationSec = duration != null ? Number(duration) : durationMs / 1000
  const letters = text.split('')

  return (
    <Tag
      ref={ref}
      className={`inline-block ${className}`.trim()}
      aria-label={text}
      {...props}
    >
      {letters.map((letter, index) => (
        <span
          key={`${index}-${letter}`}
          style={{
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: `all ${durationSec}s cubic-bezier(0.22, 1, 0.36, 1)`,
            transitionDelay: `${startDelay + index * delayPerLetter}ms`,
          }}
          aria-hidden
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </Tag>
  )
}

export default AnimatedLetters
