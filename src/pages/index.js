import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"

import Card from "../components/card"
import FeaturedProject from "../components/featured-project"
import Project from "../components/project"
import Tab, { useTabs } from "../components/tab"
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
          <h1 className="text-white text-6xl font-bold m-0">
            Hi, I'm Vincent Lee
          </h1>
          <h2 className="text-brand-gray text-6xl font-bold m-0">
            I build applications for complex domains
          </h2>
        </div>
      </div>

      <div className="container py-16">
        <article>
          <h2 className="text-brand-lightgreen font-bold text-3xl m-0 mb-8">
            About
          </h2>
          <section className="flex flex-wrap flex-col md:flex-row">
            <div className="text-xl font-thin md:w-1/2">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions.
            </div>
            <div className="flex justify-center md:justify-end py-16 md:py-0 md:w-1/2">
              <img src="https://picsum.photos/250/300" className="rounded-lg" />
            </div>
          </section>
          <ul className="list-none p-0">
            {skills.map(({ area, competencies }) => (
              <li
                key={area}
                className="pb-4 flex flex-col md:flex-row flex-wrap"
              >
                <div className="font-bold md:w-24">{area}</div>
                <div>
                  {competencies.map((competency) => (
                    <span key={competency} className="mr-2">
                      {competency}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <button className="font-bold text-xl bg-transparent border-0">
            Get in touch
          </button>
        </article>
      </div>

      <div className="bg-brand-lightgray py-16">
        <div className="container">
          <h2 className="font-bold text-3xl mb-8">Work Experience</h2>
          <section className="flex flex-col md:flex-row flex-wrap">
            <nav className="flex flex-row pr-20 md:flex-col">
              {workExperiences.map((workExp, index) => (
                <Tab
                  key={workExp.company}
                  active={tabControls.isCurrentTab(index)}
                  setActive={tabControls.setCurrentTab}
                  tabKey={index}
                >
                  {workExp.company}
                </Tab>
              ))}
            </nav>
            <div className="relative">
              {workExperiences.map((workExp, index) => (
                <Card
                  key={workExp.company}
                  className={classnames({
                    hidden: !tabControls.isCurrentTab(index),
                    block: tabControls.isCurrentTab(index),
                  })}
                >
                  <div
                    className="flex flex-col md:flex-row md:justify-between mb-8"
                    style={{ minWidth: "400px" }}
                  >
                    <div>
                      <h3 className="m-0 font-semibold">{workExp.title}</h3>
                      <h3 className="m-0 font-semibold text-brand-lightgreen">
                        {workExp.company}
                      </h3>
                    </div>
                    <span className="bg-brand-lightgreen text-white rounded-full p-2">
                      {workExp.date.start} - {workExp.date.end}
                    </span>
                  </div>
                  <p>{workExp.description}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="container py-16">
        <h2 className="font-bold text-3xl mb-8">Projects</h2>

        <section>
          <FeaturedProject />
          <div className="flex flex-row -mx-4">
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>

      <div className="container flex flex-col md:flex-row my-32">
        <h2 className="text-5xl font-semibold md:w-1/2">Let's connect</h2>
        <p className="text-5xl font-thin md:w-1/2">
          Shorter blurb lorem ipsum dora crape diem
        </p>
      </div>

      <div className="bg-brand-lightgray py-16">
        <div className="container">
          <section className="bg-white rounded-lg shadow p-8 md:mx-32">
            <h3 className="text-center mt-0 mb-8 font-semibold">
              Don’t hesitate to reach out with any questions
            </h3>
            <form
              name="contact"
              method="post"
              action="/pages/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-solid border-brand-gray rounded-sm p-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-0 w-full outline-none"
                  />
                </div>
                <div className="border border-solid border-brand-gray rounded-sm p-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-0 w-full outline-none"
                  />
                </div>
                <div className="col-span-2 border border-solid border-brand-gray rounded-sm p-2">
                  <textarea
                    placeholder="Message"
                    className="border-0 w-full outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full">
                <button className="text-brand-lightgreen border-brand-lightgreen border-2 outline-none px-5 py-3 mt-8 rounded font-bold">
                  Contact
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
