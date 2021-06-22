import React from "react"
import UnderstatedCta from "../components/understated-cta"

const workExperiences = [
  {
    company: "Cisco",
    title: "Software Engineer",
    date: {
      start: "2020",
      end: "present",
    },
  },
  {
    company: "CMLS Financial",
    title: "Consultant",
    date: {
      start: "2020",
      end: "2020",
    },
  },
  {
    company: "Briteweb",
    title: "Senior Fullstack Developer",
    date: {
      start: "2019",
      end: "2020",
    },
  },
  {
    company: "Grow",
    title: "Software Engineer",
    date: {
      start: "2018",
      end: "2018",
    },
  },
]

export const Details = ({ title, link }) => {
  return (
    <section className="module module--top bg-brand-neutral">
      <div className="container">
        <h2 className="module__heading">{title}</h2>

        <div className="flex relative md:flex-row md:space-x-16 mb-8">
          <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4 w-full">
            {workExperiences.map((workExp) => (
              <div className="bg-white shadow px-4 py-2 rounded">
                <div className="flex flex-col h-full justify-around">
                  <h3 className="m-0 font-bold">
                    {workExp.company}
                    <br />
                    <span className="font-thin">{workExp.title}</span>
                  </h3>

                  <div>
                    <p className="mt-2 font-thin">
                      {workExp.date.start !== workExp.date.end
                        ? `${workExp.date.start} - ${workExp.date.end}`
                        : workExp.date.start}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <UnderstatedCta as="a" href={link.url}>
          {link.text}
        </UnderstatedCta>
      </div>
    </section>
  )
}

Details.defaultProps = {
  title: "Professional Background",
  link: {
    url: "https://linkedin.com/in/leevincenth",
    text: "see linkedin",
  },
}
