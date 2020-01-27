import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const LinkArbiter = ({ children, file, to, ...rest }) => {
  const isExternalLink = !to ? true : /^http(s)?:\/\//.test(to)
  console.log(isExternalLink, file, to, rest)
  if (isExternalLink || file) {
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
  file: PropTypes.bool,
  to: PropTypes.string,
}

export default LinkArbiter
