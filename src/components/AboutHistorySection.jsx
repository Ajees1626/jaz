function AboutHistorySection() {
  return (
    <section className="bg-jaz-light py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=80"
            alt="Founder portrait"
            className="h-[300px] w-full object-cover sm:h-[420px] md:h-[480px]"
          />
        </div>

        <div>
          <span className="inline-flex rounded-full bg-jaz-dark px-5 py-2 text-sm font-medium uppercase tracking-wide text-white">
            Our History
          </span>

          <p className="mt-5 text-2xl leading-relaxed text-slate-800 sm:text-3xl">
            Founded in 2008 by Mr. Sultan Syed Ibrahim, Founder &amp; Managing Director,
            JAZ BUILDERS &amp; PROMOTERS is a trusted name in real estate, construction,
            and designing in Tenkasi and South Tamil Nadu. With over a decade of
            experience, we deliver projects that combine innovative design, superior
            quality, and lasting value.
          </p>
          <p className="mt-4 text-2xl leading-relaxed text-slate-800 sm:text-3xl">
            Our commitment to customer satisfaction, ethical practices, and transparency
            has made us one of the most respected and reliable brands in the region.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHistorySection
