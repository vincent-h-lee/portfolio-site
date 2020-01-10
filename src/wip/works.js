import React from "react"
import tw from "tailwind.macro"

import Container from "../layout/container"
import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Card from "../components/card"
import Hero from "../modules/hero"

const WorksPage = () => (
  <Layout>
    <SEO title="Works" />

    <Hero />

    <Container>
      <section css={tw`flex flex-row py-16`}>
        <Card />
        <Card />
        <Card />
      </section>
    </Container>
  </Layout>
)

// WIP
//export default WorksPage
