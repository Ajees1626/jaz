import { FiCheckCircle, FiStar, FiSun } from 'react-icons/fi'

const whyChooseItems = [
  {
    title: 'Expert Team',
    description: 'End-to-end management of every project',
    value: '150+',
    label: 'Project Completed',
    icon: FiSun,
  },
  {
    title: 'On-Time Delivery',
    description: 'Assured schedules with controlled costs',
    value: '150+',
    label: 'Happy Clients',
    icon: FiStar,
  },
  {
    title: 'Transparent Communication',
    description: 'Clear, ethical, and regular updates',
    value: '18+',
    label: 'Years Experience',
    icon: FiCheckCircle,
  },
  {
    title: 'Intelligent Design',
    description: 'Modern, functional, and space-efficient solutions',
    value: '1000+',
    label: 'Designs',
    icon: FiCheckCircle,
  },
]

function HomeWhyChooseSection() {
  return (
    <section className="bg-[#f7f8f9] py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-jaz-dark px-9 py-2.5 text-sm font-medium uppercase tracking-wide text-white">
            Why Choose Us?
          </span>
        </div>

        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseItems.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 inline-flex h-[68px] w-[68px] items-center justify-center rounded-xl bg-jaz text-white shadow-md">
                <item.icon className="h-9 w-9" />
              </div>

              <h3 className="mb-2 flex min-h-[72px] items-center justify-center text-xl font-light leading-tight text-jaz-dark sm:text-2xl">
                {item.title}
              </h3>
              <p className="mx-auto mb-4 flex min-h-[64px] max-w-[220px] items-start justify-center text-sm leading-relaxed text-slate-500 sm:text-base">
                {item.description}
              </p>

              <div className="mt-auto rounded-md bg-linear-to-r from-jaz to-jaz-light px-4 py-5 text-white">
                <p className="text-5xl font-medium leading-none">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/90">
                  {item.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeWhyChooseSection
