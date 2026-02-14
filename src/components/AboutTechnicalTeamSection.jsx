import { useEffect, useRef, useState } from 'react'

const teamMembers = [
  {
    name: 'S.N.Azarudeen',
    role: 'M.Arch',
    description:
      'Experienced construction professional with over 15 years in the industry. Leading JAZ Builders and Promoters with vision and expertise.',
  },
  {
    name: 'Sivaranjani Veerapandian',
    role: 'B.Arch',
    description:
      'Passionate about quality construction and client satisfaction. Bringing innovative solutions to every project.',
  },
]

function AboutTechnicalTeamSection() {
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
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  /* Word Animation Component */
  const AnimatedWords = ({ text, delay = 0 }) => {
    return text.split(' ').map((word, index) => (
      <span
        key={index}
        style={{
          transitionDelay: `${index * 70 + delay}ms`,
        }}
        className={`inline-block mr-2 transition-all duration-500 ease-out will-change-transform ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-6 opacity-0'
        }`}
      >
        {word}
      </span>
    ))
  }

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-jaz-light py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div
          className={`mb-8 text-center transition-all duration-700 ease-out sm:mb-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-flex rounded-full bg-jaz-dark px-8 py-2 text-sm font-medium uppercase tracking-wide text-white shadow-md sm:text-base">
            Our Technical Team
          </span>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`group rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 md:p-12 shadow-lg
              transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:bg-jaz-dark ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Name */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-slate-800 transition-colors duration-300 group-hover:text-white">
                <AnimatedWords text={member.name} delay={200} />
              </h3>

              {/* Role */}
              <p className="mt-3 text-xl sm:text-2xl font-medium text-jaz-dark transition-colors duration-300 group-hover:text-white">
                <AnimatedWords text={member.role} delay={600} />
              </p>

              {/* Description */}
              <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white">
                <AnimatedWords text={member.description} delay={1000} />
              </p>

            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default AboutTechnicalTeamSection
