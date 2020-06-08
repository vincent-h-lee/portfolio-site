import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Project = ({ background, description, skills, title }) => (
  <article
    className={classnames(
      "w-full md:w-1/3 text-white p-4 mx-4 h-56 flex flex-col justify-between",
      background
    )}
  >
    <div>
      <h4 className="mt-1 mb-2 font-semibold">{title}</h4>
      <p className="m-0 font-thin">{description}</p>
    </div>

    <div className="flex flex-row flex-wrap">
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
