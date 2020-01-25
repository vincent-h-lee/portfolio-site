import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"

import QuoteSVG from "../svg/quotes"

const Testimonial = ({ attestant, quote, style }) => (
  <TestimonialWrapper style={style}>
    <StyledQuoteSVG />
    <div>
      <Quote>{quote}</Quote>
      <p>{attestant}</p>
    </div>
  </TestimonialWrapper>
)

Testimonial.propTypes = {
  attestant: PropTypes.string,
  quote: PropTypes.string,
}

export default Testimonial

const TestimonialWrapper = styled.section`
  ${tw`relative flex flex-col md:flex-row leading-normal`}
`

const StyledQuoteSVG = styled(QuoteSVG)`
  ${tw`pr-2`}
  min-width: 2rem;

  @media only screen and (max-width: 768px) {
    transform: translate(-20px, 10px);
  }
`

const Quote = styled.h4`
  ${tw`text-base`}
`
