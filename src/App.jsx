import { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuickEnquiryModal from './components/QuickEnquiryModal'
import FloatingSocial from './components/FloatingSocial'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Service = lazy(() => import('./pages/Service'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Project = lazy(() => import('./pages/Project'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-jaz-dark border-t-transparent" />
    </div>
  )
}

function App() {
  const [pageLoading, setPageLoading] = useState(true)
  const [socialOpen, setSocialOpen] = useState(false)

  useEffect(() => {
    const minTime = 1200
    const start = Date.now()
    let timeoutId

    const hideLoader = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, minTime - elapsed)
      timeoutId = setTimeout(() => setPageLoading(false), remaining)
    }

    if (document.readyState === 'complete') {
      hideLoader()
    } else {
      window.addEventListener('load', hideLoader)
    }
    return () => {
      window.removeEventListener('load', hideLoader)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setSocialOpen(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Initial load screen - website open agum pothu */}
      <div className={`app-loader ${pageLoading ? '' : 'hidden'}`} aria-hidden={!pageLoading}>
        <div className="loader" aria-label="Loading" />
      </div>

      <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <QuickEnquiryModal onClose={() => setSocialOpen(true)} />
      <FloatingSocial isOpen={socialOpen} onToggle={() => setSocialOpen((prev) => !prev)} />
    </div>
    </>
  )
}

export default App
