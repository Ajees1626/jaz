import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiCheck, FiChevronRight, FiMail, FiPhone } from 'react-icons/fi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import services from '../data/services.json'
import SmoothParagraph from '../components/SmoothParagraph'

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const [heroVisible, setHeroVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  /* CONTENT OBSERVER – observe article so animation runs when content area is in view */
  useEffect(() => {
    if (!service) return
    const observer = new IntersectionObserver(
      ([entry]) => setContentVisible(entry.isIntersecting),
      { threshold: 0.05, rootMargin: '0px 0px -80px 0px' }
    )
    const raf = requestAnimationFrame(() => {
      if (contentRef.current) observer.observe(contentRef.current)
    })
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [service])

  const AnimatedLetters = ({ text, visible, delay = 0 }) => (
    <>
      {(text != null ? String(text) : '').split('').map((char, i) => (
        <span
          key={i}
          style={{ transitionDelay: `${i * 30 + delay}ms` }}
          className={`inline-block transition-all duration-500 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  )

  /* Word-by-word animation (same as AboutHistorySection) – no mid-word break */
  const AnimatedWords = ({ text, visible, delay = 0 }) =>
    (text != null ? String(text) : '')
      .split(/(\s+)/)
      .map((part, index) => {
        const isSpace = /^\s+$/.test(part)
        if (isSpace) return <span key={index}>{part}</span>
        return (
          <span
            key={index}
            className={`inline transition-all duration-300 ease-out ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: `${delay + index * 25}ms` }}
          >
            {part}
          </span>
        )
      })

  if (!service) {
    return (
      <section className="w-full bg-slate-100 px-4 py-20 text-center">
        <h1 className="mb-5 text-2xl font-semibold text-slate-900 sm:text-3xl">Service not found</h1>
        <Link to="/service" className="text-base font-medium text-jaz-dark underline hover:text-jaz">
          Back to Services
        </Link>
      </section>
    )
  }

  return (
    <>
      <section
        ref={heroRef}
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
      >
        <div
          className={`hero-bg-zoom absolute inset-0 z-0 bg-cover bg-center bg-no-repeat ${
            heroVisible ? 'is-visible' : ''
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${service.heroImage || service.image}')`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="relative z-10 w-full overflow-hidden px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <AnimatedLetters text={service.title} visible={heroVisible} />
          </h1>
          <div
            className={`flex flex-wrap items-center justify-center gap-3 text-base text-white/90 transition-all duration-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <Link to="/" className="transition-colors duration-200 ease-out hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/service" className="transition-colors duration-200 ease-out hover:text-white">
              Services
            </Link>
            <span>/</span>
            <span>{service.subtitle || service.title}</span>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-white pt-16 pb-14 sm:-mt-20 sm:rounded-t-[4rem] sm:pt-20 sm:pb-16 md:pb-20">
      <div className="grid w-full gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-[260px_1fr] lg:gap-10 lg:px-10 xl:px-12">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
             

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-4 text-lg font-semibold text-jaz-dark">Categories</h3>
              <ul className="space-y-3 text-base">
                {services.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/service/${item.slug}`}
                      className={`inline-flex items-start gap-2 transition-colors duration-200 ease-out ${
                        item.slug === service.slug
                          ? 'font-medium text-jaz-dark'
                          : 'text-slate-600 hover:text-jaz-dark'
                      }`}
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-jaz-dark" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-jaz-dark p-6 text-center text-white shadow-lg">
              <h3 className="text-xl font-semibold leading-snug">You Still Have A Question</h3>
              <SmoothParagraph className="mt-3 text-base leading-relaxed text-white/90">
                If you cannot find answer to your question in our FAQ, you can always contact us and we
                will answer shortly.
              </SmoothParagraph>
              <div className="mt-4 space-y-3">
                <a
                  href="mailto:info@jazbuildersgroup.com"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/95 px-4 py-2.5 text-sm font-medium text-jaz-dark transition-colors duration-200 ease-out hover:bg-white"
                >
                  <FiMail className="h-4 w-4" />
                  info@jazbuildersgroup.com
                </a>
                <a
                  href="tel:+919363933050"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/95 px-4 py-2.5 text-sm font-medium text-jaz-dark transition-colors duration-200 ease-out hover:bg-white"
                >
                  <FiPhone className="h-4 w-4" />
                  +91 93639 33050
                </a>
              </div>
            </div>
          </aside>

          <article ref={contentRef} className="rounded-lg bg-transparent">
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-2xl object-cover shadow-lg aspect-[4/3] sm:aspect-[16/10] lg:aspect-[2/1]"
            />

            {/* CONTENT */}
            <div className="mt-10 space-y-8 overflow-hidden text-slate-600">
              {/* Paragraph 1 – word-by-word like AboutHistorySection */}
              <p className="text-base leading-relaxed sm:text-lg">
                <span className="font-semibold text-slate-800">
                  <AnimatedWords
                    text={`${service.detailIntro} `}
                    visible={contentVisible}
                    delay={0}
                  />
                </span>
                <AnimatedWords
                  text={service.detailBody}
                  visible={contentVisible}
                  delay={300}
                />
              </p>

              {/* Paragraph 2 */}
              <p className="text-base leading-relaxed sm:text-lg">
                <AnimatedWords
                  text={service.detailBody2}
                  visible={contentVisible}
                  delay={600}
                />
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div
              className={`mt-10 rounded-xl border border-jaz-dark/60 bg-white p-8 shadow-sm transition-all duration-700 ${
                contentVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {service.highlights.map((point, idx) => (
                  <div
                    key={point}
                    className={`flex items-start gap-3 transition-all duration-700 ${
                      contentVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-6 opacity-0'
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <FiCheck className="mt-1 h-4 w-4 shrink-0 text-jaz-dark" />

                    <span>
                      <AnimatedLetters
                        text={point}
                        visible={contentVisible}
                        delay={idx * 200}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <div
              className={`mt-12 transition-all duration-700 ${
                contentVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <Link
                to="/service"
                className="group inline-flex items-center gap-2 rounded-lg bg-jaz-dark px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-jaz"
              >
                Back to Services
                <FiChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default ServiceDetail
