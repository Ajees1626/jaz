import { Link } from 'react-router-dom'
import HomeAboutSection from '../components/HomeAboutSection'
import HomeServicesSection from '../components/HomeServicesSection'
import HomeWhyChooseSection from '../components/HomeWhyChooseSection'
import HomeProjectsSection from '../components/HomeProjectsSection'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'
import HomeTestimonialsSection from '../components/HomeTestimonialsSection'
import HomeFaqSection from '../components/HomeFaqSection'
import HomeContactSection from '../components/HomeContactSection'

function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-[110vh] bg-slate-800 pt-20 md:min-h-[115vh]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14, 26, 35, 0.58), rgba(14, 26, 35, 0.58)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          id="content"
          className="relative z-10 flex min-h-[calc(110vh-5rem)] w-full items-center justify-center px-4 py-12 sm:py-14"
        >
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white/10 px-6 py-10 text-center backdrop-blur-xs sm:px-10 sm:py-12">
            <p className="mb-3 text-large uppercase tracking-[0.16em] text-white/95 sm:text-xl">
              Welcome to JAZ Builders and Promoters
            </p>
            <h1 className="mb-7 text-6xl leading-[1.08] font-normal text-white drop-shadow-md sm:text-7xl md:text-8xl">
              A Foundation for
              <br />
              Your Future
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-md border border-white/80 bg-black/10 px-6 py-2.5 text-base font-medium lowercase text-white transition hover:bg-white/10 sm:px-7 sm:py-3 sm:text-lg"
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
                className="inline-flex items-center gap-2.5 rounded-md px-6 py-2.5 text-base font-medium text-[#127f83] transition hover:opacity-90 sm:px-7 sm:py-3 sm:text-lg"
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
