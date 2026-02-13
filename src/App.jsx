import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuickEnquiryModal from './components/QuickEnquiryModal'
import FloatingSocial from './components/FloatingSocial'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import ServiceDetail from './pages/ServiceDetail'
import Project from './pages/Project'
import ProjectDetail from './pages/ProjectDetail'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function App() {
  const [socialOpen, setSocialOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSocialOpen(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col p">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1 ">
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
      </main>

      <Footer />
      <QuickEnquiryModal onClose={() => setSocialOpen(true)} />
      <FloatingSocial isOpen={socialOpen} onToggle={() => setSocialOpen((prev) => !prev)} />
    </div>
  )
}

export default App
