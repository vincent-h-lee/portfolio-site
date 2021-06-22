import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import { Flashcard } from "../modules/flashcard"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Flashcard
      title="Page not found"
      content="You might have better luck on the homepage"
      link={{ url: "/", text: "Go to homepage" }}
    />
  </Layout>
)

export default NotFoundPage
