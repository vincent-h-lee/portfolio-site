import React from "react"
import { graphql } from "gatsby"

import { Hero } from "../modules/hero"
import { Flashcard } from "../modules/flashcard"
import { Details } from "../modules/details"
import { Contact } from "../modules/contact"
import Layout from "../layout/layout"
import Seo from "../layout/seo"

const IndexPage = ({ data: { page } }) => {
  return (
    <Layout>
      <Seo />

      <Hero {...page.hero} />

      <Flashcard {...page.about} />

      <Details
        {...page.professional_background}
        workExperience={page.professional_background.work_experience}
      />

      <Contact {...page.contact} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    page: pagesYaml(templateKey: { eq: "index-page" }) {
      hero {
        content
        title
      }
      contact {
        content
        title
      }
      professional_background {
        link {
          text
          url
        }
        title
        work_experience {
          company
          end_date
          position
          start_date
        }
      }
      about {
        content
        link {
          text
          url
        }
        title
      }
    }
  }
`
