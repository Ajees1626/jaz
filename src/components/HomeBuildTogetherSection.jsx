import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const stats = [
  { value: '150+', label: 'Projects' },
  { value: '18+', label: 'Years' },
  { value: '99%', label: 'Satisfaction' },
]

function HomeBuildTogetherSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex rounded-full bg-jaz-dark px-5 py-2 text-sm font-medium uppercase tracking-wide text-white">
            Get Start Today
          </span>

          <h2 className="mt-4 text-5xl font-normal leading-tight text-slate-800 sm:text-6xl">
            Let&apos;s build
            <br />
            something <span className="text-jaz-dark">great</span>
            <br />
            together!
          </h2>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            Don&apos;t wait any longer to bring your construction dreams to life.
            Partner with JAZ Builders and Promoters and experience unparalleled
            service and quality.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-jaz-dark px-7 py-3.5 text-base font-medium text-white transition hover:opacity-90"
            >
              Get Free Quote
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/project"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-slate-700 transition hover:bg-slate-50"
            >
              View Projects
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
            {stats.map((item) => (
              <div key={item.label} className="text-left">
                <p className="text-4xl font-normal text-slate-700">{item.value}</p>
                <p className="mt-1 text-xs font-light uppercase tracking-wide text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839324/GET_yvbzsb.webp"
              alt="Modern building"
              className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 z-10 flex items-center gap-3 rounded-xl border border-jaz-dark/30 bg-white px-5 py-3.5 shadow-lg sm:-bottom-6 sm:-left-8 lg:-left-10">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-jaz-dark text-white">
              <FiCheckCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-jaz-dark">Expert Team</p>
              <p className="text-xs text-slate-500">Professional Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBuildTogetherSection
