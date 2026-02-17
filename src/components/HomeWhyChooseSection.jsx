import { useRef } from 'react'
import { FiCheckCircle, FiStar, FiSun } from 'react-icons/fi'
import AnimatedLetters from './AnimatedLetters'
import { motion, useInView } from 'framer-motion'

const whyChooseItems = [
  {
    title: 'Expert Team',
    description: 'End-to-end management of every project',
    value: '150+',
    label: 'Projects Completed',
    icon: FiSun,
  },
  {
    title: 'On-Time Delivery',
    description: 'Assured schedules with controlled costs',
    value: '150+',
    label: 'Happy Clients',
    icon: FiStar,
  },
  {
    title: 'Transparent Communication',
    description: 'Clear, ethical, and regular updates',
    value: '18+',
    label: 'Years Experience',
    icon: FiCheckCircle,
  },
  {
    title: 'Intelligent Design',
    description: 'Modern, functional, and space-efficient solutions',
    value: '1000+',
    label: 'Designs',
    icon: FiCheckCircle,
  },
]

function HomeWhyChooseSection() {
  const sectionRef = useRef(null)

  // 🔥 முக்கிய மாற்றம் — once: false
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
  })

  const containerVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 80,
      },
    },
  }

  const iconVariant = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: { scale: 1.1, rotate: 10 },
  }

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#f7f8f9] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // 🔥 every scroll animate
        >
          {/* Heading */}
          <div className="mb-14 text-center">
            <AnimatedLetters
              as="span"
              className="inline-flex rounded-full bg-jaz-dark px-9 py-2.5 text-sm font-medium uppercase tracking-wide text-white shadow-md"
              delayPerLetter={28}
              durationMs={400}
              triggerOnScroll
            >
              Why Choose Us?
            </AnimatedLetters>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseItems.map((item) => (
              <motion.article
                key={item.title}
                variants={cardVariant}
                whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm"
              >
                {/* Icon */}
                <motion.div
                  variants={iconVariant}
                  className="mx-auto mb-6 inline-flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-jaz to-jaz-light text-white shadow-lg"
                >
                  <item.icon className="h-9 w-9" />
                </motion.div>

                <h3 className="mb-3 text-xl font-normal text-jaz-dark sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-slate-500 sm:text-base">
                  {item.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="mt-auto rounded-xl bg-gradient-to-r from-jaz to-jaz-light px-4 py-6 text-white shadow-inner"
                >
                  <p className="text-4xl font-semibold leading-none">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/90">
                    {item.label}
                  </p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeWhyChooseSection
