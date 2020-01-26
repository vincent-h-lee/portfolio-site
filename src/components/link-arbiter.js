import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const LinkArbiter = ({ children, to, ...rest }) => {
  const isExternalLink = !!to || /^http(s)?/.test(to)

  if (isExternalLink) {
    return (
      <a href={to} target="_blank" {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}

LinkArbiter.propTypes = {
  to: PropTypes.string.isRequired,
}

export default LinkArbiter
