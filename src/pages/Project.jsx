import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import projects from '../data/projects.json'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'
import SmoothParagraph from '../components/SmoothParagraph'

function Project() {
  return (
    <>
      <section
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839588/project_lavxtb.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="w-full px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-4xl font-normal sm:text-6xl md:text-7xl lg:text-8xl">OUR PROJECTS</h1>
          <div className="flex items-center justify-center gap-3 text-base text-white/90">
            <Link to="/" className="transition-colors duration-200 ease-out hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Projects</span>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-jaz-dark pt-16 pb-12 sm:-mt-20 sm:rounded-t-[4rem] sm:pt-20 sm:pb-16 md:pb-20 lg:pt-24 lg:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {projects.map((item) => (
              <article key={item.slug} className="group overflow-hidden rounded-xl bg-slate-100 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <Link to={`/project/${item.slug}`} className="block">
                  <div className="relative h-72 overflow-hidden sm:h-80">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/90 px-4 py-2 text-[14px] font-semibold uppercase tracking-wide text-jaz-dark">
                      Completed
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h2 className="rounded-md bg-[#e8f1f3] px-4 py-3 text-2xl  text-slate-800 transition-colors duration-200 ease-out group-hover:text-jaz sm:text-4xl">
                      {item.title}
                    </h2>
                    <SmoothParagraph className="mt-4 text-md leading-relaxed text-slate-600">
                      {item.description.length > 95
                        ? `${item.description.slice(0, 95)}...`
                        : item.description}
                    </SmoothParagraph>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-md font-medium text-jaz-dark  transition-all duration-200 ease-out group-hover:font-semibold group-hover:text-jaz">
                      View Details
                      <FiArrowRight className="h-3.5 w-3.5 transition-all" />
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
