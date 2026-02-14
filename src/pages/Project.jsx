import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import projects from '../data/projects.json'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'

function Project() {
  const heroRef = useRef(null)
  const gridRef = useRef(null)

  const [heroVisible, setHeroVisible] = useState(false)
  const [gridVisible, setGridVisible] = useState(false)

  /* HERO OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.4 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  /* GRID OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setGridVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  /* LETTER ANIMATION */
  const AnimatedLetters = ({ text, visible }) => {
    return (
      <>
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{ transitionDelay: `${index * 40}ms` }}
            className={`inline-block transition-all duration-700 ease-out ${
              visible
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-12 blur-sm'
            }`}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </>
    )
  }

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
      >
        <div
          className={`hero-bg-zoom absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat ${
            heroVisible ? 'is-visible' : ''
          }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839588/project_lavxtb.webp')",
          }}
        />
        <div className="relative z-10 overflow-hidden text-center text-white">
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            <AnimatedLetters text="OUR PROJECTS" visible={heroVisible} />
          </h1>

          <div
            className={`transition-all duration-700 ${
              heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>{' '}
            / Projects
          </div>
        </div>
      </section>

      {/* GRID */}
      <section
        ref={gridRef}
        className="relative z-20 -mt-16 rounded-t-[3rem] bg-jaz-dark pt-20 pb-24"
      >
        <div className="px-6">
          <div className="grid gap-10 sm:grid-cols-2">
            {projects.map((item, index) => (
              <AnimatedCard
                key={item.slug}
                item={item}
                index={index}
                gridVisible={gridVisible}
              />
            ))}
          </div>
        </div>
      </section>

      <HomeBuildTogetherSection />
    </>
  )
}

/* CARD COMPONENT */
function AnimatedCard({ item, index, gridVisible }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`group rounded-xl bg-slate-100 shadow-2xl transition-all duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 scale-100 blur-0'
          : 'opacity-0 translate-y-20 scale-95 blur-sm'
      }`}
    >
      <Link to={`/project/${item.slug}`} className="block">

        {/* IMAGE */}
        <div className="relative h-72 overflow-hidden sm:h-80">
          <img
            src={item.image}
            alt={item.title}
            className={`h-full w-full object-cover transition-all duration-700 ${
              visible
                ? 'scale-100 brightness-100'
                : 'scale-110 brightness-75'
            } group-hover:scale-110`}
          />
        </div>

        {/* CONTENT */}
        <div
          className={`p-6 transition-all duration-700 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl bg-[#e8f1f3] px-4 py-3 rounded-md">
            {item.title}
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            {item.description.length > 95
              ? `${item.description.slice(0, 95)}...`
              : item.description}
          </p>

          <span className="mt-4 inline-flex items-center gap-2 font-medium text-jaz-dark transition group-hover:text-jaz">
            View Details
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-3" />
          </span>
        </div>
      </Link>
    </article>
  )
}

export default Project
