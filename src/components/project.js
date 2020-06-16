import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Project = ({ background, description, skills, title }) => (
  <article
    className={classnames(
      "text-white p-4 rounded-sm flex flex-col justify-between",
      background
    )}
  >
    <div>
      <h4 className="mt-1 mb-2 font-semibold text-2xl">{title}</h4>
      <p className="m-0 text-xl font-thin">{description}</p>
    </div>

    <div className="flex flex-row flex-wrap mt-12 text-xl">
      {skills &&
        skills.map((skill) => (
          <span key={skill} className="mr-2 font-thin">
            {skill}
          </span>
        ))}
    </div>
  </article>
)

Project.defaultProps = {
  background: "bg-brand-green",
}

Project.propTypes = {
  background: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default Project
