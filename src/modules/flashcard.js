import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import UnderstatedCta from "../components/understated-cta"
import { Markdown } from "../components/markdown"

export const Flashcard = ({ title, content, link, avatar }) => (
  <section className={classnames("flashcard", "bg-brand-blue")}>
    <div
      className="container module module--top"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-offset="300"
      data-aos-duration="1200"
    >
      <article className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="p-4 md:p-8 rounded w-full bg-white">
          <div className="flex flex-row space-x-4 items-center mt-4 md:mt-0 mb-4">
            {avatar && (
              <img src={avatar.src} alt={avatar.alt} className="w-16 h-16" />
            )}
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>

          <Markdown
            className="paragraph mb-4 flashcard__markdown"
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
  avatar: PropTypes.shape({
    url: PropTypes.string,
    src: PropTypes.string,
  }),
}
