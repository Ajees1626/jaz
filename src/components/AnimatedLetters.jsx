import { useEffect, useRef, useState } from 'react'

const DEFAULT_DELAY_MS = 35
const DEFAULT_DURATION_MS = 400

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
  opacityOnly = false,
  maxStaggerLetters = 28,
  ...props
}) {
  const [visibleState, setVisibleState] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef(null)
  const text = textProp ?? (typeof children === 'string' ? children : '')
  const isControlled = visibleProp !== undefined && visibleProp !== null
  const visible = isControlled ? visibleProp : visibleState
  /* When controlled and visible, start hidden then trigger on next frame so transition runs (e.g. FAQ open) */
  const displayVisible = isControlled ? (visible && hasTriggered) : visible

  useEffect(() => {
    if (isControlled) {
      if (visible) {
        const id = requestAnimationFrame(() => setHasTriggered(true))
        return () => cancelAnimationFrame(id)
      }
      setHasTriggered(false)
      return
    }
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
  }, [triggerOnScroll, scrollThreshold, isControlled, visible])

  const durationSec = duration != null ? Number(duration) : durationMs / 1000
  const letters = text.split('')

  return (
    <Tag
      ref={ref}
      className={`inline-block ${className}`.trim()}
      aria-label={text}
      {...props}
    >
      {letters.map((letter, index) => {
        const delayMs = startDelay + Math.min(index, maxStaggerLetters) * delayPerLetter
        return (
          <span
            key={`${index}-${letter}`}
            style={{
              display: 'inline-block',
              opacity: displayVisible ? 1 : 0,
              transform: opacityOnly ? 'translateY(0)' : (displayVisible ? 'translateY(0)' : 'translateY(28px)'),
              transition: `opacity ${durationSec}s cubic-bezier(0.22, 1, 0.36, 1), transform ${durationSec}s cubic-bezier(0.22, 1, 0.36, 1)`,
              transitionDelay: `${delayMs}ms`,
              willChange: displayVisible ? 'auto' : 'opacity, transform',
            }}
            aria-hidden
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        )
      })}
    </Tag>
  )
}

export default AnimatedLetters
