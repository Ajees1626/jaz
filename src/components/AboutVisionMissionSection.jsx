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
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting) // repeat animation
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  /* Letter Animation Component */
  const AnimatedLetters = ({ text, delay = 0 }) => {
    return (
      <>
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{ transitionDelay: `${index * 25 + delay}ms` }}
            className={`inline-block transition-all duration-500 ease-out ${
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
  }

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-12 sm:py-16 md:py-20"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* Section Heading Letter Animation */}
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-normal tracking-wide text-jaz-dark sm:text-5xl">
            <AnimatedLetters text="Our Vision, Mission & Values" />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">

          {/* VISION CARD */}
          <div
            className={`flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-all duration-700 ease-out hover:shadow-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div
              className={`mb-3 flex justify-center text-jaz-dark transition-all duration-700 ${
                isVisible
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-50 rotate-[-20deg] opacity-0'
              }`}
            >
              <GiEyestalk className="h-20 w-20" />
            </div>

            <h3 className="text-center text-xl font-normal tracking-wide text-jaz-dark">
              <AnimatedLetters text="Our Vision" delay={200} />
            </h3>

            <div className="my-3 flex justify-center">
              <span className="h-1 w-1 rounded-full bg-jaz-light" />
            </div>

            <SmoothParagraph className="w-full text-center text-base leading-relaxed tracking-wide text-slate-600">
              To build premium-quality, affordable, eco-friendly, and sustainable
              developments that unlock property value and grow across South Tamil Nadu.
            </SmoothParagraph>
          </div>

          {/* MISSION CARD */}
          <div
            className={`flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-all duration-700 delay-150 ease-out hover:shadow-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div
              className={`mb-3 flex justify-center text-jaz-dark transition-all duration-700 ${
                isVisible
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-50 rotate-[20deg] opacity-0'
              }`}
            >
              <GiOnTarget className="h-20 w-20" />
            </div>

            <h3 className="text-center text-xl font-normal tracking-wide text-jaz-dark">
              <AnimatedLetters text="Our Mission" delay={200} />
            </h3>

            <div className="my-3 flex justify-center">
              <span className="h-1 w-1 rounded-full bg-jaz-light" />
            </div>

            <ul className="mx-auto w-full max-w-sm space-y-2 text-left text-base leading-relaxed tracking-wide text-slate-600">
              {missionPoints.map((item, index) => (
                <li
                  key={item}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  className={`flex items-start gap-2 transition-all duration-500 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-6 opacity-0'
                  }`}
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-jaz" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VALUES CARD */}
          <div
            className={`flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-all duration-700 delay-300 ease-out hover:shadow-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div
              className={`mb-3 flex justify-center text-jaz-dark transition-all duration-700 ${
                isVisible
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-50 rotate-[-20deg] opacity-0'
              }`}
            >
              <GiStrikingDiamonds className="h-20 w-20" />
            </div>

            <h3 className="text-center text-xl font-normal tracking-wide text-jaz-dark">
              <AnimatedLetters text="Core Values" delay={200} />
            </h3>

            <div className="my-3 flex justify-center">
              <span className="h-1 w-1 rounded-full bg-jaz-light" />
            </div>

            <ul className="mx-auto w-full max-w-sm space-y-2 text-left text-base leading-relaxed tracking-wide text-slate-600">
              {valuePoints.map((item, index) => (
                <li
                  key={item}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className={`flex items-start gap-2 transition-all duration-500 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-6 opacity-0'
                  }`}
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-jaz" />
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
