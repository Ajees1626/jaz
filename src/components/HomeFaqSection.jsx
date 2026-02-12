import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { MdKeyboardArrowRight, MdOutlineApartment } from 'react-icons/md'

const faqItems = [
  {
    question: 'What services do you offer?',
    answer:
      'JAZ Builders offers a comprehensive range of construction services including building construction, architecture design, building renovation, building maintenance, flooring and roofing, and project management. We handle everything from initial design to final completion.',
  },
  {
    question: 'What types of projects do you specialize in?',
    answer:
      'We specialize in residential, commercial, and industrial construction projects. Our expertise includes new construction, renovations, restorations, and mixed-use developments. With over 25 years of experience, we\'ve successfully completed over 800 projects across various sectors.',
  },
  {
    question: 'How do I start a project with your company?',
    answer:
      'Starting a project with us is easy! First, contact us through our website or phone to schedule a consultation. During the consultation, we\'ll discuss your vision, requirements, and budget. Then we\'ll provide a detailed proposal and timeline. Once approved, we\'ll begin the project with regular updates throughout the construction process.',
  },
]

function HomeFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="relative z-10 bg-jaz py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <span className="inline-flex rounded-full bg-jaz-dark px-6 py-2 text-sm font-medium uppercase tracking-wide text-white">
            Frequently Asked Questions
          </span>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839178/fq1_x20s4z.webp"
                  alt="Modern house"
                  className="h-52 w-full object-cover sm:h-64"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839157/fq2_zp6y2w.webp"
                  alt="Villa front view"
                  className="h-52 w-full object-cover sm:h-64"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839195/fq3_ujpngb.webp"
                  alt="Residential project"
                  className="h-52 w-full object-cover sm:h-64"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839224/fq4_jyutbk.webp"
                  alt="Architecture exterior"
                  className="h-52 w-full object-cover sm:h-64"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-jaz-dark text-white shadow-2xl">
                <MdOutlineApartment className="h-11 w-11" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isActive = index === activeIndex

              return (
                <div
                  key={item.question}
                  className="rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start gap-3 px-4 py-4 text-left transition-colors duration-300 hover:bg-jaz-light/15 sm:px-5"
                    aria-expanded={isActive}
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-jaz-light/35 text-sm font-semibold text-jaz-dark">
                      {index + 1}
                    </span>
                    <span className="flex-1 text-lg font-medium leading-snug text-slate-700 sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={`mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jaz-light/40 text-jaz-dark transition-transform duration-300 ${
                        isActive ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <FiChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-400 ease-in-out ${
                      isActive
                        ? 'grid-rows-[1fr] border-t border-slate-100'
                        : 'grid-rows-[0fr] border-t border-transparent'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-5 pt-3 text-base leading-relaxed text-slate-600 sm:px-5">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white px-6 py-7 shadow-lg sm:px-7">
            <h3 className="text-2xl font-small text-jaz-dark">Still have questions?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
              Our team is here to help! Contact us today and we&apos;ll be happy to answer any questions you may have about our services.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-jaz-dark px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Contact Us
              <MdKeyboardArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFaqSection
