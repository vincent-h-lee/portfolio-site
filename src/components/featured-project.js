import React from "react"
import "./featured-project.scss"

const FeaturedProject = () => (
  <article className="featured-project">
    <h3 className="featured-project__label">Featured Project</h3>
    <h3 className="featured-project__title">Portfolio</h3>
    <div className="featured-project__image" />

    <div className="featured-project__content">
      <p className="featured-project__description">
        Description desc long featured project lorem ipsum carpe diem dolce
        amore
      </p>
      <div className="featured-project__skills">react nodejs</div>
    </div>
  </article>
)

export default FeaturedProject
