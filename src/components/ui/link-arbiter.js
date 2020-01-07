import React, { createElement } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const LinkArbiter = ({ children, to, ...rest }) => {
  const isExternalLink = /^http(s)?/.test(to)

  const Element = isExternalLink ? createElement("a") : Link
  const linkPropName = isExternalLink ? "href" : "to"
  const linkProps = {
    [linkPropName]: to,
  }

  return (
    <Element {...linkProps} {...rest}>
      {children}
    </Element>
  )
}

/* LinkArbiter.propTypes = {
  to: PropTypes.string.isRequired,
} */

export default LinkArbiter
