import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiEye, FiMapPin } from 'react-icons/fi'
import projects from '../data/projects.json'
import SmoothParagraph from './SmoothParagraph'

function HomeProjectsSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const toggleCard = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section ref={sectionRef} className="reveal-section bg-jaz-light py-12 sm:py-16 md:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className={`projects-section-reveal ${isInView ? 'projects-section-reveal-visible' : ''}`}>
          <div className="projects-reveal-header mb-10 text-center">
            <span className="inline-flex rounded-full bg-jaz-dark px-7 py-2 text-sm font-medium uppercase tracking-wide text-white">
              Our Projects
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={project.slug}
                className={`projects-reveal-card group relative h-[360px] cursor-pointer perspective-distant sm:h-[420px]`}
                onClick={() => toggleCard(index)}
              >
                <div
                  className="relative h-full w-full transition-transform duration-300 ease-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isActive ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-xl shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <div className="absolute -left-[65%] top-0 h-full w-[45%] -skew-x-12 bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-400 ease-out group-hover:left-[130%] group-hover:opacity-100" />
                    </div>
                    <div className="absolute right-3 top-3 rounded-full bg-jaz-dark/90 p-2 text-white">
                      <FiEye className="h-4 w-4" />
                    </div>
                    <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-xl border border-white/20 bg-linear-to-br from-jaz-dark via-jaz to-jaz-dark p-6 text-white shadow-2xl sm:p-7"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div>
                      <h3 className="mb-4 text-2xl font-normal leading-tight sm:text-3xl">{project.title}</h3>
                      <SmoothParagraph className="mb-6 text-sm leading-relaxed text-white/95 sm:text-base">
                        {project.description}
                      </SmoothParagraph>
                      <div className="space-y-2.5 text-base font-normal sm:text-lg">
                        <SmoothParagraph className="flex items-center gap-2.5">
                          <FiMapPin className="h-5 w-5" />
                          <span>{project.location}</span>
                        </SmoothParagraph>
                        <SmoothParagraph className="flex items-center gap-2.5">
                          <FiCalendar className="h-5 w-5" />
                          <span>{project.year}</span>
                        </SmoothParagraph>
                      </div>
                    </div>

                    <Link
                      to={`/project/${project.slug}`}
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-3.5 text-lg font-medium text-jaz-dark transition-colors duration-200 ease-out hover:bg-white"
                    >
                      View Project
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                      <div className="absolute -left-[65%] top-0 h-full w-[45%] -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-400 ease-out group-hover:left-[130%] group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

          <div className="projects-reveal-footer mt-10 text-center">
            <Link
              to="/project"
              className="inline-flex items-center gap-2 rounded-xl bg-jaz-dark px-8 py-3 text-sm font-medium text-white shadow-md transition-opacity duration-200 ease-out hover:opacity-90"
            >
              View All Projects
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeProjectsSection
