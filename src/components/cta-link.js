import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import PropTypes from "prop-types"
import LinkArbiter from "./link-arbiter"

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

const StylizedLink = styled(LinkArbiter)`
  ${tw`relative text-black text-2xl tracking-wider`}

  &::after {
    content: "";
    width: 50px;
    top: 50%;
    transform: translateY(-50%) translateX(10px);
    transition: width 0.5s;

    ${tw`absolute h-1 bg-blue-600`}
  }

  &:hover {
    &::after {
      width: 70px;
    }
  }
`
