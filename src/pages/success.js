import React from "react"

import Hero from "../modules/hero"
import Layout from "../layout/layout"
import SEO from "../layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Success" />
    <Hero
      align="center"
      description=""
      size="xl"
      subtitle="Thanks for your message"
      title="Thank you for reaching out - be in touch by email soon!"
      link={{ text: "Go to homepage", url: "/" }}
    />
  </Layout>
)

export default NotFoundPage
