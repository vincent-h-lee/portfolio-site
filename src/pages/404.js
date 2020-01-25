import React from "react"

import Hero from "../modules/hero"
import Layout from "../layout/layout"
import SEO from "../layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Hero
      align="center"
      description=""
      size="xl"
      subtitle="Not Found"
      title="The link you followed may be broken, or the page may have been moved or removed."
      link={{ text: "Go to homepage", url: "/" }}
    />
  </Layout>
)

export default NotFoundPage
