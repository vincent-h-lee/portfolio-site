import React from "react"
import UnderstatedCta from "../components/understated-cta"

/**
 * Return a year range from two timestamps
 * @param {string} start timestamp
 * @param {string} end timestamp
 * @returns {string}
 */
const getRange = (start, end) => {
  const startYear = (new Date(start)).getFullYear();
  const endYear = end ? (new Date(end)).getFullYear() : null;

  if (!endYear) {
    return `${startYear} - Present`
  }

  if (startYear == endYear) {
    return `${startYear}`
  }

  return `${startYear} - ${endYear}`
}


export const Details = ({ title, link, workExperience }) => {

  return (
    <section className="module module--top bg-brand-neutral">
      <div className="container">
        <h2 className="module__heading">{title}</h2>

        <div className="flex relative md:flex-row md:space-x-16 mb-8">
          <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4 w-full">
            {workExperience.map((workExp) => (
              <div className="bg-white shadow px-4 py-2 rounded" key={workExp.company}>
                <div className="flex flex-col h-full justify-around">
                  <h3 className="m-0 font-bold">
                    {workExp.company}
                    <br />
                    <span className="font-thin">{workExp.position}</span>
                  </h3>

                  <div>
                    <p className="mt-2 font-thin">
                      {getRange(workExp.start_date, workExp.end_date)}
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
