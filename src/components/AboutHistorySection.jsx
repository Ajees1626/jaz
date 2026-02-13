import { useEffect, useRef, useState } from 'react'

function AboutHistorySection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting) // Important for repeat animation
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  /* Badge letter animation (local, uses isVisible) */
  const BadgeLetters = ({ text, delay = 0 }) => (
    <>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{ transitionDelay: `${index * 30 + delay}ms` }}
          className={`inline-block transition-all duration-500 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  )

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-jaz-light py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="grid w-full items-center gap-6 px-4 sm:gap-8 sm:px-6 md:gap-10 md:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10 xl:gap-16 xl:px-12">

        {/* Image Scroll Animation */}
        <div
          className={`overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-out ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-16 opacity-0'
          }`}
        >
          <img
            src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839635/jaz_founder-01_yycovq.webp"
            alt="Founder portrait"
            className="h-[260px] w-full object-cover transition-transform duration-700 ease-out hover:scale-105 sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px]"
          />
        </div>

        {/* Text Scroll Animation */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-16 opacity-0'
          }`}
        >
          {/* Badge Letter Animation */}
          <span className="inline-flex overflow-hidden rounded-full bg-jaz-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-white sm:px-5 sm:py-2 sm:text-sm">
            <BadgeLetters text="Our History" />
          </span>

          {/* Paragraph: word-by-word animation so words wrap naturally (no mid-word break) */}
          <div className="mt-4 text-justify text-base leading-relaxed text-slate-800 sm:mt-5 sm:text-lg md:mt-6 md:text-xl">
            {(
              'Founded in 2008 by Mr. Sultan Syed Ibrahim, Founder & Managing Director, JAZ BUILDERS & PROMOTERS is a trusted name in real estate, construction, and designing in Tenkasi and South Tamil Nadu. With over a decade of experience, we deliver projects that combine innovative design, superior quality, and lasting value. Our commitment to customer satisfaction, ethical practices, and transparency has made us one of the most respected and reliable brands in the region.'
            )
              .split(/(\s+)/)
              .map((part, index) => {
                const isSpace = /^\s+$/.test(part)
                if (isSpace) return <span key={index}>{part}</span>
                return (
                  <span
                    key={index}
                    className={`inline transition-all duration-300 ease-out ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                    }`}
                    style={{ transitionDelay: `${300 + index * 25}ms` }}
                  >
                    {part}
                  </span>
                )
              })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutHistorySection
