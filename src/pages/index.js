import React from "react"
import tw from "tailwind.macro"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import TwoColumnSection from "../components/layout/two-column-section"

import Card from "../components/ui/card"
import CTA from "../components/ui/cta"
import Dots from "../components/blocks/dots"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Dots />

    <TwoColumnSection>
      <TwoColumnSection.Column>
        <Card />
      </TwoColumnSection.Column>
      <TwoColumnSection.Column>
        <CTA />
      </TwoColumnSection.Column>
    </TwoColumnSection>

    <TwoColumnSection>
      <TwoColumnSection.Column>
        <CTA css={tw`md:w-1/2`} />
      </TwoColumnSection.Column>
      <TwoColumnSection.Column>
        <div>Client 1</div>
        <div>Client 2</div>
        <div>Client 3</div>
      </TwoColumnSection.Column>
    </TwoColumnSection>

    <TwoColumnSection>
      <TwoColumnSection.Column>
        <img src="https://picsum.photos/400/300" css={tw`rounded-lg`} />
      </TwoColumnSection.Column>
      <TwoColumnSection.Column>
        <CTA css={tw`md:w-1/2`} />
      </TwoColumnSection.Column>
    </TwoColumnSection>
  </Layout>
)

export default IndexPage
