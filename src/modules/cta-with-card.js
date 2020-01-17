import React from "react"
import PropTypes from "prop-types"
import tw from "tailwind.macro"
import TwoColumnSection from "../layout/two-column-section"
import Card from "../components/card"
import CTA from "../components/cta"

const CTAWithCard = ({ card, cta }) => {
  return (
    <div css={tw`relative bg-brand-neutral`}>
      <TwoColumnSection>
        <TwoColumnSection.Row>
          <TwoColumnSection.Column>
            <Card {...card} />
          </TwoColumnSection.Column>
          <TwoColumnSection.Column>
            <CTA {...cta} />
          </TwoColumnSection.Column>
        </TwoColumnSection.Row>
      </TwoColumnSection>
    </div>
  )
}

CTAWithCard.propTypes = {
  card: PropTypes.object,
  cta: PropTypes.object,
}

export default CTAWithCard
