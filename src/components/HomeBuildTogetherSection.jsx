import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import AnimatedLetters from './AnimatedLetters'

const stats = [
  { value: '150+', label: 'Projects' },
  { value: '18+', label: 'Years' },
  { value: '99%', label: 'Satisfaction' },
]

function HomeBuildTogetherSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)   // once true, no toggle (prevent lag)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div
            className={`transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <AnimatedLetters
              as="span"
              className="inline-flex rounded-full bg-jaz-dark px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wide text-white"
              delayPerLetter={26}
              durationMs={380}
              visible={isInView}
            >
              Get Start Today
            </AnimatedLetters>

            {/* Heading */}
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-slate-800">
              <AnimatedLetters
                as="span"
                className="block"
                delayPerLetter={32}
                durationMs={420}
                visible={isInView}
              >
                Let&apos;s build
              </AnimatedLetters>

              <span className="block">
                <AnimatedLetters
                  as="span"
                  className="inline-block"
                  delayPerLetter={28}
                  durationMs={400}
                  visible={isInView}
                  startDelay={200}
                >
                  something
                </AnimatedLetters>{' '}
                <span className="text-jaz-dark inline-block">
                  <AnimatedLetters
                    as="span"
                    delayPerLetter={28}
                    durationMs={400}
                    visible={isInView}
                    startDelay={350}
                  >
                    great
                  </AnimatedLetters>
                </span>
              </span>

              <AnimatedLetters
                as="span"
                className="block"
                delayPerLetter={32}
                durationMs={420}
                visible={isInView}
                startDelay={480}
              >
                together!
              </AnimatedLetters>
            </h2>

            {/* Paragraph */}
            <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
              <AnimatedLetters
                as="span"
                delayPerLetter={12}
                durationMs={320}
                startDelay={600}
                visible={isInView}
              >
                Don&apos;t wait any longer to bring your construction dreams to life.
                Partner with JAZ Builders and Promoters and experience unparalleled
                service and quality.
              </AnimatedLetters>
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-jaz-dark px-6 sm:px-7 py-3 text-sm sm:text-base font-medium text-white transition-transform duration-200 hover:scale-105"
              >
                Get Free Quote
                <FiArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/project"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 sm:px-7 py-3 text-sm sm:text-base font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
              >
                View Projects
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-sm">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-slate-700">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839324/GET_yvbzsb.webp"
                alt="Modern building"
                loading="lazy"
                className="w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-left-8 flex items-center gap-3 rounded-xl border border-jaz-dark/20 bg-white px-4 sm:px-5 py-3 shadow-lg">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-jaz-dark text-white">
                <FiCheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-jaz-dark">
                  Expert Team
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500">
                  Professional Service
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HomeBuildTogetherSection
