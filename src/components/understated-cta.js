import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const UnderstatedCta = ({ className, children, href }) => (
  <a
    className={classnames(className, "lowercase understated-button")}
    href={href}
  >
    {children}
  </a>
)

UnderstatedCta.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
}

export default UnderstatedCta
