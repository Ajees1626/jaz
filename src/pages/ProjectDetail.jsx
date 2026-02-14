import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiChevronRight, FiMail, FiPhone, FiCheck } from 'react-icons/fi'
import projects from '../data/projects.json'
import SmoothParagraph from '../components/SmoothParagraph'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  const heroRef = useRef(null)

  const [typedText, setTypedText] = useState('')
  const [visibleItems, setVisibleItems] = useState({})

  /* ---------------- HERO TYPEWRITER ---------------- */
  useEffect(() => {
    if (!project?.title) return

    let i = 0
    const text = project.title

    const typing = setInterval(() => {
      setTypedText(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(typing)
    }, 60)

    return () => clearInterval(typing)
  }, [project])

  /* ---------------- SCROLL ANIMATION ---------------- */
  const useScrollReveal = (key) => {
    const ref = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [key]: true }))
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.2 }
      )

      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])

    return [ref, visibleItems[key]]
  }

  const [imgRef, imgVisible] = useScrollReveal('image')
  const [p1Ref, p1Visible] = useScrollReveal('p1')
  const [p2Ref, p2Visible] = useScrollReveal('p2')
  const [boxRef, boxVisible] = useScrollReveal('box')

  if (!project) return null

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100vh] items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${project.heroImage || project.image}')`,
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-medium">
            {typedText}
            
          </h1>
        </div>
      </section>

      {/* ---------------- CONTENT ---------------- */}
      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-white pt-16 pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[260px_1fr]">

          {/* -------- SIDEBAR STICKY FIXED -------- */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-4 text-lg font-semibold text-jaz-dark">
                Projects
              </h3>
              <ul className="space-y-3">
                {projects.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/project/${item.slug}`}
                      className={`${
                        item.slug === project.slug
                          ? 'font-semibold text-jaz-dark'
                          : 'text-slate-600 hover:text-jaz-dark'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-jaz-dark p-6 text-white text-center shadow-lg">
              <h3 className="text-xl font-semibold">
                You Still Have A Question
              </h3>

              <SmoothParagraph className="mt-3 text-white/90">
                Contact us and we will answer shortly.
              </SmoothParagraph>

              <div className="mt-4 space-y-3">
                <a
                  href="mailto:info@jazbuildersgroup.com"
                  className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-jaz-dark"
                >
                  <FiMail /> info@jazbuildersgroup.com
                </a>
                <a
                  href="tel:+919363933050"
                  className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-jaz-dark"
                >
                  <FiPhone /> +91 93639 33050
                </a>
              </div>
            </div>
          </aside>

          {/* -------- MAIN CONTENT -------- */}
          <article className="space-y-10">

            {/* IMAGE */}
            <div
              ref={imgRef}
              className={`transition-all duration-1000 ${
                imgVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* P TAG 1 */}
            <p
              ref={p1Ref}
              className={`text-lg leading-relaxed text-slate-700 transition-all duration-1000 ${
                p1Visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              {project.detailIntro} {project.detailBody}
            </p>

            {/* P TAG 2 */}
            <p
              ref={p2Ref}
              className={`text-lg leading-relaxed text-slate-700 transition-all duration-1000 ${
                p2Visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              {project.description}
            </p>

            {/* BOX WITH LI */}
            <div
              ref={boxRef}
              className={`rounded-xl border border-jaz-dark/30 p-8 transition-all duration-1000 ${
                boxVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheck className="mt-1 text-jaz-dark" />
                  <span>Systematic construction methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="mt-1 text-jaz-dark" />
                  <span>Quality checks at every stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="mt-1 text-jaz-dark" />
                  <span>Reliable structural execution</span>
                </li>
              </ul>
            </div>

            <Link
              to="/project"
              className="inline-flex items-center gap-2 rounded-lg bg-jaz-dark px-6 py-3 text-white hover:bg-jaz transition"
            >
              Back to Projects
              <FiChevronRight />
            </Link>

          </article>
        </div>
      </section>
    </>
  )
}

export default ProjectDetail
