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
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.55) 100%), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839671/service_ko4wrb.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="w-full px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-4xl font-normal sm:text-6xl md:text-7xl lg:text-8xl">SERVICES</h1>
          <div className="flex items-center justify-center gap-3 text-base text-white/90">
            <Link to="/" className="transition-colors duration-200 ease-out hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-jaz-dark pt-16 pb-12 sm:-mt-20 sm:rounded-t-[4rem] sm:pt-20 sm:pb-16 md:pb-20 lg:pt-24 lg:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
                className={`mb-8 flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-400 ease-out md:mb-12 md:min-h-[380px] md:flex-row md:items-stretch lg:min-h-[420px] ${
                  isEvenRow ? '' : 'md:flex-row-reverse'
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="flex w-full flex-col justify-center p-4 xs:p-5 sm:p-6 md:w-1/2 md:p-8 lg:p-14">
                  <span className="mb-2 block text-[15px] font-normal uppercase tracking-wider text-jaz-dark">
                    WHAT WE DO
                  </span>
                  <h2 className="mb-3 text-xl py-2 font-normal text-slate-900 sm:text-4xl">
                    <span className="inline-block rounded-md border border-slate-100 bg-slate-50 py-3 px-5 border-rounded-full">
                      {item.title}
                    </span>
                  </h2>
                  <SmoothParagraph className="mb-4 text-lg leading-relaxed text-slate-700 sm:mb-6 sm:text-base">
                    {item.shortDescription}
                  </SmoothParagraph>
                  <Link
                    to={`/service/${item.slug}`}
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-jaz-dark px-8 py-4 text-lg text-white transition-transform duration-200 ease-out hover:scale-105 hover:bg-jaz"
                  >
                    VIEW SERVICE
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="relative w-full overflow-hidden md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] w-full object-cover md:h-[420px] lg:h-[480px]"
                    loading="lazy"
                    style={{
                      willChange: 'clip-path, transform',
                      clipPath: isVisible
                        ? 'inset(0 0 0 0)'
                        : isEvenRow
                          ? 'inset(0 0 0 100%)'
                          : 'inset(0 100% 0 0)',
                      transform: isVisible ? 'scale(1)' : 'scale(1.05)',
                      transition: 'clip-path 0.4s ease-out, transform 0.4s ease-out',
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
