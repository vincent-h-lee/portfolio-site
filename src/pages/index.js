import React from "react"

import { Hero } from "../modules/hero"
import { Flashcard } from "../modules/flashcard"
import { Details } from "../modules/details"
import { Contact } from "../modules/contact"
import Layout from "../layout/layout"
import SEO from "../layout/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />

      <Flashcard />

      <Details />

      <Contact />
    </Layout>
  )
}

export default IndexPage
