import React from "react"
import classnames from "classnames"
import { FaArrowRight } from "react-icons/fa"

import Card from "../components/card"
import { Tabs } from "../components/tab"
import UnderstatedCta from "../components/understated-cta"
import useStack from "../components/use-stack"
import Layout from "../layout/layout"
import SEO from "../layout/seo"

const skills = [
  {
    area: "backend",
    competencies: ["nodejs", "php", "kotlin", "java", "clojure"],
  },
  {
    area: "frontend",
    competencies: ["reactjs", "vuejs"],
  },
  {
    area: "infra",
    competencies: ["gitlab-ci", "aws", "terraform", "ansible"],
  },
]

const workExperiences = [
  {
    company: "Cisco",
    title: "Software Engineer III",
    date: {
      start: "2020",
      end: "Present",
    },
    description:
      "End-to-end development on security applications in a decentralized, polyglot environment. Focus on process automation, scalability, agile training, and cross-functional collaboration.",
  },
  {
    company: "CMLS Financial",
    title: "Consultant",
    date: {
      start: "2020",
      end: "2020",
    },
    description:
      "Lead workshops on React and defined standards of practice for the development team. Audited the application and provided a phased implementation plan to address issues. ",
  },
  {
    company: "Briteweb",
    title: "Senior Fullstack Developer",
    date: {
      start: "2019",
      end: "2020",
    },
    description:
      "Owned the FE architecture of an education product. Worked with an agile team including a spreadsheet editor, survey builder. Standardized handoffs with cross-functional partners.",
  },
  {
    company: "Grow",
    title: "Software Engineer",
    date: {
      start: "2018",
      end: "2018",
    },
    description:
      "Lead a compliance SPA re-launch improving security policies, UX, and complex features like pre-auth bill switching. Championed processes to coordinate releases and dependencies between teams.",
  },
]

const IndexPage = () => {
  const {
    activeIndex,
    isActiveIndex,
    setActiveIndex,
    isForwardIndex,
    isBackwardIndex,
  } = useStack({
    initialActive: 0,
    totalCount: workExperiences.length,
  })

  return (
    <Layout>
      <SEO title="Home" />

      <div className="hero bg-brand-darkgreen">
        <div className="container">
          <h1 className="text-white text-4xl md:text-5xl font-bold m-0">
            Hi, I'm Vincent Lee
          </h1>
          <h2 className="text-white opacity-50 text-4xl md:text-5xl font-bold m-0">
            I build solutions in complex domains
          </h2>
          <p className="py-6 text-xl md:text-2xl text-gray-300 font-thin lg:w-1/2">
            I'm a software engineer based in Vancouver, BC. I specialize in
            applications, documentation, and processes.
          </p>
        </div>
      </div>

      <div className="container module--large">
        <article>
          <h2 className="text-brand-lightgreen font-bold text-4xl md:text-5xl m-0 mb-10">
            About
          </h2>
          <section className="flex flex-wrap flex-col md:flex-row relative">
            <p className="paragraph font-thin md:w-1/2 mb-8">
              I have years of working in cross-functional teams, shipping and
              maintaining product, and transforming ideas into experiences. I do
              full end-to-end development so we can build requirements-rich
              applications together, configure pipelines, or improve team
              operations.
            </p>
            <div className="flex flex-row justify-center mb-8 md:absolute right-0 top-0">
              <img src="https://picsum.photos/250/300" className="rounded-lg" />
            </div>
          </section>
          <ul className="text-xl list-none p-0 mb-8">
            {skills.map(({ area, competencies }) => (
              <li
                key={area}
                className="pb-4 flex flex-col md:flex-row flex-wrap"
              >
                <div className="font-bold md:w-40">{area}</div>
                <div className="flex flex-wrap">
                  {competencies.map((competency) => (
                    <span key={competency} className="mr-2 text-brand-darkgray">
                      {competency}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <UnderstatedCta as="a" href="#contact">
            Get in touch
          </UnderstatedCta>
        </article>
      </div>

      <div className="module bg-brand-yellow">
        <div className="container">
          <h2 className="font-bold text-4xl md:text-5xl mb-8 md:mb-16">
            Work Experience
          </h2>
        </div>
        <div className="container scroll-container">
          <section className="flex flex-col flex-wrap md:flex-row md:justify-center">
            <Tabs
              activeIndex={activeIndex}
              tabs={workExperiences.map((exp) => exp.company)}
              isActiveIndex={isActiveIndex}
              setActiveIndex={setActiveIndex}
            />

            <div className="relative w-9/12 md:w-2/3 lg:w-1/2 mx-auto">
              {workExperiences.map((workExp, index) => (
                <Card
                  key={workExp.company}
                  className={classnames("h-full stacked-element", {
                    "stacked-element--next": isForwardIndex(index),
                    "stacked-element--prev": isBackwardIndex(index),
                    "stacked-element--current": isActiveIndex(index),
                    "stacked-element--none": [
                      isForwardIndex,
                      isBackwardIndex,
                      isActiveIndex,
                    ].every((fn) => !fn(index)),
                  })}
                >
                  <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl m-0 font-bold">
                        {workExp.title}
                      </h3>
                      <h3 className="text-lg md:text-xl m-0 font-bold text-brand-lightgreen">
                        {workExp.company}
                      </h3>
                    </div>
                    <div className="flex flex-row justify-end mb-2 sm:mb-0">
                      <div className="text-lg font-semibold text-center inline-block bg-brand-lightgreen text-white rounded-full py-1 px-3 w-auto">
                        {workExp.date.start !== workExp.date.end
                          ? `${workExp.date.start} - ${workExp.date.end}`
                          : workExp.date.start}
                      </div>
                    </div>
                  </div>
                  <p className="paragraph text-brand-darkgray mb-4 sm:mb-0">
                    {workExp.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="bg-brand-lightgray">
        <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center module--large">
          <div className="lg:w-2/5 pb-16 lg:pb-0">
            <p className="text-4xl md:text-5xl font-thin">
              Tell me about what you're working on
            </p>
          </div>
          <div className="lg:w-1/2">
            <section className="bg-white rounded-lg shadow p-8">
              <h3 className="paragraph text-center mt-0 mt-4 mb-12 font-semibold">
                Let's connect
              </h3>
              <form
                id="contact"
                name="contact"
                method="post"
                action="/pages/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid gap-6">
                  <label className="font-semibold text-xl">
                    Name
                    <input
                      autoComplete="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="mt-3 border border-solid border-brand-gray rounded p-2 focus:border-brand-lightgreen w-full outline-none"
                      required
                    />
                  </label>

                  <label className="font-semibold text-xl">
                    Email
                    <input
                      autoComplete="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="mt-3 border border-solid border-brand-gray rounded p-2 focus:border-brand-lightgreen w-full outline-none"
                      required
                    />
                  </label>
                  <label className="font-semibold text-xl">
                    Message
                    <textarea
                      name="message"
                      type="text"
                      placeholder="Message"
                      style={{ minHeight: "100px" }}
                      className="mt-3 border border-solid border-brand-gray rounded p-2 focus:border-brand-lightgreen w-full outline-none"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <button className="group flex flex-row items-center text-brand-lightgreen border-brand-lightgreen border-2 outline-none px-5 py-3 mt-8 rounded font-bold hover:bg-brand-lightgreen hover:text-white transition-colors duration-150">
                    Contact
                    <span className="ml-1 transform transition-transform duration-150 group-hover:translate-x-2">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
