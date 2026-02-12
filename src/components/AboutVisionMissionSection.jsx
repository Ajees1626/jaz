import { FaBullseye, FaRegPaperPlane } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'

function AboutVisionMissionSection() {
  const missionPoints = [
    'Think Right: Plan every project with clear scope and feasibility',
    'Build Right: Execute using structured systems and quality checks',
    'Deliver Right: Complete and hand over on time, exactly as promised',
  ]

  const valuePoints = [
    'Uncompromising quality',
    'Operational excellence',
    'Accountable delivery',
    'Proven expertise',
    'Client-centric advisory',
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-5xl font-medium text-jaz-dark sm:text-6xl">
            Our Vision,Mission &amp; Values
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-3 flex justify-center text-jaz-dark">
              <FaBullseye className="h-10 w-10" />
            </div>
            <h3 className="text-center text-4xl font-medium text-jaz-dark">Our Vision</h3>
            <div className="my-3 flex justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-jaz-light" />
            </div>
            <p className="text-2xl leading-relaxed text-slate-600">
              To build premium-quality, affordable, eco-friendly, and sustainable
              developments that unlock property value and grow across South Tamil Nadu
              over the next three years through consistent quality and timely delivery.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-3 flex justify-center text-jaz-dark">
              <FaRegPaperPlane className="h-10 w-10" />
            </div>
            <h3 className="text-center text-4xl font-medium text-jaz-dark">Our Mission</h3>
            <div className="my-3 flex justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-jaz-light" />
            </div>
            <ul className="space-y-2 text-2xl leading-relaxed text-slate-600">
              {missionPoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jaz" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-3 flex justify-center text-jaz-dark">
              <FiSend className="h-10 w-10" />
            </div>
            <h3 className="text-center text-4xl font-medium text-jaz-dark">Core Values</h3>
            <div className="my-3 flex justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-jaz-light" />
            </div>
            <ul className="space-y-2 text-2xl leading-relaxed text-slate-600">
              {valuePoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jaz" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutVisionMissionSection
