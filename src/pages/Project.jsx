import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import projects from '../data/projects.json'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'

function Project() {
  return (
    <>
      <section
        className="relative flex min-h-[62vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-5 text-6xl font-normal sm:text-7xl">OUR PROJECTS</h1>
          <div className="flex items-center justify-center gap-3 text-base text-white/90">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Projects</span>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-jaz-dark pt-16 pb-12 sm:-mt-20 sm:rounded-t-[4rem] sm:pt-20 sm:pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-lg bg-slate-100 shadow-lg">
                <Link to={`/project/${item.slug}`} className="block">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-jaz-dark">
                      Completed
                    </span>
                  </div>

                  <div className="p-4">
                    <h2 className="rounded-md bg-[#e8f1f3] px-3 py-2 text-3xl font-medium text-slate-800">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.description.length > 95
                        ? `${item.description.slice(0, 95)}...`
                        : item.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-jaz-dark">
                      View Details
                      <FiArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HomeBuildTogetherSection />
    </>
  )
}

export default Project
