import { useEffect, useRef, useState } from 'react'
import { GiOnTarget, GiStrikingDiamonds, GiEyestalk } from 'react-icons/gi'
import AnimatedLetters from './AnimatedLetters'

const VISION_TEXT = 'To build premium-quality, affordable, eco-friendly, and sustainable developments that unlock property value and grow across South Tamil Nadu.'

function AboutVisionMissionSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollKey, setScrollKey] = useState(0)
  const [wordVisible, setWordVisible] = useState(false)
  useEffect(() => {
    if (!isVisible) setWordVisible(false)
    else {
      const id = requestAnimationFrame(() => setWordVisible(true))
      return () => cancelAnimationFrame(id)
    }
  }, [isVisible])

  const missionPoints = [
    'Think Right: Plan every project with clear scope and feasibility',
    'Build Right: Execute using structured systems and quality checks',
    'Deliver Right: Complete and hand over on time, exactly as promised',
  ]

  const valuePoints = [
    'Uncompromising quality',
    'Operational excellence',
    'Accountable delivery',
    'Proven expertise',
    'Client-centric advisory',
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsVisible(inView)
        if (inView) setScrollKey((k) => k + 1) // again again — new key so letter + scroll animations re-run
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Heading — letter animation, slow */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide text-jaz-dark">
            <AnimatedLetters
              key={`heading-${scrollKey}`}
              text="Our Vision, Mission & Values"
              visible={isVisible}
              delayPerLetter={36}
              durationMs={480}
              startDelay={0}
              maxStaggerLetters={30}
            />
          </h2>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">

          {/* VISION CARD — strong scroll + letter animation */}
          <div
            className={`flex flex-col items-center rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-1000 ease-out hover:shadow-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: isVisible ? '0ms' : '0ms',
              willChange: isVisible ? 'auto' : 'transform, opacity',
            }}
          >
            <div
              className={`mb-4 text-jaz-dark transition-all duration-700 ease-out ${
                isVisible
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-90 -rotate-8 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
            >
              <GiEyestalk className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20" />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-jaz-dark text-center">
              <AnimatedLetters
                key={`vision-${scrollKey}`}
                text="Our Vision"
                visible={isVisible}
                startDelay={180}
                delayPerLetter={32}
                durationMs={420}
                maxStaggerLetters={12}
              />
            </h3>

            <div className="my-4 h-1 w-8 rounded-full bg-jaz-light" />

            <p className="text-center text-sm leading-relaxed text-slate-600 sm:text-base">
              {VISION_TEXT.split(/\s+/).map((word, index) => (
                <span
                  key={`${scrollKey}-${index}-${word.slice(0, 6)}`}
                  style={{
                    opacity: wordVisible ? 1 : 0,
                    transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    transitionDelay: wordVisible ? `${280 + index * 45}ms` : '0ms',
                  }}
                  className="inline"
                >
                  {index > 0 ? ' ' : ''}{word}
                </span>
              ))}
            </p>
          </div>

          {/* MISSION CARD */}
          <div
            className={`flex flex-col items-center rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-1000 ease-out hover:shadow-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: isVisible ? '120ms' : '0ms',
              willChange: isVisible ? 'auto' : 'transform, opacity',
            }}
          >
            <div
              className={`mb-4 text-jaz-dark transition-all duration-700 ease-out ${
                isVisible
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-90 rotate-8 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? '240ms' : '0ms' }}
            >
              <GiOnTarget className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20" />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-jaz-dark text-center">
              <AnimatedLetters
                key={`mission-${scrollKey}`}
                text="Our Mission"
                visible={isVisible}
                startDelay={300}
                delayPerLetter={32}
                durationMs={420}
                maxStaggerLetters={12}
              />
            </h3>

            <div className="my-4 h-1 w-8 rounded-full bg-jaz-light" />

            <ul className="w-full max-w-sm space-y-3 text-sm sm:text-base text-slate-600">
              {missionPoints.map((item, index) => (
                <li
                  key={item}
                  style={{ transitionDelay: isVisible ? `${400 + index * 120}ms` : '0ms' }}
                  className={`flex items-start gap-3 transition-all duration-500 ease-out ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-6 opacity-0'
                  }`}
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-jaz shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VALUES CARD */}
          <div
            className={`flex flex-col items-center rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-1000 ease-out hover:shadow-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: isVisible ? '240ms' : '0ms',
              willChange: isVisible ? 'auto' : 'transform, opacity',
            }}
          >
            <div
              className={`mb-4 text-jaz-dark transition-all duration-700 ease-out ${
                isVisible
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-90 -rotate-8 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? '380ms' : '0ms' }}
            >
              <GiStrikingDiamonds className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20" />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-jaz-dark text-center">
              <AnimatedLetters
                key={`values-${scrollKey}`}
                text="Core Values"
                visible={isVisible}
                startDelay={420}
                delayPerLetter={32}
                durationMs={420}
                maxStaggerLetters={12}
              />
            </h3>

            <div className="my-4 h-1 w-8 rounded-full bg-jaz-light" />

            <ul className="w-full max-w-sm space-y-3 text-sm sm:text-base text-slate-600">
              {valuePoints.map((item, index) => (
                <li
                  key={item}
                  style={{ transitionDelay: isVisible ? `${560 + index * 100}ms` : '0ms' }}
                  className={`flex items-start gap-3 transition-all duration-500 ease-out ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-6 opacity-0'
                  }`}
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-jaz shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutVisionMissionSection
