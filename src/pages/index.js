import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"

import Container from "../layout/container"
import Layout from "../layout/layout"
import Module from "../layout/module"
import SEO from "../layout/seo"

import Card from "../components/card"
import CTA from "../modules/cta"
import CTAWithImage from "../modules/cta-with-image"
import Hero from "../modules/hero"
import Intro from "../modules/intro"
import SlantCards from "../components/slant-cards"

const IndexPage = () => {
  const { pagesYaml } = useStaticQuery(indexPageQuery)
  const { intro, cta_with_card, cta_with_slants, hero } = pagesYaml

  return (
    <Layout>
      <SEO title="Home" />

      <Intro {...intro} />

      <CTAWithImage css={tw`pt-24`} />

      <div css={tw`bg-brand-neutral`}>
        <CTA reverse={true} {...cta_with_card.cta}>
          <Card {...cta_with_card.card} />
        </CTA>
      </div>

      <CTA {...cta_with_slants.cta}>
        <SlantCards cards={cta_with_slants.slants} />
      </CTA>

      <Hero {...hero} align="center" />
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
      cta_with_slants {
        cta {
          description
          title
          link {
            text
            url
          }
        }
        slants {
          title
          subtitle
        }
      }
      hero {
        title
        description
      }
    }
  }
`
