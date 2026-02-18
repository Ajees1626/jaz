import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import AnimatedLetters from './AnimatedLetters'

// Parse "150+", "99%" -> { number: 150, suffix: '+' }
function parseValue(str) {
  const match = String(str).match(/^(\d+)(.*)$/)
  if (!match) return { number: 0, suffix: '' }
  return { number: parseInt(match[1], 10), suffix: match[2] || '' }
}

function CountUp({ target, suffix = '', durationMs = 1800, start = false }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) {
      setCount(0)
      return
    }
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - (1 - progress) ** 4
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, durationMs, start])
  return <>{count}{suffix}</>
}

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
        setIsInView(entry.isIntersecting) // keep observing so animations can re-run
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
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
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">

          {/* LEFT CONTENT — scroll + letter animation (all visible) */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Badge — letter animation so text shows on turquoise bar */}
            <AnimatedLetters
              as="span"
              text="Get Start Today"
              visible={isInView}
              opacityOnly
              className="inline-flex rounded-full bg-jaz-dark px-5 py-2 text-sm sm:text-lg  uppercase tracking-wide text-white"
              delayPerLetter={35}
              durationMs={450}
              startDelay={0}
              maxStaggerLetters={20}
            />

            {/* Heading — letter animation */}
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-slate-800">
              <AnimatedLetters
                as="span"
                text="Let's build"
                className="block"
                visible={isInView}
                delayPerLetter={38}
                durationMs={480}
                startDelay={80}
                maxStaggerLetters={12}
              />

              <span className="block">
                <AnimatedLetters
                  as="span"
                  text="something"
                  className="inline-block"
                  visible={isInView}
                  delayPerLetter={36}
                  durationMs={460}
                  startDelay={320}
                  maxStaggerLetters={12}
                />{' '}
                <span className="text-jaz-dark inline-block">
                  <AnimatedLetters
                    as="span"
                    text="great"
                    visible={isInView}
                    delayPerLetter={36}
                    durationMs={460}
                    startDelay={520}
                    maxStaggerLetters={6}
                  />
                </span>
              </span>

              <AnimatedLetters
                as="span"
                text="together!"
                className="block"
                visible={isInView}
                delayPerLetter={38}
                durationMs={480}
                startDelay={720}
                maxStaggerLetters={10}
              />
            </h2>

            {/* Paragraph — letter animation, capped so all letters show */}
            <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
              <AnimatedLetters
                as="span"
                text="Don't wait any longer to bring your construction dreams to life. Partner with JAZ Builders and Promoters and experience unparalleled service and quality."
                visible={isInView}
                opacityOnly
                delayPerLetter={14}
                durationMs={380}
                startDelay={880}
                maxStaggerLetters={28}
              />
            </p>

            {/* Buttons — fade in */}
            <div
              className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-600 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isInView ? '1000ms' : '0ms' }}
            >
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

            {/* Stats — staggered fade in */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-sm">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`transition-all duration-500 ease-out ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{ transitionDelay: isInView ? `${1100 + index * 100}ms` : '0ms' }}
                >
                  <p className="text-xl sm:text-2xl md:text-2xl font-normal text-slate-700 tabular-nums">
                    <CountUp
                      target={parseValue(item.value).number}
                      suffix={parseValue(item.value).suffix}
                      start={isInView}
                      durationMs={2000}
                    />
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE — slow scroll + image reveal animation */}
          <div
            className={`relative transition-all duration-[1200ms] ease-out delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div
              className={`overflow-hidden rounded-2xl shadow-xl transition-all duration-[1000ms] ease-out delay-300 ${
                isInView ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-90'
              }`}
            >
              <img
                src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839324/GET_yvbzsb.webp"
                alt="Modern building"
                loading="lazy"
                className={`w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] object-cover transition-all duration-[1000ms] ease-out delay-200 hover:scale-105 ${
                  isInView ? 'translate-y-0 scale-100' : 'translate-y-6 scale-[1.02]'
                }`}
              />
            </div>

            {/* Floating Card — appears after image */}
            <div
              className={`absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-left-8 flex items-center gap-3 rounded-xl border border-jaz-dark/20 bg-white px-4 sm:px-5 py-3 shadow-lg transition-all duration-700 ease-out delay-500 ${
                isInView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'
              }`}
            >
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
