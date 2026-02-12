import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Service', to: '/service' },
    { label: 'Project', to: '/project' },
    { label: 'Careers', to: '/careers' },
  ]

  const linkClass = ({ isActive }) =>
    `inline-block border-b border-transparent pb-1 text-[15px] font-medium tracking-normal text-white transition hover:opacity-90 ${isActive ? 'border-white' : ''}`

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: '#00A3A0' }}
      role="banner"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between  sm:px-6 lg:px-8">
        {/* Logo - Left */}
        <Link to="/" className="inline-flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839658/LOGO_1_wfi62m.webp"
            alt="JAZ Builders and Promoters"
            className="h-20 w-auto object-contain sm:h-24"
            loading="eager"
          />
        </Link>

        {/* Right side: Home to Contact Us */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="shrink-0 rounded-md border border-white/80 px-5 py-2 text-[15px] font-medium tracking-normal text-white transition hover:bg-white/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-200 ease-in-out md:hidden ${mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor: '#00A3A0' }}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="border-t border-white/20 px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2.5 text-white ${isActive ? 'font-semibold bg-white/10' : 'hover:bg-white/10'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2 border-t border-white/20 pt-2">
            <Link
              to="/contact"
              className="block rounded-md border-2 border-white px-3 py-2.5 text-center text-sm font-medium uppercase text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
