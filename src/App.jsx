import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import ServiceDetail from './pages/ServiceDetail'
import Project from './pages/Project'
import ProjectDetail from './pages/ProjectDetail'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
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
    </div>
  )
}

export default App
