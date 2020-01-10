import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"

import QuoteSVG from "../svg/quotes"

const Testimonial = ({ attestant, testimonial, style }) => (
  <TestimonialWrapper style={style}>
    <StyledQuoteSVG />
    <div>
      <h3>{testimonial}</h3>
      <p>{attestant}</p>
    </div>
  </TestimonialWrapper>
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

const TestimonialWrapper = styled.section`
  ${tw`relative flex flex-col md:flex-row`}
`

const StyledQuoteSVG = styled(QuoteSVG)`
  ${tw`pr-2`}

  @media only screen and (max-width: 768px) {
    transform: translate(-20px, 10px);
  }
`
