import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Card from "../components/card"
import CTA from "../modules/cta"
import ListWithImage from "../modules/list-with-image"
import Hero from "../modules/hero"
import Intro from "../modules/intro"
import SlantCards from "../components/slant-cards"

const IndexPage = () => {
  const { pagesYaml } = useStaticQuery(indexPageQuery)
  const {
    intro,
    cta_with_card,
    cta_with_slants,
    hero,
    list_with_image,
  } = pagesYaml

  return (
    <Layout>
      <SEO title="Home" />

      <div
        css={tw`bg-blue-800 flex flex-col justify-center h-auto min-h-screen md:h-screen`}
      >
        <Intro {...intro} />
      </div>

      <ListWithImage css={tw`pt-24`} {...list_with_image} />

      <div css={tw`bg-gray-100`}>
        <CTA reverse={true} {...cta_with_card.cta}>
          <div css={tw`md:pr-8 lg:px-0`}>
            <Card {...cta_with_card.card} padding={true} />
          </div>
        </CTA>
      </div>

      <CTA {...cta_with_slants.cta}>
        <SlantCards cards={cta_with_slants.slants} />
      </CTA>

      <Hero {...hero} align="center" color="primary" size="sm" />
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
          image {
            alt
            src
          }
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
        }
        slants {
          title
          subtitle
          image {
            src
            alt
          }
        }
      }
      list_with_image {
        title
        description
        data {
          title
          description
        }
        image {
          alt
          src
        }
      }
      hero {
        title
        subtitle
        link {
          url
          text
        }
      }
    }
  }
`
