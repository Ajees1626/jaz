import { Link } from 'react-router-dom'

function HomeAboutSection() {
  return (
    <section className="relative z-20 -mt-16 rounded-t-[3rem] bg-white pt-16 pb-12 sm:-mt-20 sm:rounded-t-[4rem] sm:pt-20 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839378/ABOUT_uwlhic.webp"
                alt="House key and home model"
                className="h-[280px] w-full object-cover sm:h-[340px] md:h-[380px]"
              />
            </div>
          </div>

          <div className="transition-all duration-1000 ease-out delay-200 opacity-100 translate-x-0">
            <div className="mb-4 transition-all duration-800 ease-out delay-300 opacity-100 translate-y-0">
              <span className="text-jaz text-sm sm:text-2xl font-normal uppercase tracking-wider">
                ABOUT US
              </span>
            </div>

            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-base leading-relaxed text-left transition-all duration-800 ease-out delay-500 opacity-100 translate-y-0">
                JAZ Builders &amp; Promoters is a professional construction and real estate
                company providing services in <strong>Construction, PEB structures, Real
                estate, Joint Ventures, Architectural Design, and Project consulting.</strong>{' '}
                We deliver practical, cost-effective, and reliable solutions for
                residential, commercial, and industrial projects.
            </p>

            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-base leading-relaxed text-left transition-all duration-800 ease-out delay-700 opacity-100 translate-y-0">
                Our team focuses on quality execution, transparent processes, and timely
                completion. From planning and design to execution and consulting, we handle
                every project with clarity and responsibility.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transition-all duration-800 ease-out delay-1000 opacity-100 translate-y-0">
              <Link
                to="/contact"
                className="group bg-jaz text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-normal hover:bg-jaz transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                Get Free Quote
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform fill-none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default HomeAboutSection
