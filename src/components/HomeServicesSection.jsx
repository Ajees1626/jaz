import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import services from '../data/services.json'

function HomeServicesSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [enableTransition, setEnableTransition] = useState(true)

  /* Intersection Observer */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  /* Responsive Visible Count */
  useEffect(() => {
    const updateVisibleCount = () => {
      const count = window.innerWidth < 768 ? 1 : 3
      setVisibleCount((prev) => (prev !== count ? count : prev))
    }

    updateVisibleCount()
    const resizeHandler = () => requestAnimationFrame(updateVisibleCount)

    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  /* Reset Position */
  useEffect(() => {
    setEnableTransition(false)
    setCurrentIndex(visibleCount)

    const frame = requestAnimationFrame(() => {
      setEnableTransition(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [visibleCount])

  /* Auto Slide Only When Visible */
  useEffect(() => {
    if (!isInView) return

    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 3200)

    return () => clearInterval(autoSlide)
  }, [isInView])

  /* Infinite Loop Setup */
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

  const handlePrevious = () => setCurrentIndex((prev) => prev - 1)
  const handleNext = () => setCurrentIndex((prev) => prev + 1)

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
    <section
      ref={sectionRef}
      aria-labelledby="services-heading"
      className={`overflow-hidden bg-jaz-light py-12 sm:py-16 md:py-20 transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* Heading Reveal */}
        <div
          className={`mb-12 text-center transition-all duration-700 delay-200 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <span className="inline-flex rounded-full bg-jaz-dark px-6 py-2 text-sm font-medium uppercase tracking-wide text-white" aria-hidden="true">
            Our Services
          </span>
        </div>

        {/* Slider Reveal */}
        <div
          className={`overflow-hidden pt-4 transition-all duration-700 delay-300 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div
            className="flex will-change-transform"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / visibleCount
              }%)`,
              transition: enableTransition
                ? 'transform 0.35s ease-out'
                : 'none',
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
                    src={service.cardImage || service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/95 via-black/70 to-transparent p-5">
                    <h3 className="mb-1 text-3xl font-normal text-white transition-colors duration-200 ease-out group-hover:text-jaz">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-jaz-light group-hover:text-jaz">
                      <span>Learn More</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Reveal */}
        <div
          className={`mt-10 flex items-center justify-center gap-2 transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {services.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex + visibleCount)}
              className={`h-2.5 rounded-full transition-all ${
                dotIndex === logicalIndex
                  ? 'w-8 bg-jaz-dark'
                  : 'w-2.5 bg-jaz-dark/40'
              }`}
            />
          ))}
        </div>

        {/* View All Button Reveal */}
        <div
          className={`mt-10 text-center transition-all duration-700 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            to="/service"
            className="inline-flex items-center gap-2 rounded-xl bg-jaz-dark px-8 py-3 text-sm font-medium text-white shadow-md transition-opacity duration-200 ease-out hover:opacity-90"
          >
            View All Services →
          </Link>
        </div>

      </div>
    </section>
  )
}

export default HomeServicesSection
