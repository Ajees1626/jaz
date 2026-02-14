import { useEffect, useRef, useState } from 'react'
import { FiCheckCircle, FiStar, FiSun } from 'react-icons/fi'
import AnimatedLetters from './AnimatedLetters'

const whyChooseItems = [
  {
    title: 'Expert Team',
    description: 'End-to-end management of every project',
    value: '150+',
    label: 'Project Completed',
    icon: FiSun,
  },
  {
    title: 'On-Time Delivery',
    description: 'Assured schedules with controlled costs',
    value: '150+',
    label: 'Happy Clients',
    icon: FiStar,
  },
  {
    title: 'Transparent Communication',
    description: 'Clear, ethical, and regular updates',
    value: '18+',
    label: 'Years Experience',
    icon: FiCheckCircle,
  },
  {
    title: 'Intelligent Design',
    description: 'Modern, functional, and space-efficient solutions',
    value: '1000+',
    label: 'Designs',
    icon: FiCheckCircle,
  },
]

function HomeWhyChooseSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-choose-heading"
      className="overflow-hidden bg-[#f7f8f9] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Proper Left & Right Space Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Animation */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Heading */}
          <div className="mb-14 text-center">
            <h2 id="why-choose-heading" className="sr-only">Why Choose Us?</h2>
            <AnimatedLetters
              as="span"
              className="inline-flex rounded-full bg-jaz-dark px-9 py-2.5 text-sm font-medium uppercase tracking-wide text-white shadow-md"
              delayPerLetter={28}
              durationMs={400}
              triggerOnScroll
            >
              Why Choose Us?
            </AnimatedLetters>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseItems.map((item, index) => (
              <article
                key={item.title}
                className={`group flex flex-col rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon */}
                <div className="mx-auto mb-6 inline-flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-jaz to-jaz-light text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="h-9 w-9" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-normal text-jaz-dark sm:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-slate-500 sm:text-base">
                  {item.description}
                </p>

                {/* Bottom Highlight Box */}
                <div className="mt-auto rounded-xl bg-gradient-to-r from-jaz to-jaz-light px-4 py-6 text-white shadow-inner transition-all duration-500 group-hover:scale-[1.03]">
                  <p className="text-4xl font-semibold leading-none">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/90">
                    {item.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeWhyChooseSection
