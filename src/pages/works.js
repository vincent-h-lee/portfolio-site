import React from "react"
import tw from "tailwind.macro"

import Container from "../components/layout/container"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Card from "../components/ui/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Works" />

    <Container>
      <h1>Works Page</h1>

      <section css={tw`flex flex-row py-16`}>
        <Card />
        <Card />
        <Card />
      </section>
    </Container>
  </Layout>
)

export default IndexPage
