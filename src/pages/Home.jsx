import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SmoothParagraph from '../components/SmoothParagraph'
import AnimatedLetters from '../components/AnimatedLetters'
import HomeAboutSection from '../components/HomeAboutSection'
import HomeServicesSection from '../components/HomeServicesSection'
import HomeWhyChooseSection from '../components/HomeWhyChooseSection'
import HomeProjectsSection from '../components/HomeProjectsSection'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'
import HomeTestimonialsSection from '../components/HomeTestimonialsSection'
import HomeFaqSection from '../components/HomeFaqSection'
import HomeContactSection from '../components/HomeContactSection'

const HERO_IMAGES = [
  'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839288/h2_b7vxdv.webp',
  'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1770963793/h1_pxqeah.webp',
  'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839248/h3_zgwgo4.webp',
  'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839305/h4_h7v16z.webp',
]

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section
        id="hero"
        className="relative min-h-[100vh] overflow-hidden bg-slate-100 pt-20"
      >
        {/* Background slideshow */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((url, index) => (
            <div
              key={url}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-out"
              style={{
                backgroundImage: `url('${url}')`,
                backgroundAttachment: 'fixed',
                opacity: index === currentImageIndex ? 1 : 0,
                pointerEvents: 'none',
              }}
              aria-hidden
            />
          ))}
        </div>
        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            pointerEvents: 'none',
          }}
          aria-hidden
        />
        <div
          id="content"
          className="relative z-10 flex min-h-[calc(110vh-5rem)] w-full items-center justify-center px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10"
        >
          <div className="mx-auto w-full max-w-container rounded-2xl bg-white/10 px-6 py-10 text-center backdrop-blur-xs sm:px-10 sm:py-12 md:max-w-5xl lg:px-12 lg:py-14">
            <SmoothParagraph className="mb-3 text-large uppercase tracking-[0.16em] text-white/95 sm:text-xl md:text-[1.25rem]">
              Welcome to JAZ Builders and Promoters
            </SmoothParagraph>
            <h1 className="mb-7 text-4xl leading-[1.08] font-normal text-white drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl">
              <AnimatedLetters delayPerLetter={40} durationMs={500}>
                A Foundation for
              </AnimatedLetters>
              <br />
              <AnimatedLetters
                delayPerLetter={40}
                durationMs={500}
                startDelay={280}
              >
                Your Future
              </AnimatedLetters>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-md border border-white/80 bg-black/10 px-6 py-2.5 text-base font-medium lowercase text-white transition-colors duration-200 ease-out hover:bg-white/10 sm:px-7 sm:py-3 sm:text-lg"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white text-white">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                get started
              </Link>
              <Link
                to="/project"
                className="inline-flex items-center gap-2.5 rounded-md px-6 py-2.5 text-base font-medium text-[#127f83] transition-opacity duration-200 ease-out hover:opacity-90 sm:px-7 sm:py-3 sm:text-lg"
                style={{ backgroundColor: '#8FD8D3' }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded bg-white/25">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </span>
                view Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeAboutSection />
      <HomeServicesSection />
      <HomeWhyChooseSection />
      <HomeProjectsSection />
      <HomeBuildTogetherSection />
      <HomeTestimonialsSection />
      <HomeFaqSection />
      <HomeContactSection />
    </>
  )
}

export default Home
