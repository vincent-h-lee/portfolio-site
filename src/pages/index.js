import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"
import { FaArrowRight } from "react-icons/fa"

import Card from "../components/card"
import FeaturedProject from "../components/featured-project"
import Project from "../components/project"
import Tab, { useTabs } from "../components/tab"
import UnderstatedButton from "../components/understated-button"
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
      competencies: ["nodejs", "php", "java", "clojure", "kotlin"],
    },
    {
      area: "frontend",
      competencies: ["reactjs", "vuejs"],
    },
    {
      area: "infra",
      competencies: ["gitlab-ci", "docker", "aws", "terraform", "ansible"],
    },
  ]

  const workExperiences = [
    {
      company: "Cisco",
      title: "Software Engineer III",
      date: {
        start: "May 2020",
        end: "Present",
      },
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    },
    {
      company: "CMLS Financial",
      title: "Consultant",
      date: {
        start: "Feb 2020",
        end: "May 2020",
      },
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    },
    {
      company: "Briteweb",
      title: "Senior Fullstack Developer",
      date: {
        start: "Jan 2019",
        end: "Jan 2020",
      },
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    },
    {
      company: "Grow",
      title: "Software Engineer",
      date: {
        start: "Jan 2018",
        end: "Aug 2018",
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

  return (
    <Layout>
      <SEO title="Home" />

      <div className="bg-brand-darkgreen flex flex-col justify-center h-auto min-h-screen md:h-screen">
        <div className="container">
          <h1 className="text-white text-4xl md:text-5xl font-bold m-0">
            Hi, I'm Vincent Lee
          </h1>
          <h2 className="text-white opacity-7 text-4xl md:text-5xl font-bold m-0">
            I build applications for complex domains
          </h2>
        </div>
      </div>

      <div className="container module">
        <article>
          <h2 className="text-brand-lightgreen font-bold text-4xl md:text-5xl m-0 mb-8 md:mb-16">
            About
          </h2>
          <section className="flex flex-wrap flex-col md:flex-row">
            <p className="paragraph font-thin md:w-1/2 pb-10">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions.
            </p>
            <div className="flex justify-center md:justify-end py-16 md:py-0 md:w-1/2">
              <img src="https://picsum.photos/250/300" className="rounded-lg" />
            </div>
          </section>
          <ul className="text-xl list-none p-0">
            {skills.map(({ area, competencies }) => (
              <li
                key={area}
                className="pb-4 flex flex-col md:flex-row flex-wrap"
              >
                <div className="font-bold md:w-40">{area}</div>
                <div className="flex flex-wrap">
                  {competencies.map((competency) => (
                    <span key={competency} className="mr-2">
                      {competency}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <UnderstatedButton>Get in touch</UnderstatedButton>
        </article>
      </div>

      <div className="bg-brand-lightgray module">
        <div className="container">
          <h2 className="font-bold text-4xl md:text-5xl mb-8 md:mb-16">
            Work Experience
          </h2>
        </div>
        <div className="container scroll-container">
          <section className="flex flex-col lg:flex-row flex-wrap">
            <nav className="flex flex-row overflow-x-auto w-full mb-12 px-8 sm:px-0 lg:mb-0 lg:flex-col lg:w-auto lg:pr-32">
              {workExperiences.map((workExp, index) => (
                <Tab
                  key={workExp.company}
                  active={tabControls.isCurrentTab(index)}
                  setActive={tabControls.setCurrentTab}
                  tabKey={index}
                >
                  <span className="text-2xl lg:text-3xl font-semibold">
                    {workExp.company}
                  </span>
                </Tab>
              ))}
            </nav>
            <div className="relative flex-1 px-8 md:px-0">
              {workExperiences.map((workExp, index) => (
                <Card
                  key={workExp.company}
                  className={classnames({
                    hidden: !tabControls.isCurrentTab(index),
                    block: tabControls.isCurrentTab(index),
                  })}
                >
                  <div className="flex flex-col-reverse mb-8 md:mb-16 md:mb-20 lg:flex-row lg:justify-between lg:items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl m-0 font-semibold">
                        {workExp.title}
                      </h3>
                      <h3 className="text-2xl md:text-3xl m-0 font-semibold text-brand-lightgreen">
                        {workExp.company}
                      </h3>
                    </div>
                    <div className="flex flex-row justify-end mb-12 md:mb-0">
                      <div className="text-lg md:text-xl text-center inline-block bg-brand-lightgreen text-white rounded-full py-2 px-3 w-auto">
                        {workExp.date.start} - {workExp.date.end}
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

      <div className="container module">
        <h2 className="font-bold text-4xl md:text-5xl mb-8 md:mb-16">
          Projects
        </h2>

        <section>
          <FeaturedProject />

          <h3 className="text-2xl md:text-3xl mb-4 font-semibold text-right md:hidden">
            More Projects
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>

      <div className="container flex flex-col md:flex-row pb-24">
        <h2 className="text-4xl md:text-5xl font-semibold md:w-1/2">
          Let's connect
        </h2>
        <p className="text-4xl md:text-5xl font-thin md:w-1/2">
          Shorter blurb lorem ipsum dora crape diem
        </p>
      </div>

      <div className="bg-brand-lightgray module">
        <div className="container">
          <section className="bg-white rounded-lg shadow p-8 md:mx-32 lg:mx-56">
            <h3 className="text-center mt-0 mb-8 font-semibold">
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

              <div className="grid gap-4">
                <div className="border border-solid border-brand-gray rounded-sm p-2 focus-within:border-brand-lightgreen">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-0 w-full outline-none"
                  />
                </div>
                <div className="border border-solid border-brand-gray rounded-sm p-2 focus-within:border-brand-lightgreen">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-0 w-full outline-none"
                  />
                </div>
                <div className="md:col-span-2 border border-solid border-brand-gray rounded-sm p-2 focus-within:border-brand-lightgreen">
                  <textarea
                    placeholder="Message"
                    className="border-0 w-full outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full">
                <button className="flex flex-row items-center text-brand-lightgreen border-brand-lightgreen border-2 outline-none px-5 py-3 mt-8 rounded font-bold">
                  Contact <FaArrowRight className="ml-2" />
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
