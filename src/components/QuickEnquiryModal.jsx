import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import SmoothParagraph from './SmoothParagraph'
import { submitEnquiry } from '../api'

function QuickEnquiryModal({ onClose: onEnquiryClose }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState(null)

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
    setFeedback(null)
    onEnquiryClose?.()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFeedback(null)
    if (!name.trim() || !email.trim()) {
      setFeedback({ type: 'error', text: 'Name and email are required.' })
      return
    }
    setLoading(true)
    try {
      await submitEnquiry({ name: name.trim(), email: email.trim(), phone: phone.trim(), message: message.trim() })
      setFeedback({ type: 'success', text: 'Thank you! We have received your enquiry and will get back to you soon. A confirmation email has been sent to you.' })
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setTimeout(() => close(), 3000)
    } catch (err) {
      setFeedback({ type: 'error', text: err.message || 'Something went wrong. Please try again or contact us directly.' })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 md:p-8 lg:p-10 transition-opacity duration-200 ease-out"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Enquiry"
    >
      <div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-transform duration-200 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-jaz-dark px-4 sm:px-5 py-3 sm:py-4 text-white">
          <h2 className="text-lg sm:text-xl font-medium">Quick Enquiry</h2>
          <button
            type="button"
            onClick={close}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-colors duration-200 ease-out hover:bg-white/20"
            aria-label="Close"
          >
            <FiX className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Form body */}
        <form
          className="p-4 sm:p-5 md:p-6"
          onSubmit={handleSubmit}
        >
          <SmoothParagraph className="mb-4 sm:mb-5 text-sm sm:text-base text-slate-600">
            Fill out the form below and we&apos;ll get back to you soon!
          </SmoothParagraph>

          {feedback && (
            <p className={`mb-4 rounded-xl px-3 py-2 text-sm ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {feedback.text}
            </p>
          )}

          <div className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 sm:h-12 w-full rounded-xl border border-slate-300 bg-white px-3 sm:px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 sm:h-12 w-full rounded-xl border border-slate-300 bg-white px-3 sm:px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-10 sm:h-12 w-full rounded-xl border border-slate-300 bg-white px-3 sm:px-4 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
            />
            <textarea
              rows={3}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-3 text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 ease-out focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 sm:mt-5 w-full rounded-xl bg-jaz-dark px-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-opacity duration-200 ease-out hover:opacity-95 disabled:opacity-70"
          >
            {loading ? 'Sending...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default QuickEnquiryModal
