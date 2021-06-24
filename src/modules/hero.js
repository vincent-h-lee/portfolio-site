import React from "react"
import PropTypes from "prop-types"
import { Markdown } from "../components/markdown"

export const Hero = ({ title, content }) => (
  <section className="module pt-48 md:pt-64">
    <div className="container flex flex-col md:flex-row md:space-x-8">
      <div className="max-w-sm w-full">
        <h1 className="text-3xl font-bold lowercase">{title}</h1>
      </div>
      <div className="w-full">
        <Markdown className="text-2xl font-thin" content={content} />
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}
