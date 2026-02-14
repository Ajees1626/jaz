import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import SmoothParagraph from './SmoothParagraph'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: FaYoutube },
  { label: 'X', href: 'https://x.com', icon: FaXTwitter },
]

function HomeContactSection() {
  return (
    <section className="overflow-hidden bg-[#f7f8fa] py-14 sm:py-16 md:py-20 lg:py-24">
      
      {/* Proper Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-8 text-4xl font-normal text-jaz-dark sm:text-5xl"
        >
          Contact Us
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-stretch">

          {/* FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex min-h-[560px] flex-col rounded-lg bg-white p-6 shadow-md sm:p-7"
          >
            <form
              className="flex h-full flex-col space-y-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {['Enter Your Name', 'Enter Your Email', 'Phone Number', 'Subject'].map(
                  (placeholder, index) => (
                    <motion.input
                      key={index}
                      type={index === 1 ? 'email' : 'text'}
                      placeholder={placeholder}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-700 outline-none transition-all duration-300 focus:scale-[1.02] focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
                    />
                  )
                )}
              </div>

              <motion.textarea
                rows={6}
                placeholder="Message"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="min-h-[180px] w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 focus:scale-[1.02] focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
              />

              <SmoothParagraph className="text-sm text-slate-500">
                Verification will appear when you click Submit.
              </SmoothParagraph>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-auto inline-flex w-full items-center justify-center rounded-md bg-jaz px-4 py-3.5 text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-jaz-dark hover:shadow-lg"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* ASIDE SECTION */}
          <motion.aside
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex min-h-[560px] flex-col rounded-lg bg-jaz-dark p-6 text-white shadow-md sm:p-7"
          >
            <h3 className="mb-5 text-3xl font-medium">Follow Us</h3>

            {/* Social Icons */}
            <div className="mb-5 flex w-full flex-wrap items-center justify-center gap-3">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-md text-white transition hover:bg-white/25"
                >
                  <item.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>

            <div className="mx-auto mb-8 h-2.5 w-2.5 rounded-full bg-white/60" />

            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-auto flex w-full items-center justify-center pt-6"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839658/LOGO_1_wfi62m.webp"
                alt="JAZ Builders and Promoters"
                className="h-28 w-auto object-contain sm:h-36 md:h-40"
              />
            </motion.div>
          </motion.aside>

        </div>
      </div>
    </section>
  )
}

export default HomeContactSection
