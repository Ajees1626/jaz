import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight, FiPhone, FiMail } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const ICONS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919363933050',
    icon: FaWhatsapp,
    className: 'bg-[#25D366] hover:bg-[#20bd5a] text-white',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: FaInstagram,
    className: 'bg-gradient-to-b from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white',
  },
  {
    label: 'Phone',
    href: 'tel:+919363933050',
    icon: FiPhone,
    className: 'bg-jaz-dark hover:bg-jaz text-white',
  },
  {
    label: 'Email',
    href: 'mailto:info@jazbuildersgroup.com',
    icon: FiMail,
    className: 'bg-red-500 hover:bg-red-600 text-white',
  },
]

function FloatingSocial({ isOpen, onToggle }) {
  return (
    <div
      className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end"
      aria-label="Social and contact links"
    >
      {/* Icon strip - above the arrow, slides right when closed */}
      <div className="h-48 w-12 overflow-hidden">
        <div
          className="flex flex-col rounded-l-xl shadow-lg transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
        >
          {ICONS.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex h-12 w-12 shrink-0 items-center justify-center text-white transition-colors duration-200 ease-out ${item.className} ${
                index === 0 ? 'rounded-tl-xl' : ''
              } ${index === ICONS.length - 1 ? 'rounded-bl-xl' : ''}`}
              title={item.label}
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Arrow toggle - at bottom, rounded left only */}
      <button
        type="button"
        onClick={onToggle}
        className="mt-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-l-xl bg-jaz-dark/55 text-white shadow-lg transition-colors duration-200 ease-out hover:bg-slate-600"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        title={isOpen ? 'Close' : 'Open'}
      >
        {isOpen ? (
          <FiChevronRight className="h-5 w-5" />
        ) : (
          <FiChevronLeft className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}

export default FloatingSocial
