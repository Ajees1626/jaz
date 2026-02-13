import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import services from '../data/services.json'

function HomeServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [enableTransition, setEnableTransition] = useState(true)

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3)
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)

    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  useEffect(() => {
    setEnableTransition(false)
    setCurrentIndex(visibleCount)
    const restore = requestAnimationFrame(() => setEnableTransition(true))
    return () => cancelAnimationFrame(restore)
  }, [visibleCount])

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 3200)

    return () => clearInterval(autoSlide)
  }, [])

  const sliderItems = useMemo(() => {
    if (!services.length) return []
    const head = services.slice(-visibleCount)
    const tail = services.slice(0, visibleCount)
    return [...head, ...services, ...tail]
  }, [visibleCount])

  const logicalIndex = useMemo(() => {
    if (!services.length) return 0
    const offset = currentIndex - visibleCount
    return ((offset % services.length) + services.length) % services.length
  }, [currentIndex, visibleCount])

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  const handleTrackTransitionEnd = () => {
    const minIndex = visibleCount
    const maxIndex = services.length + visibleCount

    if (currentIndex < minIndex) {
      setEnableTransition(false)
      setCurrentIndex((prev) => prev + services.length)
      requestAnimationFrame(() => setEnableTransition(true))
      return
    }

    if (currentIndex >= maxIndex) {
      setEnableTransition(false)
      setCurrentIndex((prev) => prev - services.length)
      requestAnimationFrame(() => setEnableTransition(true))
    }
  }

  return (
    <section className="bg-jaz-light py-12 sm:py-16 md:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-jaz-dark px-6 py-2 text-sm font-medium uppercase tracking-wide text-white">
            Our Services
          </span>
        </div>

        <div className="overflow-hidden pt-4">
          <div
            className="flex"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
              transition: enableTransition ? 'transform 0.35s ease-out' : 'none',
            }}
            onTransitionEnd={handleTrackTransitionEnd}
          >
            {sliderItems.map((service, idx) => (
              <div
                key={`${service.slug}-${idx}`}
                className="shrink-0 px-2.5"
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <Link
                  to={`/service/${service.slug}`}
                  className="group relative block h-[460px] overflow-hidden rounded-2xl border-2 border-jaz-dark/30 bg-slate-900 transform-gpu transition-all duration-300 ease-out hover:z-20 hover:-translate-y-3 hover:scale-[1.02] hover:border-jaz hover:shadow-[0_26px_42px_-16px_rgba(0,163,160,0.62),0_14px_24px_-12px_rgba(15,23,42,0.6),inset_0_1px_0_rgba(255,255,255,0.26)]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                  />

                  <div className="absolute right-3 top-3 rounded-full bg-jaz-dark/90 p-2 text-white backdrop-blur-sm">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01"
                      />
                    </svg>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/95 via-black/70 to-transparent p-5">
                    <h3 className="mb-1 text-3xl font-semibold text-white transition-colors duration-200 ease-out group-hover:text-jaz">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-jaz-light transition-colors duration-200 ease-out group-hover:text-jaz">
                      <span>Learn More</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-jaz-dark opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {services.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setCurrentIndex(dotIndex + visibleCount)}
              className={`h-2.5 rounded-full transition-all ${
                dotIndex === logicalIndex ? 'w-8 bg-jaz-dark' : 'w-2.5 bg-jaz-dark/40'
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrevious}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-jaz-dark transition-colors duration-200 ease-out hover:bg-white/40"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-jaz-dark transition-colors duration-200 ease-out hover:bg-white/40"
            aria-label="Next"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/service"
            className="inline-flex items-center gap-2 rounded-xl bg-jaz-dark px-8 py-3 text-sm font-medium text-white shadow-md transition-opacity duration-200 ease-out hover:opacity-90"
          >
            View All Services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeServicesSection
