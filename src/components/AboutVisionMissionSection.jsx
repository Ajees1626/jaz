import { useEffect, useRef, useState } from 'react'
import { GiOnTarget, GiStrikingDiamonds, GiEyestalk } from 'react-icons/gi'
import SmoothParagraph from './SmoothParagraph'

function AboutVisionMissionSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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
        setIsVisible(entry.isIntersecting) // repeat animation
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  /* Medium Smooth Letter Animation */
  const AnimatedLetters = ({ text, delay = 0 }) => (
    <>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            transitionDelay: `${index * 50 + delay}ms`,
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
      className="overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide text-jaz-dark">
            <AnimatedLetters text="Our Vision, Mission & Values" />
          </h2>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">

          {/* VISION CARD */}
          <div
            className={`flex flex-col items-center rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-700 ease-out hover:shadow-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div
              className={`mb-4 text-jaz-dark transition-all duration-700 ${
                isVisible
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-75 -rotate-12 opacity-0'
              }`}
            >
              <GiEyestalk className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20" />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-jaz-dark text-center">
              <AnimatedLetters text="Our Vision" delay={200} />
            </h3>

            <div className="my-4 h-1 w-8 rounded-full bg-jaz-light" />

            <SmoothParagraph className="text-center text-sm sm:text-base leading-relaxed text-slate-600">
              To build premium-quality, affordable, eco-friendly, and sustainable
              developments that unlock property value and grow across South Tamil Nadu.
            </SmoothParagraph>
          </div>

          {/* MISSION CARD */}
          <div
            className={`flex flex-col items-center rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-700 ease-out hover:shadow-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div
              className={`mb-4 text-jaz-dark transition-all duration-700 ${
                isVisible
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-75 rotate-12 opacity-0'
              }`}
            >
              <GiOnTarget className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20" />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-jaz-dark text-center">
              <AnimatedLetters text="Our Mission" delay={200} />
            </h3>

            <div className="my-4 h-1 w-8 rounded-full bg-jaz-light" />

            <ul className="w-full max-w-sm space-y-3 text-sm sm:text-base text-slate-600">
              {missionPoints.map((item, index) => (
                <li
                  key={item}
                  style={{ transitionDelay: `${index * 180}ms` }}
                  className={`flex items-start gap-3 transition-all duration-600 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
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
            className={`flex flex-col items-center rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-700 ease-out hover:shadow-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div
              className={`mb-4 text-jaz-dark transition-all duration-700 ${
                isVisible
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-75 -rotate-12 opacity-0'
              }`}
            >
              <GiStrikingDiamonds className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20" />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-jaz-dark text-center">
              <AnimatedLetters text="Core Values" delay={200} />
            </h3>

            <div className="my-4 h-1 w-8 rounded-full bg-jaz-light" />

            <ul className="w-full max-w-sm space-y-3 text-sm sm:text-base text-slate-600">
              {valuePoints.map((item, index) => (
                <li
                  key={item}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  className={`flex items-start gap-3 transition-all duration-600 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
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
