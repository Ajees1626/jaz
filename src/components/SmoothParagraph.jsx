import { useEffect, useRef, useState } from 'react'

function SmoothParagraph({ children, className = '', as: Tag = 'p', ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12, rootMargin: '0px 0px -20px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`smooth-letter-reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default SmoothParagraph
