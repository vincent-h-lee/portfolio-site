import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components"

import Container from "../layout/container"
import Layout from "../layout/layout"
import Module from "../layout/module"
import SEO from "../layout/seo"
import TwoColumnSection from "../layout/two-column-section"

import Card from "../components/card"
import CTA from "../components/cta"
import TwoColumnWithImage from "../modules/two-column-with-image"
import Hero from "../modules/hero"
import SlantCard from "../components/slant-card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Module>
      <Container css={tw`pt-16 pb-24 xl:py-40`}>
        <h2 css={tw`text-5xl md:w-4/5 font-medium`}>
          Connecting the dots between business challenges and technical
          solutions
        </h2>
      </Container>
    </Module>

    <TwoColumnWithImage css={tw`pt-24`} />

    <div css={tw`relative bg-brand-neutral`}>
      <TwoColumnSection>
        <TwoColumnSection.Row>
          <TwoColumnSection.Column>
            <Card />
          </TwoColumnSection.Column>
          <TwoColumnSection.Column>
            <CTA />
          </TwoColumnSection.Column>
        </TwoColumnSection.Row>
      </TwoColumnSection>
    </div>

    <TwoColumnSection css={tw`flex-col-reverse md:flex-row`}>
      <TwoColumnSection.Row>
        <TwoColumnSection.Column vertical>
          <CTA />
        </TwoColumnSection.Column>
        <TwoColumnSection.Column vertical>
          <div css={tw`pb-10`}>
            <SlantCard />
          </div>
          <SlantCardWrapper>
            <SlantCard />
          </SlantCardWrapper>
        </TwoColumnSection.Column>
      </TwoColumnSection.Row>
    </TwoColumnSection>

    <Hero />
  </Layout>
)

export default IndexPage

const SlantCardWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    transform: translateX(-50px);
  }
`
