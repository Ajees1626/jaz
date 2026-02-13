import SmoothParagraph from './SmoothParagraph'

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
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mb-8 text-center sm:mb-10">
          <span className="inline-flex rounded-full bg-jaz-dark px-8 py-2 text-sm font-medium uppercase tracking-wide text-white shadow-md">
            Our Technical Team
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group rounded-2xl border border-slate-200 bg-white hover:bg-jaz-dark p-12 shadow-lg transition-all duration-200 ease-out hover:-translate-y-1 hover:drop-shadow-2xl"
            >
              <h3 className="text-5xl font-normal leading-tight text-slate-800 transition-colors duration-200 ease-out group-hover:text-white">
                {member.name}
              </h3>
              <SmoothParagraph className="mt-3 text-2xl font-medium text-jaz-dark transition-colors duration-200 ease-out group-hover:text-white">{member.role}</SmoothParagraph>
              <SmoothParagraph className="mt-5 text-xl leading-relaxed text-slate-600 transition-colors duration-200 ease-out group-hover:text-white">
                {member.description}
              </SmoothParagraph>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTechnicalTeamSection
