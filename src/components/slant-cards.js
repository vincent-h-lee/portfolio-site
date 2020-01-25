import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"
import SlantCard, { SlantCardProps } from "./slant-card"

const SlantCards = ({ cards }) => {
  return (
    <div css={tw`w-3/4`}>
      {cards.map((card, idx) => (
        <SlantCardWrapper key={idx}>
          <SlantCard {...card} />
        </SlantCardWrapper>
      ))}
    </div>
  )
}

SlantCards.defaultProps = {
  cards: [],
}

SlantCards.propTypes = {
  cards: PropTypes.arrayOf(SlantCardProps),
}

export default SlantCards

const SlantCardWrapper = styled.div`
  &:last-child {
    @media only screen and (min-width: 768px) {
      transform: translateX(-50px);
    }
  }
  &:not(:last-child) {
    ${tw`pb-10`}
  }
`
