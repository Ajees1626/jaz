import { Link } from 'react-router-dom'
import HomeAboutSection from '../components/HomeAboutSection'
import AboutHistorySection from '../components/AboutHistorySection'
import AboutVisionMissionSection from '../components/AboutVisionMissionSection'
import AboutTechnicalTeamSection from '../components/AboutTechnicalTeamSection'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'

function About() {
  return (
    <>
      <section
        className="relative flex min-h-[62vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-5 text-6xl font-normal sm:text-7xl">About Us</h1>
          <div className="flex items-center justify-center gap-3 text-base text-white/90">
            <Link to="/" className="transition hover:text-white">
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
