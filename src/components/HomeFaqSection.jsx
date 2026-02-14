import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { MdKeyboardArrowRight, MdOutlineApartment } from 'react-icons/md'
import { motion } from 'framer-motion'
import SmoothParagraph from './SmoothParagraph'

const faqItems = [
  {
    question: 'What services do you offer?',
    answer:
      'JAZ Builders offers a comprehensive range of construction services including building construction, architecture design, building renovation, building maintenance, flooring and roofing, and project management.',
  },
  {
    question: 'What types of projects do you specialize in?',
    answer:
      'We specialize in residential, commercial, and industrial construction projects.',
  },
  {
    question: 'How do I start a project with your company?',
    answer:
      'Starting a project with us is easy! Contact us to schedule a consultation.',
  },
]

/* Premium Letter Animation */
const LetterAnimation = ({ text }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.025,
            ease: 'easeOut',
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
  )
}

function HomeFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="relative z-10 overflow-hidden bg-jaz py-14 sm:py-16 md:py-20 lg:py-24">
      {/* Proper Container Spacing */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="inline-flex rounded-full bg-jaz-dark px-6 py-2 text-sm font-medium uppercase tracking-wide text-white shadow-md">
            <LetterAnimation text="Frequently Asked Questions" />
          </span>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-2">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839178/fq1_x20s4z.webp',
                'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839157/fq2_zp6y2w.webp',
                'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839195/fq3_ujpngb.webp',
                'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839224/fq4_jyutbk.webp',
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={img}
                    alt="Project"
                    className="h-48 w-full object-cover sm:h-56 md:h-64"
                  />
                </motion.div>
              ))}
            </div>

            {/* Center Icon Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: 'backOut' }}
              viewport={{ once: true }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-jaz-dark text-white shadow-2xl"
              >
                <MdOutlineApartment className="h-11 w-11" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <div className="space-y-5">
            {faqItems.map((item, index) => {
              const isActive = index === activeIndex

              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start gap-3 px-4 py-4 text-left sm:px-5"
                    aria-expanded={isActive}
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-jaz-light/35 text-sm font-semibold text-jaz-dark">
                      {index + 1}
                    </span>

                    <span className="flex-1 text-lg font-medium text-slate-700 sm:text-xl">
                      {item.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jaz-light/40 text-jaz-dark"
                    >
                      <FiChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden border-t border-slate-100 px-4 pb-5 pt-3 sm:px-5"
                    >
                      <SmoothParagraph className="text-base leading-relaxed text-slate-600">
                        {item.answer}
                      </SmoothParagraph>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white px-6 py-8 shadow-lg sm:px-7">
            <h3 className="text-2xl font-normal text-jaz-dark sm:text-3xl">
              <LetterAnimation text="Still have questions?" />
            </h3>

            <SmoothParagraph className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
              Our team is here to help! Contact us today.
            </SmoothParagraph>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-jaz-dark px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:opacity-95"
            >
              Contact Us
              <MdKeyboardArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HomeFaqSection
