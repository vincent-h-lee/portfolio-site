import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"

import QuoteSVG from "../../svg/quotes"

const Testimonial = ({ attestant, testimonial, style }) => (
  <section css={tw`relative`} style={style}>
    <StyledQuoteSVG />
    <h3>{testimonial}</h3>
    <p>{attestant}</p>
  </section>
)

Testimonial.defaultProps = {
  attestant: "Puneet Sekhon, Front End Developer",
  testimonial:
    "Testimonial lorem ipsum caro saul sea flor calum ispam cor zal bamar raos",
}

Testimonial.propTypes = {
  attestant: PropTypes.string,
  testimonial: PropTypes.string,
}

export default Testimonial

const StyledQuoteSVG = styled(QuoteSVG)`
  right: 100%;
  top: 5px;
  position: absolute;
`
