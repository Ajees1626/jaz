import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import PageSEO from '../components/PageSEO'
import services from '../data/services.json'
import SmoothParagraph from '../components/SmoothParagraph'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'

function Service() {
  const heroRef = useRef(null)
  const [heroVisible, setHeroVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState({})
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleCards((prev) => {
          const next = { ...prev }

          entries.forEach((entry) => {
            const index = Number(entry.target.dataset.index)
            if (entry.isIntersecting) {
              next[index] = true   // once visible, keep true (no re-render loop)
            }
          })

          return next
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      },
    )

    cardRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const AnimatedLetters = ({ text, visible }) => (
    <>
      {(text || '').split('').map((char, i) => (
        <span
          key={i}
          style={{ transitionDelay: `${i * 35}ms` }}
          className={`inline-block transition-all duration-500 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  )

  return (
    <>
      <PageSEO
        title="Services"
        description="JAZ Builders services: Construction Project, PEB, Real Estate, Joint Venture, Architectural Design, Project Consulting. Execution-ready solutions in Tenkasi."
        keywords="construction services, PEB buildings, real estate development, architectural design, project consulting, JAZ Builders services"
      />
      <section
        ref={heroRef}
        aria-label="Services hero"
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
      >
        <div
          className={`hero-bg-zoom absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat ${
            heroVisible ? 'is-visible' : ''
          }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839671/service_ko4wrb.webp')",
          }}
        />
        <div className="relative z-10 w-full overflow-hidden px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-4xl font-normal sm:text-6xl md:text-7xl lg:text-8xl">
            <AnimatedLetters text="SERVICES" visible={heroVisible} />
          </h1>
          <div
            className={`flex items-center justify-center gap-3 text-base text-white/90 transition-all duration-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <Link to="/" className="transition-colors duration-200 ease-out hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20 rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem] bg-jaz-dark pt-14 sm:pt-16 md:pt-20 pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {services.map((item, index) => {
            const isEvenRow = index % 2 === 0
            const isVisible = Boolean(visibleCards[index])

            return (
              <article
                key={item.slug}
                ref={(element) => (cardRefs.current[index] = element)}
                data-index={index}
                className={`mb-8 md:mb-12 flex flex-col md:flex-row ${
                  !isEvenRow ? 'md:flex-row-reverse' : ''
                } overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 ease-out ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                {/* TEXT SIDE */}
                <div className="flex w-full md:w-1/2 flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-12">
                  <span className="mb-2 text-xs sm:text-sm uppercase tracking-widest text-jaz-dark">
                    WHAT WE DO
                  </span>

                  <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-slate-900">
                    <span className="inline-block rounded-full border border-slate-200 bg-slate-50 py-2 px-4 sm:py-3 sm:px-6">
                      {item.title}
                    </span>
                  </h2>

                  <SmoothParagraph className="mb-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-700">
                    {item.shortDescription}
                  </SmoothParagraph>

                  <Link
                    to={`/service/${item.slug}`}
                    className="inline-flex w-fit items-center gap-2 rounded-xl bg-jaz-dark px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white transition-transform duration-200 ease-out hover:scale-105 hover:bg-jaz"
                  >
                    VIEW SERVICE
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative w-full md:w-1/2 overflow-hidden">
                  <img
                    src={item.cardImage || item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[250px] sm:h-[300px] md:h-[420px] lg:h-[480px] object-cover transition-all duration-500 ease-out"
                    style={{
                      clipPath: isVisible
                        ? 'inset(0 0 0 0)'
                        : isEvenRow
                        ? 'inset(0 0 0 100%)'
                        : 'inset(0 100% 0 0)',
                      transform: isVisible ? 'scale(1)' : 'scale(1.05)',
                    }}
                  />
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <HomeBuildTogetherSection />
    </>
  )
}

export default Service
