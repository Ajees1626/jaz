import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function HomeAboutSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  /* Word Animation (No Line Break Issue) */
  const AnimatedWords = ({ children, delay = 0 }) => {
    const words = children.split(' ')

    return words.map((word, index) => (
      <span
        key={index}
        style={{
          transitionDelay: `${index * 80 + delay}ms`,
        }}
        className={`inline-block mr-1 transition-all duration-500 ease-out will-change-transform ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0'
        }`}
      >
        {word}
      </span>
    ))
  }

  return (
    <section
    ref={sectionRef}
    aria-labelledby="about-heading"
    className="relative z-20 -mt-16 overflow-hidden rounded-t-[3rem] bg-white 
    pt-16 pb-12 sm:-mt-20 sm:rounded-t-[4rem] sm:pt-20 sm:pb-16 md:pb-20"
  >
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
  
  

        <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">

          {/* IMAGE */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="overflow-hidden rounded-xl shadow-2xl will-change-transform">
              <img
                src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839378/ABOUT_uwlhic.webp"
                alt="House key and home model"
                loading="lazy"
                decoding="async"
                className="h-[260px] w-full object-cover sm:h-[340px] md:h-[400px] lg:h-[420px]"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            {/* HEADING */}
            <div className="mb-4">
              <h2 id="about-heading" className="text-jaz text-sm sm:text-2xl font-normal uppercase tracking-wider">
                ABOUT US
              </h2>
            </div>

            {/* Paragraph 1 */}
            <p className="mb-4 text-left text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base md:text-lg">
              <AnimatedWords delay={200}>
                JAZ Builders & Promoters is a professional construction and real estate company providing services in
              </AnimatedWords>{' '}
              <strong className="font-semibold text-gray-800">
                <AnimatedWords delay={800}>
                  Construction, PEB structures, Real estate, Joint Ventures, Architectural Design, and Project consulting.
                </AnimatedWords>
              </strong>{' '}
              <AnimatedWords delay={1600}>
                We deliver practical, cost-effective, and reliable solutions for residential, commercial, and industrial projects.
              </AnimatedWords>
            </p>

            {/* Paragraph 2 */}
            <p className="mb-6 text-left text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              <AnimatedWords delay={2200}>
                Our team focuses on quality execution, transparent processes, and timely completion.
              </AnimatedWords>{' '}
              <AnimatedWords delay={2800}>
                From planning and design to execution and consulting, we handle every project with clarity and responsibility.
              </AnimatedWords>
            </p>

            {/* BUTTON */}
            <div
              className={`transition-all duration-700 delay-[3200ms] ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
            >
              <Link
                to="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-lg
                bg-jaz px-6 py-3 text-sm font-normal text-white shadow-lg
                transition-all duration-300 ease-out hover:scale-105
                sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Get Free Quote
                <svg
                  className="h-4 w-4 fill-none transition-transform duration-200 ease-out group-hover:translate-x-1 sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutSection
