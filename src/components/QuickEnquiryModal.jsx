import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import SmoothParagraph from './SmoothParagraph'

function QuickEnquiryModal({ onClose: onEnquiryClose }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    if (hasShown) return
    const timer = setTimeout(() => {
      setIsOpen(true)
      setHasShown(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [hasShown])

  const close = () => {
    setIsOpen(false)
    onEnquiryClose?.()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 transition-opacity sm:p-6 duration-200 ease-out"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Enquiry"
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-t-2xl bg-white shadow-2xl transition-transform duration-200 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - teal */}
        <div className="flex items-center justify-between bg-jaz-dark px-5 py-4 text-white">
          <h2 className="text-xl font-medium">Quick Enquiry</h2>
          <button
            type="button"
            onClick={close}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 ease-out hover:bg-white/20"
            aria-label="Close"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Form body */}
        <form
          className="p-5 sm:p-6"
          onSubmit={(e) => {
            e.preventDefault()
            close()
          }}
        >
          <SmoothParagraph className="mb-5 text-sm text-slate-600">
            Fill out the form below and we&apos;ll get back to you soon!
          </SmoothParagraph>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
            />
          </div>
          <SmoothParagraph className="mt-4 text-sm text-slate-500">
            Verification will appear when you click Submit.
          </SmoothParagraph>
          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-jaz-dark px-4 py-3.5 text-base font-semibold text-white transition-opacity duration-200 ease-out hover:opacity-95"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  )
}

export default QuickEnquiryModal
