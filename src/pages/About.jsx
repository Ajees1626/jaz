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
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839737/about1_ewbam5.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="w-full px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-4xl font-normal sm:text-6xl md:text-7xl lg:text-8xl">ABOUT US</h1>
          <div className="flex items-center justify-center gap-3 text-base text-white/90">
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
