import React from "react"
import { graphql } from "gatsby"

import { IndexPageTemplate } from "../templates/index-page"
import Layout from "../layout/layout"
import Seo from "../layout/seo"

const IndexPage = ({ data: { page } }) => (
  <Layout>
    <Seo title="Home" />

    <IndexPageTemplate {...page} />
  </Layout>
)

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
