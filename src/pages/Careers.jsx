import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'
import SmoothParagraph from '../components/SmoothParagraph'

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    {
      title: 'Site Engineer',
      description:
        'Responsible for managing day-to-day site operations and ensuring construction work is executed as per drawings and specifications. Coordinates with contractors and supervises site activities to maintain quality and safety standards. Must ensure timely completion of project milestones.',
    },
    {
      title: 'Structural Engineer',
      description:
        'Responsible for designing, analyzing, and reviewing structural elements to ensure stability and safety. Collaborates with architects and project teams to develop efficient structural solutions. Ensures compliance with building codes and project requirements.',
    },
    {
      title: 'Marketing Manager',
      description:
        'Leads the development and execution of marketing strategies to enhance brand visibility and drive business growth. Manages campaigns, digital presence, and market research initiatives. Collaborates with sales and creative teams to achieve marketing goals.',
    },
    {
      title: 'Designer - CAD 2D & 3D',
      description:
        'Creates precise 2D drawings and 3D models using CAD software for architectural and structural designs. Works closely with engineers and project teams to translate concepts into detailed plans. Ensures accuracy and adherence to project specifications.',
    },
  ]

  useEffect(() => {
    if (!selectedJob) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedJob])

  const openApplyModal = (job) => {
    setSelectedJob(job)
  }

  const closeApplyModal = () => {
    setSelectedJob(null)
  }

  return (
    <>
      <section
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839697/Career_wvucaf.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="w-full px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-4xl font-normal sm:text-6xl md:text-7xl lg:text-8xl">CAREERS</h1>
          <div className="flex items-center justify-center gap-3 text-base text-white/90">
            <Link to="/" className="transition-colors duration-200 ease-out hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Careers</span>
          </div>
        </div>
      </section>

      <article className="relative z-20 -mt-8 overflow-hidden rounded-t-2xl bg-white sm:-mt-12 sm:rounded-t-3xl md:-mt-16 md:rounded-t-[40px] lg:-mt-20 lg:rounded-t-[60px] xl:rounded-t-[80px]">
        <section aria-label="Job openings" className="bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <h2 className="mb-8 text-center text-3xl font-normal text-slate-900 sm:mb-10 sm:text-4xl md:text-5xl py-8">
              We&apos;re Hiring
            </h2>

            <div className="space-y-6 sm:space-y-7">
              {jobs.map((job) => (
                <article
                  key={job.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-6 md:p-8"
                  itemScope
                  itemType="https://schema.org/JobPosting"
                >
                  <h3 className="mb-3 text-3xl py-2 font-normal text-slate-800 sm:text-4xl" itemProp="title">
                    {job.title}
                  </h3>
                  <SmoothParagraph className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg" itemProp="description">
                    {job.description}
                  </SmoothParagraph>
                  <button
                    type="button"
                    onClick={() => openApplyModal(job)}
                    className="inline-flex items-center justify-center rounded-xl bg-jaz-dark px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-jaz sm:px-6 sm:py-3 sm:text-base"
                    aria-label={`Apply for ${job.title} position`}
                  >
                    Apply Now
                  </button>
                </article>
              ))}
            </div>

            <SmoothParagraph className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
              We&apos;re on the lookout for a skilled and experienced professional to join our
              dynamic team and grow with us. If you&apos;re passionate about making an impact with
              your expertise, please send your CV to{' '}
              <a
                href="mailto:info@jazbuildersgroup.com"
                className="font-normal text-jaz-dark transition-colors duration-300 hover:text-jaz"
                aria-label="Send email to info@jazbuildersgroup.com"
              >
                info@jazbuildersgroup.com
              </a>
              .
            </SmoothParagraph>
          </div>
        </section>
      </article>

      {selectedJob && (
        <div
          className="fixed inset-0 z-120 flex items-center justify-center bg-black/55 px-3 py-6 sm:px-6"
          onClick={closeApplyModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Apply for ${selectedJob.title}`}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-linear-to-r from-jaz-dark to-jaz px-6 py-4 text-white sm:px-8">
              <h3 className="text-xl font-medium sm:text-2xl">
                Apply for <span className="font-semibold">{selectedJob.title}</span>
              </h3>
              <button
                type="button"
                onClick={closeApplyModal}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/40 hover:scale-105"
                aria-label="Close apply form"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <form
              className="max-h-[76vh] overflow-y-auto px-5 py-5 sm:px-8 sm:py-6"
              onSubmit={(event) => {
                event.preventDefault()
                closeApplyModal()
              }}
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="graduationYear" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Year of Graduation <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="graduationYear"
                    type="number"
                    min="1980"
                    max="2100"
                    required
                    placeholder="e.g., 2020"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    required
                    defaultValue=""
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Experience in Years <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="experience"
                    type="number"
                    min="0"
                    max="60"
                    required
                    placeholder="e.g., 5"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="currentCtc" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Current CTC <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="currentCtc"
                    type="text"
                    required
                    placeholder="e.g., 5,00,000"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="expectedCtc" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Expected CTC <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="expectedCtc"
                    type="text"
                    required
                    placeholder="e.g., 7,00,000"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="noticePeriod" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Notice Period <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="noticePeriod"
                    type="text"
                    required
                    placeholder="e.g., 30 days"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="location"
                    type="text"
                    required
                    placeholder="Enter your current location"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>
              </div>

              <SmoothParagraph className="mt-5 text-sm text-slate-500">
                Verification will appear when you click Submit.
              </SmoothParagraph>

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-linear-to-r from-jaz-dark to-jaz px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-95 hover:shadow-lg active:scale-[0.99]"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
      <HomeBuildTogetherSection/>
    </>
  )
}

export default Careers
