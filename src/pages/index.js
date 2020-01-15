import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"
import styled from "styled-components"

import Container from "../layout/container"
import Layout from "../layout/layout"
import Module from "../layout/module"
import SEO from "../layout/seo"
import TwoColumnSection from "../layout/two-column-section"

import Card from "../components/card"
import CTA from "../components/cta"
import CTAWithCard from "../modules/cta-with-card"
import CTAWithImage from "../modules/cta-with-image"
import Hero from "../modules/hero"
import Intro from "../modules/intro"
import SlantCard from "../components/slant-card"

const IndexPage = () => {
  const { pagesYaml } = useStaticQuery(indexPageQuery)

  return (
    <Layout>
      <SEO title="Home" />

      <Intro {...pagesYaml.intro} />

      <CTAWithImage css={tw`pt-24`} />

      <CTAWithCard {...pagesYaml.two_col_card_cta} />

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
}
export default IndexPage

const indexPageQuery = graphql`
  query IndexPageQuery {
    pagesYaml(templateKey: { eq: "home-page" }) {
      intro {
        text
      }
      cta_with_card {
        card {
          description
          title
        }
        cta {
          description
          title
          link {
            text
            url
          }
        }
      }
    }
  }
`

const SlantCardWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    transform: translateX(-50px);
  }
`
