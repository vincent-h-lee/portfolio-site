import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"
import { FaArrowRight } from "react-icons/fa"

import Card from "../components/card"
import FeaturedProject from "../components/featured-project"
import Project from "../components/project"
import Tab, { useTabs } from "../components/tab"
import UnderstatedCta from "../components/understated-cta"
import useStack from "../components/use-stack"
import Layout from "../layout/layout"
import SEO from "../layout/seo"

const IndexPage = () => {
  const tabControls = useTabs(0)
  const { pagesYaml } = useStaticQuery(indexPageQuery)
  const {
    intro,
    cta_with_card,
    cta_with_slants,
    hero,
    list_with_image,
  } = pagesYaml

  const skills = [
    {
      area: "backend",
      competencies: ["nodejs", "php", "java", "clojure"],
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
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    },
    {
      company: "CMLS Financial",
      title: "Consultant",
      date: {
        start: "2020",
        end: "2020",
      },
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    },
    {
      company: "Briteweb",
      title: "Senior Fullstack Developer",
      date: {
        start: "2019",
        end: "2020",
      },
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    },
    {
      company: "Grow",
      title: "Software Engineer",
      date: {
        start: "2018",
        end: "2018",
      },
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    },
  ]

  const projects = [
    {
      title: "Portfolio 1",
      description: "Description description description",
      skills: ["react", "nodejs"],
    },
    {
      title: "Portfolio 2",
      description: "Description description description",
      skills: ["react", "nodejs"],
    },
    {
      title: "Portfolio 3",
      description: "Description description description",
      skills: ["react", "nodejs"],
    },
  ]
  const stackControls = useStack({
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

      <div className="container module">
        <article>
          <h2 className="text-brand-lightgreen font-bold text-4xl md:text-5xl m-0 mb-10">
            About
          </h2>
          <section className="flex flex-wrap flex-col md:flex-row relative">
            <p className="paragraph font-thin md:w-1/2 mb-8">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions.
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
          <section className="flex flex-col flex-wrap lg:flex-row lg:justify-center">
            <nav className="flex flex-row overflow-x-auto w-full mb-12 px-8 sm:px-0 lg:ml-32 lg:mb-0 lg:flex-col lg:w-auto">
              {workExperiences.map((workExp, index) => (
                <Tab
                  key={workExp.company}
                  active={stackControls.isActiveIndex(index)}
                  setActive={stackControls.setActiveIndex}
                  tabKey={index}
                >
                  <span className="text-xl lg:text-2xl font-medium">
                    {workExp.company}
                  </span>
                </Tab>
              ))}
            </nav>
            <div className="relative w-9/12 md:w-2/3 lg:w-1/2 mx-auto">
              {workExperiences.map((workExp, index) => (
                <Card
                  key={workExp.company}
                  className={classnames("stacked-element", {
                    "stacked-element--next": stackControls.isForwardIndex(
                      index
                    ),
                    "stacked-element--prev": stackControls.isBackwardIndex(
                      index
                    ),
                    "stacked-element--current": stackControls.isActiveIndex(
                      index
                    ),
                    "stacked-element--none": [
                      stackControls.isForwardIndex,
                      stackControls.isBackwardIndex,
                      stackControls.isActiveIndex,
                    ].every((fn) => !fn(index)),
                  })}
                >
                  <div className="flex flex-col-reverse mb-8 lg:flex-row lg:justify-between lg:items-center">
                    <div>
                      <h3 className="text-lg md:text-xl m-0 font-bold">
                        {workExp.title}
                      </h3>
                      <h3 className="text-lg md:text-xl m-0 font-bold text-brand-lightgreen">
                        {workExp.company}
                      </h3>
                    </div>
                    <div className="flex flex-row justify-end mb-12 md:mb-0">
                      <div className="text-lg font-semibold md:text-xl text-center inline-block bg-brand-lightgreen text-white rounded-full py-2 px-3 w-auto">
                        {workExp.date.start !== workExp.date.end
                          ? `${workExp.date.start} - ${workExp.date.end}`
                          : workExp.date.start}
                      </div>
                    </div>
                  </div>
                  <p className="paragraph text-brand-darkgray">
                    {workExp.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row py-32 xl:py-40">
        <h2 className="text-4xl md:text-5xl font-bold md:w-1/2">
          Let's connect
        </h2>
        <p className="text-4xl md:text-5xl font-thin md:w-1/2">
          Shorter blurb lorem ipsum dora crape diem
        </p>
      </div>

      <div className="bg-brand-lightgray module--large">
        <div className="container">
          <section className="bg-white rounded-lg shadow p-8 md:mx-24 lg:mx-48 xl:mx-56">
            <h3 className="text-center mt-0 mt-4 mb-12 font-semibold">
              Don’t hesitate to reach out with any questions
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
                <div className="border border-solid border-brand-gray rounded p-2 focus-within:border-brand-lightgreen">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-0 w-full outline-none"
                  />
                </div>
                <div className="border border-solid border-brand-gray rounded p-2 focus-within:border-brand-lightgreen">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-0 w-full outline-none"
                  />
                </div>
                <div className="md:col-span-2 border border-solid border-brand-gray rounded p-2 focus-within:border-brand-lightgreen">
                  <textarea
                    placeholder="Message"
                    className="border-0 w-full outline-none h-40"
                  />
                </div>
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
    </Layout>
  )
}

export default IndexPage

const indexPageQuery = graphql`
  query IndexPageQuery {
    pagesYaml(templateKey: { eq: "home-page" }) {
      intro {
        text
      }
      cta_with_card {
        card {
          description
          image {
            alt
            src
          }
          title
        }
        cta {
          description
          title
          link {
            text
            url
          }
        }
      }
      cta_with_slants {
        cta {
          description
          title
        }
        slants {
          title
          subtitle
          image {
            src
            alt
          }
        }
      }
      list_with_image {
        title
        description
        data {
          title
          description
        }
        image {
          alt
          src
        }
      }
      hero {
        title
        subtitle
        link {
          url
          text
        }
      }
    }
  }
`
