import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'SPM Builders',
    place: 'Tenkasi',
    rating: 4,
    message:
      'Working with JAZ Builders and Promoters has really improved the value of our properties. They build things that last, stay within the budget, and get it done on time. If you want to make your properties better, they are the team to go with.',
  },
  {
    name: 'Dr. Siva Chandran',
    place: 'Tenkasi',
    rating: 4,
    message:
      'JAZ Builders and Promoters was also flexible and listened to our needs, making changes when we asked. We are really pleased with the improvements they have made, and we recommend them to other hospitals looking for a construction partner.',
  },
  {
    name: 'VTSR Silks',
    place: 'Tenkasi',
    rating: 3,
    message:
      'Working with JAZ Builders and Promoters has been amazing. They are really honest and trustworthy. They not only did a great job for us but also were open and reliable throughout the process.',
  },
  {
    name: 'Ramachandra Textiles',
    place: 'Vanchinagar & Kerala',
    rating: 4,
    message:
      'As a small business owner, I needed a trustworthy construction team for my textile business. JAZ Builders and Promoters delivered beyond our expectations. The project was completed on schedule, and the quality of their work is evident in our beautiful new space. Grateful for their professionalism and expertise.',
  },
  {
    name: 'Siva Kumar',
    place: 'Melagaram',
    rating: 4,
    message:
      'To build my dream home I choose JAZ Builders and Promoters to fulfil my dream and they committed to the project and made me trust their process till the end and they transformed my vision into reality with even more creativity.',
  },
]

function HomeTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isSwitching, setIsSwitching] = useState(false)
  const switchTimerRef = useRef(null)

  const switchSlide = (nextIndex) => {
    if (isSwitching || nextIndex === activeIndex) {
      return
    }

    setIsSwitching(true)
    setIsVisible(false)

    if (switchTimerRef.current) {
      clearTimeout(switchTimerRef.current)
    }

    switchTimerRef.current = setTimeout(() => {
      setActiveIndex(nextIndex)
      setIsVisible(true)
      setIsSwitching(false)
    }, 240)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      switchSlide((activeIndex + 1) % testimonials.length)
    }, 5200)

    return () => clearInterval(timer)
  }, [activeIndex, isSwitching])

  useEffect(() => {
    return () => {
      if (switchTimerRef.current) {
        clearTimeout(switchTimerRef.current)
      }
    }
  }, [])

  const goToPrevious = () => {
    switchSlide((activeIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    switchSlide((activeIndex + 1) % testimonials.length)
  }

  const activeItem = testimonials[activeIndex]

  return (
    <section className="relative z-10 bg-white py-10 sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 text-center sm:mb-8">
          <span className="inline-flex rounded-full bg-jaz-dark px-6 py-1.5 text-xs font-medium uppercase tracking-wide text-white sm:px-7 sm:text-sm">
            Testimonials
          </span>
        </div>

        <div className="relative mx-auto min-h-[470px] max-w-5xl rounded-md border border-jaz-dark/20 bg-slate-50 p-4 shadow-xl sm:min-h-[450px] sm:p-5 md:min-h-[420px] md:p-6">
          <button
            type="button"
            onClick={goToPrevious}
            disabled={isSwitching}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-md bg-jaz-dark p-1.5 text-white shadow transition hover:bg-jaz-dark/90 sm:left-3"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            disabled={isSwitching}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-md bg-jaz-dark p-1.5 text-white shadow transition hover:bg-jaz-dark/90 sm:right-3"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="h-4 w-4" />
          </button>

          <div
            className={`flex min-h-[345px] flex-col justify-between px-8 text-center transition-all duration-500 ease-out sm:min-h-[325px] sm:px-10 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
            }`}
          >
            <div>
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-jaz-light/40 text-jaz-dark">
                <FaQuoteLeft className="h-4 w-4" />
              </div>

              <div className="mb-3 flex justify-center gap-1 text-amber-400">
                {Array.from({ length: activeItem.rating }).map((_, index) => (
                  <FaStar key={`${activeItem.name}-star-${index}`} className="h-3.5 w-3.5" />
                ))}
              </div>

              <p className="mb-5 min-h-[190px] text-lg leading-relaxed text-slate-800 sm:min-h-[170px] sm:text-xl">
                &quot;{activeItem.message}&quot;
              </p>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-xl font-medium text-jaz-dark sm:text-2xl">{activeItem.name}</h3>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-slate-500">
                <FiMapPin className="h-4 w-4" />
                {activeItem.place}
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                type="button"
                onClick={() => switchSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-jaz-dark' : 'w-2.5 bg-jaz-light'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonialsSection
