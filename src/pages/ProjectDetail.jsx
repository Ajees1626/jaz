import { Link, useParams } from 'react-router-dom'
import { FiCheck, FiChevronRight, FiMail, FiPhone } from 'react-icons/fi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import projects from '../data/projects.json'
import SmoothParagraph from '../components/SmoothParagraph'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="w-full bg-slate-100 px-4 py-20 text-center">
        <h1 className="mb-5 text-2xl font-semibold text-slate-900 sm:text-3xl">Project not found</h1>
        <Link to="/project" className="text-base font-medium text-jaz-dark underline hover:text-jaz">
          Back to Projects
        </Link>
      </section>
    )
  }

  return (
    <>
      <section
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${project.heroImage || project.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="w-full px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">{project.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-3 text-base text-white/90">
            <Link to="/" className="transition-colors duration-200 ease-out hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/project" className="transition-colors duration-200 ease-out hover:text-white">
              Projects
            </Link>
            <span>/</span>
            <span>{project.subtitle || project.title}</span>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-white pt-16 pb-14 sm:-mt-20 sm:rounded-t-[4rem] sm:pt-20 sm:pb-16 md:pb-20">
      <div className="grid w-full gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-[260px_1fr] lg:gap-10 lg:px-10 xl:px-12">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-4 text-lg font-semibold text-jaz-dark">Projects</h3>
              <ul className="space-y-3 text-base">
                {projects.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/project/${item.slug}`}
                      className={`inline-flex items-start gap-2 transition-colors duration-200 ease-out ${
                        item.slug === project.slug
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

          <article className="rounded-lg bg-transparent">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl object-cover shadow-lg aspect-[4/3] sm:aspect-[16/10] lg:aspect-[2/1]"
            />

            <div className="mt-8 space-y-6 text-slate-600">
              <SmoothParagraph className="text-base leading-relaxed sm:text-lg">
                <span className="font-semibold text-slate-800">{project.detailIntro} </span>
                {project.detailBody}
              </SmoothParagraph>
              <SmoothParagraph className="text-base leading-relaxed sm:text-lg">{project.description}</SmoothParagraph>
            </div>

            <div className="mt-8 rounded-xl border border-jaz-dark/60 bg-white p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                {project.highlights.map((point) => (
                  <SmoothParagraph key={point} className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                    <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-jaz-dark" />
                    <span>{point}</span>
                  </SmoothParagraph>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <SmoothParagraph className="text-sm font-medium uppercase tracking-wide text-slate-500">Type</SmoothParagraph>
                <SmoothParagraph className="mt-1 text-base font-semibold text-slate-800">{project.type}</SmoothParagraph>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <SmoothParagraph className="text-sm font-medium uppercase tracking-wide text-slate-500">Location</SmoothParagraph>
                <SmoothParagraph className="mt-1 text-base font-semibold text-slate-800">{project.location}</SmoothParagraph>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <SmoothParagraph className="text-sm font-medium uppercase tracking-wide text-slate-500">Year</SmoothParagraph>
                <SmoothParagraph className="mt-1 text-base font-semibold text-slate-800">{project.year}</SmoothParagraph>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/project"
                className="inline-flex items-center gap-2 rounded-lg bg-jaz-dark px-6 py-3 text-base font-medium text-white transition-colors duration-200 ease-out hover:bg-jaz"
              >
                Back to Projects
                <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default ProjectDetail
