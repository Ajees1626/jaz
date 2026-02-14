import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import services from '../data/services.json'
import SmoothParagraph from '../components/SmoothParagraph'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'

function Service() {
  const [visibleCards, setVisibleCards] = useState({})
  const cardRefs = useRef([])

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

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[85vh] md:min-h-[100vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.55) 100%), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839671/service_ko4wrb.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: window.innerWidth > 1024 ? 'fixed' : 'scroll', // FIX lag on mobile
        }}
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-5 text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide">
            SERVICES
          </h1>

          <div className="flex items-center justify-center gap-3 text-sm sm:text-base text-white/90">
            <Link
              to="/"
              className="transition-colors duration-200 ease-out hover:text-white"
            >
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
                    src={item.image}
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
