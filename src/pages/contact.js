import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import Hero from "../modules/hero"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <Hero />

    <form name="contact" method="POST" data-netlify="true">
      <label>
        Name
        <input type="text" name="name" />
      </label>

      <label>
        Email
        <input type="email" name="email" />
      </label>

      <label>
        Message
        <textarea name="message" />
      </label>
    </form>
  </Layout>
)

export default ContactPage
