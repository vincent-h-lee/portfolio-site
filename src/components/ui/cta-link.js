import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const CtaLink = ({ children, to }) => {
  return <StylizedLink to={to}>{children}</StylizedLink>
}

CtaLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string,
}

export default CtaLink

const StylizedLink = styled(Link)`
  ${tw``}
`
