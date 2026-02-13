import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPhone, FiSmartphone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SmoothParagraph from '../components/SmoothParagraph'

const CONTACT_CARDS = [
  {
    title: 'Land Line',
    value: '04633 210218',
    icon: FiPhone,
  },
  {
    title: 'Mobile',
    value: '+91 94863 22351',
    icon: FiSmartphone,
  },
  {
    title: 'WhatsApp',
    value: '+91 93639 33050',
    icon: FaWhatsapp,
  },
  {
    title: 'Write To Us',
    value: ['info@jazbuildersgroup.com', 'jazbuilders.net@gmail.com'],
    icon: FiMail,
  },
  {
    title: 'Visit Us',
    value: [
      { label: 'Head Office', lines: ['69/1, Kattubava Pallivasal Street,', 'Tenkasi - 627811.'] },
      { label: 'Branch Office', lines: ['174/5-5, Railway Road,', 'Tenkasi-627811'] },
    ],
    icon: FiMapPin,
  },
]

const MAP_DIRECTIONS_URL = 'https://www.google.com/maps/dir//174%2F5-5,+Railway+Rd,+near+New+Bus+Stand,+Tenkasi,+Tamil+Nadu+627811'
const MAP_VIEW_URL = 'https://www.google.com/maps/search/?api=1&query=JAZ+Builders+Promoters+Tenkasi'

function Contact() {
  const heroRef = useRef(null)
  const cardsRef = useRef(null)
  const formRef = useRef(null)
  const mapRef = useRef(null)
  const [heroVisible, setHeroVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [mapVisible, setMapVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target
          if (el === heroRef.current) setHeroVisible(entry.isIntersecting)
          else if (el === cardsRef.current) setCardsVisible(entry.isIntersecting)
          else if (el === formRef.current) setFormVisible(entry.isIntersecting)
          else if (el === mapRef.current) setMapVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.15 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    if (cardsRef.current) observer.observe(cardsRef.current)
    if (formRef.current) observer.observe(formRef.current)
    if (mapRef.current) observer.observe(mapRef.current)
    return () => observer.disconnect()
  }, [])

  const AnimatedLetters = ({ text, delay = 0, visible }) => (
    <>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{ transitionDelay: `${index * 35 + delay}ms` }}
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
      {/* Hero section */}
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
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839710/contact_ongaeq.webp')",
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="relative z-10 w-full overflow-hidden px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-4xl font-normal sm:text-6xl md:text-7xl lg:text-8xl">
            <AnimatedLetters text="CONTACT US" visible={heroVisible} />
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
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact info cards */}
      <section
        ref={cardsRef}
        className="relative z-20 -mt-16 rounded-t-[3rem] bg-jaz-dark pt-4 sm:-mt-20 sm:rounded-t-[4rem]"
      >
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-12">
          <div
            className={`mb-8 flex justify-center transition-all duration-500 ${
              cardsVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-jaz-light" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_CARDS.slice(0, 3).map((item, index) => (
              <div
                key={item.title}
                className={`rounded-xl bg-white p-6 shadow-lg transition-all duration-600 ease-out hover:shadow-xl ${
                  cardsVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 flex justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-jaz-light text-jaz-dark">
                    <item.icon className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mb-2 text-center text-lg font-medium text-jaz-dark">{item.title}</h3>
                {Array.isArray(item.value) ? (
                  <div className="text-center text-slate-700">
                    {item.value.map((line, i) => (
                      <a
                        key={i}
                        href={line.startsWith('info@') || line.startsWith('jaz') ? `mailto:${line}` : undefined}
                        className="block text-slate-800 hover:text-jaz-dark"
                      >
                        {line}
                      </a>
                    ))}
                  </div>
                ) : (
                  <SmoothParagraph className="text-center text-slate-800">{item.value}</SmoothParagraph>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {CONTACT_CARDS.slice(3).map((item, index) => (
              <div
                key={item.title}
                className={`rounded-xl bg-white p-6 shadow-lg transition-all duration-600 ease-out hover:shadow-xl ${
                  cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(3 + index) * 100}ms` }}
              >
                <div className="mb-3 flex justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-jaz-light text-jaz-dark">
                    <item.icon className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mb-3 text-center text-lg font-medium text-jaz-dark">{item.title}</h3>
                {item.title === 'Write To Us' ? (
                  <div className="space-y-1 text-center">
                    {item.value.map((email, i) => (
                      <a
                        key={i}
                        href={`mailto:${email}`}
                        className="block text-slate-800 hover:text-jaz-dark"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 text-center text-slate-800">
                    {item.value.map((block, i) => (
                      <div key={i}>
                        <SmoothParagraph className="font-medium text-slate-900">{block.label}</SmoothParagraph>
                        {block.lines.map((line, j) => (
                          <SmoothParagraph key={j}>{line}</SmoothParagraph>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us form - white card */}
      <section className="bg-slate-100 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <h2 className="mb-6 text-left text-3xl font-semibold text-jaz-dark sm:text-4xl">
              Contact Us
            </h2>
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Name Of The Owner"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Property Location"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Leave Your Comment"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                />
              </div>
              <SmoothParagraph className="text-sm text-slate-500">
                Verification will appear when you click Submit.
              </SmoothParagraph>
              <button
                type="submit"
                className="w-full rounded-xl bg-jaz-dark px-6 py-4 text-xl font-semibold text-white shadow-md transition-all duration-200 ease-out hover:opacity-95 hover:shadow-lg"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-[400px] w-full sm:h-[480px]">
              <iframe
                title="JAZ Builders & Promoters location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.244261968!2d77.299!3d8.955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429e72e7d7a0f%3A0x1!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 bg-white p-4 sm:p-6">
              <div>
                <SmoothParagraph className="font-semibold text-slate-900">JAZ Builders & Promoters</SmoothParagraph>
                <SmoothParagraph className="mt-1 text-sm text-slate-600">
                  174/5-5, Railway Rd, near New Bus Stand, Tenkasi, Tamil Nadu 627811
                </SmoothParagraph>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={MAP_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-jaz-dark hover:underline"
                >
                  View larger map
                </a>
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-jaz-dark px-4 py-2 text-sm font-medium text-white transition-colors duration-200 ease-out hover:bg-jaz"
                >
                  Directions
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
