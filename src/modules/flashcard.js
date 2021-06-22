import React from "react"
import UnderstatedCta from "../components/understated-cta"

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
    competencies: ["gitlab-ci", "aws", "terraform"],
  },
]

export const Flashcard = ({ title, content, link }) => {
  return (
    <section className="bg-brand-blue">
      <div className="container module module--top">
        <article className="flex flex-col md:flex-row md:space-x-8">
          <div className="max-w-sm w-full"></div>
          <div className="p-4 md:p-8 rounded w-full bg-white">
            <h2 className="text-brand-darkblue module__heading">{title}</h2>
            <p className="paragraph mb-8">{content}</p>
            <UnderstatedCta as="a" href={link.url}>
              {link.text}
            </UnderstatedCta>
          </div>
        </article>
      </div>
    </section>
  )
}

Flashcard.defaultProps = {
  title: "About",
  content:
    "Hello, I'm Vincent. I have years of working in cross-functional teams, shipping and maintaining product, and transforming ideas into experiences. I do full end-to-end development -- I can help build requirements-rich applications, configure pipelines, or improve team operations.",
  link: {
    url: "#contact",
    text: "Get in touch",
  },
}
