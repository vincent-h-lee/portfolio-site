import React from "react"
import tw from "tailwind.macro"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import TwoColumnSection from "../components/layout/two-column-section"

import Card from "../components/ui/card"
import CTA from "../components/ui/cta"
import Dots from "../components/blocks/dots"
import SlantCard from "../components/ui/slant-card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Dots css={tw`pt-24`} />

    <div css={tw`relative bg-brand-neutral`}>
      <TwoColumnSection>
        <TwoColumnSection.Column>
          <Card />
        </TwoColumnSection.Column>
        <TwoColumnSection.Column>
          <CTA />
        </TwoColumnSection.Column>
      </TwoColumnSection>
    </div>

    <TwoColumnSection css={tw`flex-col-reverse md:flex-row`}>
      <TwoColumnSection.Column vertical>
        <CTA />
      </TwoColumnSection.Column>
      <TwoColumnSection.Column vertical>
        <div css={tw`pb-10`}>
          <SlantCard />
        </div>
        <div style={{ transform: "translateX(-50px)" }}>
          <SlantCard />
        </div>
      </TwoColumnSection.Column>
    </TwoColumnSection>

    <div css={tw`relative py-48`}>
      <img
        src="https://picsum.photos/1000/500"
        css={tw`w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover`}
      />
      <CTA />
    </div>
  </Layout>
)

export default IndexPage
