import React from "react"
import PropTypes from "prop-types"
import tw from "tailwind.macro"
import CTALink from "../components/cta-link"
import TwoColumnSection from "../layout/two-column-section"

const CTA = ({ children, description, link, reverse, title }) => {
  return (
    <TwoColumnSection css={tw`py-20 lg:py-48`}>
      <TwoColumnSection.Row reverse={reverse}>
        <TwoColumnSection.Column css={tw`flex flex-col justify-center`}>
          <article css={tw`w-full md:w-4/5`}>
            <h2 css={tw`text-3xl tracking-widest uppercase`}>{title}</h2>
            <p
              css={tw`text-xl leading-normal`}
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {link && <CTALink to={link.url}>{link.text}</CTALink>}
          </article>
        </TwoColumnSection.Column>
        <TwoColumnSection.Column
          css={tw`flex flex-col justify-center items-center`}
        >
          {children}
        </TwoColumnSection.Column>
      </TwoColumnSection.Row>
    </TwoColumnSection>
  )
}

CTA.propTypes = {
  description: PropTypes.string,
  link: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  reverse: PropTypes.bool,
  title: PropTypes.string,
}

export default CTA
