import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import PropTypes from "prop-types"
import CTALink from "./cta-link"

const CTA = ({ description, link, linkUrl, title }) => {
  return (
    <div css={tw`w-full md:pl-16`}>
      <h2>{title}</h2>
      <p>{description}</p>

      <CTALink to={linkUrl}>{link}</CTALink>
    </div>
  )
}

CTA.defaultProps = {
  description: "Open to talk client solutions",
  link: "Let's connect",
  linkUrl: "/",
  title: "Want to collaborate?",
}

CTA.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  linkUrl: PropTypes.string,
  title: PropTypes.string,
}

export default CTA
