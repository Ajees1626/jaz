import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToTopIfHome = (to) => {
    if (to === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Service', to: '/service' },
    { label: 'Project', to: '/project' },
    { label: 'Careers', to: '/careers' },
  ]

  const linkClass = ({ isActive }) =>
    `inline-block border-b border-transparent pb-1 text-[15px] font-medium tracking-normal text-white transition-opacity duration-200 ease-out hover:opacity-90 ${
      isActive ? 'border-white' : ''
    }`

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#00A3A0]"
      role="banner"
    >
      {/* Wrap nav content in the same container as your section */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <nav className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="inline-flex items-center"
            onClick={() => {
              setMobileMenuOpen(false)
              scrollToTopIfHome('/')
            }}
          >
            <img
              src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839658/LOGO_1_wfi62m.webp"
              alt="JAZ Builders and Promoters"
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-24"
              loading="eager"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:gap-6 lg:gap-8">
            <ul className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={linkClass}
                    onClick={() => scrollToTopIfHome(link.to)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="shrink-0 rounded-md border border-white/80 px-5 py-2 text-[15px] font-medium tracking-normal text-white transition-colors duration-200 ease-out hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`sm:hidden overflow-hidden transition-all duration-200 ease-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <ul className="border-t border-white/20 px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2.5 text-white transition-colors duration-200 ease-out ${
                      isActive ? 'font-semibold bg-white/10' : 'hover:bg-white/10'
                    }`
                  }
                  onClick={() => {
                    setMobileMenuOpen(false)
                    scrollToTopIfHome(link.to)
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 border-t border-white/20 pt-2">
              <Link
                to="/contact"
                className="block rounded-md border-2 border-white px-3 py-2 text-center text-sm font-medium uppercase text-white hover:bg-white/10 transition-colors duration-200 ease-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
