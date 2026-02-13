import { FaBullseye } from 'react-icons/fa'
import { GiOnTarget, GiStrikingDiamonds, GiEyestalk } from 'react-icons/gi'
import SmoothParagraph from './SmoothParagraph'


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
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-normal tracking-wide text-jaz-dark sm:text-5xl">
            Our Vision, Mission &amp; Values
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          <article className="flex h-full w-full flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-200 ease-out hover:shadow-xl">
            <div className="mb-3 flex justify-center text-jaz-dark">
              <GiEyestalk className="h-20 w-20" />
            </div>
            <h3 className="text-center text-xl font-normal tracking-wide text-jaz-dark">Our Vision</h3>
            <div className="my-3 flex justify-center">
              <span className="h-1 w-1 rounded-full bg-jaz-light" />
            </div>
            <SmoothParagraph className="w-full text-center text-base leading-relaxed tracking-wide text-slate-600">
              To build premium-quality, affordable, eco-friendly, and sustainable
              developments that unlock property value and grow across South Tamil Nadu
              over the next three years through consistent quality and timely delivery.
            </SmoothParagraph>
          </article>

          <article className="flex h-full w-full flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-200 ease-out hover:shadow-xl">
            <div className="mb-3 flex justify-center text-jaz-dark">
              <GiOnTarget className="h-20 w-20" />
            </div>
            <h3 className="text-center text-xl font-normal tracking-wide text-jaz-dark">Our Mission</h3>
            <div className="my-3 flex justify-center">
              <span className="h-1 w-1 rounded-full bg-jaz-light" />
            </div>
            <ul className="mx-auto w-full max-w-sm space-y-2 text-left text-base leading-relaxed tracking-wide text-slate-600">
              {missionPoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-jaz" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="flex h-full w-full flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-200 ease-out hover:shadow-xl">
            <div className="mb-3 flex justify-center text-jaz-dark">
              <GiStrikingDiamonds className="h-20 w-20" />
            </div>
            <h3 className="text-center text-xl font-normal tracking-wide text-jaz-dark">Core Values</h3>
            <div className="my-3 flex justify-center">
              <span className="h-1 w-1 rounded-full bg-jaz-light" />
            </div>
            <ul className="mx-auto w-full max-w-sm space-y-2 text-left text-base leading-relaxed tracking-wide text-slate-600">
              {valuePoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-jaz" />
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
