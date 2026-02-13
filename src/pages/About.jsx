import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeAboutSection from '../components/HomeAboutSection'
import AboutHistorySection from '../components/AboutHistorySection'
import AboutVisionMissionSection from '../components/AboutVisionMissionSection'
import AboutTechnicalTeamSection from '../components/AboutTechnicalTeamSection'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'

function About() {
  const heroRef = useRef(null)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  const AnimatedLetters = ({ text, visible }) => (
    <>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{ transitionDelay: `${i * 35}ms` }}
          className={`inline-block transition-all duration-500 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  )

  return (
    <>
      <section
        ref={heroRef}
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
      >
        <div
          className={`hero-bg-zoom absolute inset-0 z-0 bg-cover bg-center bg-no-repeat ${
            heroVisible ? 'is-visible' : ''
          }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839737/about1_ewbam5.webp')",
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="relative z-10 w-full overflow-hidden px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-4xl font-normal sm:text-6xl md:text-7xl lg:text-8xl">
            <AnimatedLetters text="ABOUT US" visible={heroVisible} />
          </h1>
          <div
            className={`flex items-center justify-center gap-3 text-base text-white/90 transition-all duration-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <Link to="/" className="transition-colors duration-200 ease-out hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      <HomeAboutSection />
      <AboutHistorySection />
      <AboutVisionMissionSection />
      <AboutTechnicalTeamSection />
      <HomeBuildTogetherSection />
    </>
  )
}

export default About
