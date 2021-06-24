import React from "react"
import PropTypes from "prop-types"

export const Hero = ({ title, content }) => (
  <section className="module pt-48 md:pt-64">
    <div className="container flex flex-col md:flex-row md:space-x-8">
      <div className="max-w-sm w-full">
        <h1 className="text-3xl font-bold lowercase">{title}</h1>
      </div>
      <div className="w-full">
        <div
          className="text-2xl font-thin"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}
