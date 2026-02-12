import { Link, useParams } from 'react-router-dom'
import { FiCheck, FiChevronRight, FiMail, FiPhone } from 'react-icons/fi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import projects from '../data/projects.json'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="w-full bg-slate-100 px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-semibold text-slate-900">Project not found</h1>
        <Link to="/project" className="font-medium text-jaz-dark underline">
          Back to Projects
        </Link>
      </section>
    )
  }

  return (
    <>
      <section
        className="relative flex min-h-[58vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${project.heroImage || project.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-normal sm:text-5xl md:text-6xl">{project.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/90 sm:text-base">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/project" className="transition hover:text-white">
              Projects
            </Link>
            <span>/</span>
            <span>{project.subtitle || project.title}</span>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-white pt-16 pb-12 sm:-mt-20 sm:rounded-t-[4rem] sm:pt-20 sm:pb-16 md:pb-20">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 lg:grid-cols-[260px_1fr] lg:gap-8 lg:px-8">
          <aside className="space-y-4">
            <div className="rounded-lg bg-linear-to-b from-jaz to-jaz-dark p-6 text-center text-white shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <HiOutlineBuildingOffice2 className="h-9 w-9" />
              </div>
              <h2 className="text-2xl font-medium">Projects</h2>
              <p className="mt-3 text-sm text-white/90">
                Residential, commercial, and industrial projects executed with quality and clarity.
              </p>
            </div>

            <div className="rounded-lg bg-white p-5 shadow">
              <h3 className="mb-3 text-2xl font-medium text-jaz-dark">Projects</h3>
              <ul className="space-y-2 text-sm">
                {projects.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/project/${item.slug}`}
                      className={`inline-flex items-start gap-2 transition ${
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

            <div className="rounded-lg bg-jaz-dark p-5 text-center text-white shadow-lg">
              <h3 className="text-3xl font-medium leading-tight">You Still Have A Question</h3>
              <p className="mt-3 text-sm text-white/90">
                If you cannot find answer to your question in our FAQ, you can always contact us and we
                will answer shortly.
              </p>
              <a
                href="mailto:info@jazbuildersgroup.com"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white/95 px-3 py-2 text-xs font-medium text-jaz-dark"
              >
                <FiMail className="h-4 w-4" />
                info@jazbuildersgroup.com
              </a>
              <a
                href="tel:+919363933050"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white/95 px-3 py-2 text-sm font-medium text-jaz-dark"
              >
                <FiPhone className="h-4 w-4" />
                +91 93639 33050
              </a>
            </div>
          </aside>

          <article className="rounded-lg bg-transparent">
            <img
              src={project.image}
              alt={project.title}
              className="h-[260px] w-full rounded-2xl object-cover shadow-lg sm:h-[360px] lg:h-[430px]"
            />

            <div className="mt-6 space-y-4 text-slate-600">
              <p className="text-base leading-relaxed sm:text-lg">
                <span className="font-semibold text-slate-800">{project.detailIntro} </span>
                {project.detailBody}
              </p>
              <p className="text-base leading-relaxed sm:text-lg">{project.description}</p>
            </div>

            <div className="mt-6 rounded-lg border border-jaz-dark/60 bg-white p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {project.highlights.map((point) => (
                  <p key={point} className="flex items-start gap-2 text-base text-slate-700">
                    <FiCheck className="mt-1 h-4 w-4 shrink-0 text-jaz-dark" />
                    <span>{point}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-500">Type</p>
                <p className="text-base font-semibold text-slate-800">{project.type}</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-500">Location</p>
                <p className="text-base font-semibold text-slate-800">{project.location}</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-500">Year</p>
                <p className="text-base font-semibold text-slate-800">{project.year}</p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/project"
                className="inline-flex items-center gap-2 rounded-md bg-jaz-dark px-5 py-2.5 text-sm font-medium text-white transition hover:bg-jaz"
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
