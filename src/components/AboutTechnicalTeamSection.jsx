const teamMembers = [
  {
    name: 'S.N.Azarudeen',
    role: 'M.Arch',
    description:
      'Experienced construction professional with over 15 years in the industry. Leading JAZ Builders and Promoters with vision and expertise.',
  },
  {
    name: 'Sivaranjani Veerapandian',
    role: 'B.Arch',
    description:
      'Passionate about quality construction and client satisfaction. Bringing innovative solutions to every project.',
  },
]

function AboutTechnicalTeamSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <span className="inline-flex rounded-full bg-jaz-dark px-8 py-2 text-sm font-medium uppercase tracking-wide text-white shadow-md">
            Our Technical Team
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-5xl font-medium leading-tight text-slate-800 transition-colors duration-300 group-hover:text-jaz-dark">
                {member.name}
              </h3>
              <p className="mt-3 text-3xl font-medium text-jaz-dark">{member.role}</p>
              <p className="mt-5 text-2xl leading-relaxed text-slate-600">
                {member.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTechnicalTeamSection
