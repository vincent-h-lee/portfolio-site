import React from "react"

import Layout from "../layout/layout"
import Seo from "../layout/seo"
import { Flashcard } from "../modules/flashcard"
import { Hero } from "../modules/hero"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <Hero
      title="Page not found"
      content="Uh oh, you're on a page that doesn't exist."
    />

    <Flashcard
      title="Try the homepage"
      content="You might have better luck on the homepage"
      link={{ url: "/", text: "Go to homepage" }}
    />
  </Layout>
)

export default NotFoundPage
