import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import PropTypes from "prop-types"
import CTALink from "./cta-link"

const CTA = ({ description, link, linkUrl, title }) => {
  return (
    <div css={tw`w-full `}>
      <h2 css={tw`text-3xl tracking-widest uppercase`}>{title}</h2>
      <p css={tw`text-2xl leading-normal`}>{description}</p>

      <CTALink to={linkUrl}>{link}</CTALink>
    </div>
  )
}

CTA.defaultProps = {
  description:
    "Description of skills, methodology and accomplishments. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  link: "Let's connect",
  linkUrl: "/",
  title: "Let's Collaborate",
}

CTA.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  linkUrl: PropTypes.string,
  title: PropTypes.string,
}

export default CTA
