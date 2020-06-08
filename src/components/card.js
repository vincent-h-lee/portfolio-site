import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Card = ({ children, className, ...props }) => (
  <section
    className={classnames("shadow-lg rounded bg-white p-4 absolute", className)}
    {...props}
  >
    {children}
  </section>
)

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Card
