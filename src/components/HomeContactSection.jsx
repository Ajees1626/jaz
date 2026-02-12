import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: FaYoutube },
  { label: 'X', href: 'https://x.com', icon: FaXTwitter },
]

function HomeContactSection() {
  return (
    <section className="bg-[#f7f8fa] py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-5xl font-medium text-jaz-dark">Contact Us</h2>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-stretch">
          <div className="flex min-h-[560px] flex-col rounded-lg bg-white p-6 shadow-md sm:p-7">
            <form className="flex h-full flex-col space-y-4" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Message"
                className="min-h-[180px] w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
              />

              <p className="text-sm text-slate-500">
                Verification will appear when you click Submit.
              </p>

              <button
                type="submit"
                className="mt-auto inline-flex w-full items-center justify-center rounded-md bg-jaz px-4 py-3.5 text-base font-medium text-white shadow-sm transition hover:bg-jaz-dark"
              >
                Submit
              </button>
            </form>
          </div>

          <aside className="flex min-h-[560px] flex-col rounded-lg bg-jaz-dark p-6 text-white shadow-md sm:p-7">
            <h3 className="mb-4 text-3xl font-medium">Follow Us</h3>

            <div className="mb-4 flex w-full flex-wrap items-center justify-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-md text-white transition hover:bg-white/25"
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            <div className="mx-auto mb-8 h-2.5 w-2.5 rounded-full bg-white/60" />

            <div className="mt-auto flex w-full items-center justify-center pt-6">
              <img
                src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839658/LOGO_1_wfi62m.webp"
                alt="JAZ Builders and Promoters"
                className="h-32 w-auto object-contain sm:h-40"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default HomeContactSection
