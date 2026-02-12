import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import services from '../data/services.json'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'

function Service() {
  const [visibleCards, setVisibleCards] = useState({})
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleCards((prev) => {
          const next = { ...prev }
          let changed = false

          entries.forEach((entry) => {
            const index = Number(entry.target.dataset.index)
            const shouldBeVisible = entry.isIntersecting

            if (next[index] !== shouldBeVisible) {
              next[index] = shouldBeVisible
              changed = true
            }
          })

          return changed ? next : prev
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' },
    )

    cardRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section
        className="relative flex min-h-[62vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.55) 100%), url('https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-5 text-6xl font-normal sm:text-7xl">SERVICES</h1>
          <div className="flex items-center justify-center gap-3 text-base text-white/90">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-jaz-dark pt-16 pb-12 sm:-mt-20 sm:rounded-t-[4rem] sm:pt-20 sm:pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          {services.map((item, index) => {
            const isEvenRow = index % 2 === 0
            const isVisible = Boolean(visibleCards[index])

            return (
              <article
                key={item.slug}
                ref={(element) => {
                  cardRefs.current[index] = element
                }}
                data-index={index}
                className={`mb-8 flex flex-col overflow-hidden rounded-md bg-white shadow-xl transition-all duration-700 md:mb-12 md:flex-row md:items-stretch ${
                  isEvenRow ? '' : 'md:flex-row-reverse'
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="flex w-full flex-col justify-center p-4 xs:p-5 sm:p-6 md:w-1/2 md:p-8 lg:p-10">
                  <span className="mb-2 block text-[10px] font-normal uppercase tracking-wider text-jaz-dark">
                    WHAT WE DO
                  </span>
                  <h2 className="mb-3 text-xl font-normal text-slate-900 sm:text-2xl">
                    <span className="inline-block rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                      {item.title}
                    </span>
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:mb-6 sm:text-base">
                    {item.shortDescription}
                  </p>
                  <Link
                    to={`/service/${item.slug}`}
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-jaz-dark px-5 py-2.5 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-jaz"
                  >
                    VIEW SERVICE
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="relative w-full overflow-hidden md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
                    loading="lazy"
                    style={{
                      willChange: 'clip-path, transform',
                      clipPath: isVisible
                        ? 'inset(0 0 0 0)'
                        : isEvenRow
                          ? 'inset(0 0 0 100%)'
                          : 'inset(0 100% 0 0)',
                      transform: isVisible ? 'scale(1)' : 'scale(1.05)',
                      transition: 'clip-path 900ms ease, transform 900ms ease',
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
