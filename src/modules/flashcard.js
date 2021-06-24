import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import UnderstatedCta from "../components/understated-cta"
import { Markdown } from "../components/markdown"

export const Flashcard = ({ title, content, link, screen }) => (
  <section
    className={classnames("flashcard", "bg-brand-blue", {
      "flex-1 pt-32": screen,
    })}
  >
    <div
      className="container module module--top"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-offset="300"
      data-aos-duration="1200"
    >
      <article className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="p-4 md:p-8 rounded w-full bg-white">
          <h2 className="text-brand-darkblue module__heading">{title}</h2>
          <Markdown
            className="paragraph mb-8 flashcard__markdown"
            content={content}
          />
          <UnderstatedCta as="a" href={link.url}>
            {link.text}
          </UnderstatedCta>
        </div>
        <div className="max-w-sm w-full"></div>
      </article>
    </div>
  </section>
)

Flashcard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  screen: PropTypes.bool,
}
