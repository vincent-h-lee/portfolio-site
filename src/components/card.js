import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Card = ({ children, className, ...props }) => (
  <section
    className={classnames(
      "shadow-lg rounded-xl bg-white p-6 lg:p-10",
      className
    )}
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
