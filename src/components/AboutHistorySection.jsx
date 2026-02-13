import { useEffect, useRef, useState } from 'react'
import SmoothParagraph from './SmoothParagraph'

function AboutHistorySection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const textRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-jaz-light py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="grid w-full items-center gap-6 px-4 sm:gap-8 sm:px-6 md:gap-10 md:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10 xl:gap-16 xl:px-12">
        {/* Image block - scroll animation */}
        <div
          ref={contentRef}
          className={`overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-24px] opacity-0'
          }`}
        >
          <img
            src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839635/jaz_founder-01_yycovq.webp"
            alt="Founder portrait"
            className="h-[260px] w-full object-cover sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px]"
          />
        </div>

        {/* Text block - scroll + smooth letter feel */}
        <div
          ref={textRef}
          className={`transition-all duration-500 ease-out delay-150 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
          }`}
        >
          <span className="inline-flex rounded-full bg-jaz-dark px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-white sm:px-5 sm:py-2 sm:text-sm">
            Our History
          </span>

          <SmoothParagraph className="mt-4 text-base leading-relaxed text-slate-800 sm:mt-5 sm:text-lg md:mt-6 md:text-xl">
            Founded in 2008 by Mr. Sultan Syed Ibrahim, Founder &amp; Managing Director,
            JAZ BUILDERS &amp; PROMOTERS is a trusted name in real estate, construction,
            and designing in Tenkasi and South Tamil Nadu. With over a decade of
            experience, we deliver projects that combine innovative design, superior
            quality, and lasting value. Our commitment to customer satisfaction, ethical
            practices, and transparency has made us one of the most respected and
            reliable brands in the region.
          </SmoothParagraph>
        </div>
      </div>
    </section>
  )
}

export default AboutHistorySection
