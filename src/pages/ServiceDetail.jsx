import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiCheck, FiChevronRight, FiMail, FiPhone } from 'react-icons/fi'
import services from '../data/services.json'
import SmoothParagraph from '../components/SmoothParagraph'

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const highlightRef = useRef(null)

  const [heroVisible, setHeroVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)
  const [highlightVisible, setHighlightVisible] = useState(false)
  const [typedText, setTypedText] = useState('')

  /* HERO OBSERVER - RUN ONCE */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  /* TYPEWRITER EFFECT - RUN ONCE */
  useEffect(() => {
    if (!heroVisible || !service) return

    let index = 0
    const fullText = service.title

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(interval)
    }, 50)

    return () => clearInterval(interval)
  }, [heroVisible, service])

  /* SCROLL ANIMATION OBSERVER */
  useEffect(() => {
    const options = { threshold: 0.15 }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === contentRef.current)
            setContentVisible(true)
          if (entry.target === imageRef.current)
            setImageVisible(true)
          if (entry.target === highlightRef.current)
            setHighlightVisible(true)

          obs.unobserve(entry.target)
        }
      })
    }, options)

    if (contentRef.current) observer.observe(contentRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (highlightRef.current) observer.observe(highlightRef.current)

    return () => observer.disconnect()
  }, [])

  if (!service) {
    return (
      <section className="bg-slate-100 py-20 text-center">
        <h1 className="mb-5 text-2xl font-semibold">Service not found</h1>
        <Link to="/service" className="text-jaz-dark underline">
          Back to Services
        </Link>
      </section>
    )
  }

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100vh] items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${service.heroImage || service.image}')`,
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center text-white sm:px-6 md:px-8 lg:px-10">
          <h1 className="mb-6 text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl">
            {typedText}
             
          </h1>

          <div
            className={`flex flex-wrap items-center justify-center gap-3 text-base transition-all duration-700 ${
              heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/service">Services</Link>
            <span>/</span>
            <span>{service.subtitle || service.title}</span>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-white pt-16 pb-16 sm:-mt-20 sm:pt-20 md:pb-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-[260px_1fr] lg:px-10">

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-4 text-lg font-semibold text-jaz-dark">
                Categories
              </h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/service/${item.slug}`}
                      className={`transition-colors ${
                        item.slug === service.slug
                          ? 'font-medium text-jaz-dark'
                          : 'text-slate-600 hover:text-jaz-dark'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-jaz-dark p-6 text-center text-white shadow-lg">
              <h3 className="text-xl font-semibold">
                You Still Have A Question
              </h3>

              <SmoothParagraph className="mt-3 text-white/90">
                Contact us and we will answer shortly.
              </SmoothParagraph>

              <div className="mt-4 space-y-3">
                <a
                  href="mailto:info@jazbuildersgroup.com"
                  className="block rounded-lg bg-white py-2 text-sm font-medium text-jaz-dark"
                >
                  <FiMail className="mr-2 inline h-4 w-4" />
                  info@jazbuildersgroup.com
                </a>
                <a
                  href="tel:+919363933050"
                  className="block rounded-lg bg-white px-4 py-2 text-sm font-medium text-jaz-dark"
                >
                  <FiPhone className="mr-2 inline h-4 w-4" />
                  +91 93639 33050
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <article
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              ref={imageRef}
              src={service.image}
              alt={service.title}
              className={`w-full rounded-2xl object-cover shadow-lg aspect-[4/3] sm:aspect-[16/10] lg:aspect-[2/1] transition-all duration-700 ${
                imageVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            />

            <div className="mt-10 space-y-8 text-slate-600">
              <p className="text-base leading-relaxed sm:text-lg">
                {service.detailIntro && (
                  <span className="font-semibold text-slate-800">
                    {service.detailIntro}{' '}
                  </span>
                )}
                <span dangerouslySetInnerHTML={{ __html: service.detailBody || '' }} />
              </p>

              <p className="text-base leading-relaxed sm:text-lg">
                <span dangerouslySetInnerHTML={{ __html: service.detailBody2 || '' }} />
              </p>
            </div>

            <div
              ref={highlightRef}
              className={`mt-12 rounded-xl border border-jaz-dark/40 p-8 transition-all duration-700 ${
                highlightVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {service.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FiCheck className="mt-1 text-jaz-dark" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Link
                to="/service"
                className="group inline-flex items-center gap-2 rounded-lg bg-jaz-dark px-6 py-3 text-white transition hover:bg-jaz"
              >
                Back to Services
                <FiChevronRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default ServiceDetail
