import { useEffect, useRef, useState } from 'react'

function AboutHistorySection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Repeat animation every scroll
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const TypingParagraph = ({ text, isVisible }) => (
    <p className="mt-6 text-justify text-sm leading-relaxed text-slate-800 sm:text-base md:text-lg lg:text-xl">
      {(text || '').split('').map((char, index) => (
        <span
          key={index}
          style={{ transitionDelay: `${index * 20}ms` }}
          className={`inline-block transition-all duration-500 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </p>
  )

  const BadgeLetters = ({ text, delay = 0 }) => (
    <>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            transitionDelay: `${index * 60 + delay}ms`, // slower than before (30 → 60)
          }}
          className={`inline-block transition-all duration-700 ease-out ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
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
      className="overflow-hidden bg-jaz-light py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE SIDE */}
          <div
            className={`overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-20 opacity-0'
            }`}
          >
            <img
              src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839635/jaz_founder-01_yycovq.webp"
              alt="Founder portrait"
              loading="lazy"
              decoding="async"
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] xl:h-[520px] object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>

          {/* TEXT SIDE */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-20 opacity-0'
            }`}
          >
            {/* Badge */}
            <span className="inline-flex overflow-hidden rounded-full bg-jaz-dark px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wide text-white">
              <BadgeLetters text="Our History" />
            </span>

            {/* Paragraph */}
            <p
              className={`mt-6 text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-800 transition-all duration-700 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
              style={{
                transitionDelay: '400ms', // smoother delay
              }}
            >
              Founded in 2008 by Mr. Sultan Syed Ibrahim, Founder & Managing Director,
              JAZ BUILDERS & PROMOTERS is a trusted name in real estate, construction,
              and designing in Tenkasi and South Tamil Nadu. With over a decade of
              experience, we deliver projects that combine innovative design,
              superior quality, and lasting value. Our commitment to customer
              satisfaction, ethical practices, and transparency has made us one of
              the most respected and reliable brands in the region.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutHistorySection
