import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"
import Layout from "../layout/layout"
import Container from "../layout/container"
import Module from "../layout/module"
import TwoColumnSection from "../layout/two-column-section"
import SEO from "../layout/seo"
import Hero from "../modules/hero"

const ContactPage = () => {
  const { pagesYaml } = useStaticQuery(contactPageQuery)

  return (
    <Layout>
      <SEO title="Contact" />

      <Hero align="center" background="neutral" {...pagesYaml.hero} />

      <SkewedModuleWrapper>
        <TwoColumnSection.Row>
          <TwoColumnSection.Column css={tw`flex flex-row justify-center`}>
            <ContactForm>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />

                <ContactField>
                  <label>Name</label>
                  <ContactFieldWrapper>
                    <input type="text" name="name" />
                  </ContactFieldWrapper>
                </ContactField>

                <ContactField>
                  <label>Email</label>
                  <ContactFieldWrapper>
                    <input type="email" name="email" />
                  </ContactFieldWrapper>
                </ContactField>

                <ContactField>
                  <label>Message</label>
                  <ContactFieldWrapper>
                    <textarea name="message" />
                  </ContactFieldWrapper>
                </ContactField>

                <button
                  type="submit"
                  css={tw`py-4 px-6 w-full rounded-sm bg-blue-500 text-white hover:bg-blue-600 hover:shadow`}
                >
                  Send Message
                </button>
              </form>
            </ContactForm>
          </TwoColumnSection.Column>
          <TwoColumnSection.Column vertical>
            <h2>Contact Me</h2>
            <p>How can I help</p>
          </TwoColumnSection.Column>
        </TwoColumnSection.Row>
      </SkewedModuleWrapper>
    </Layout>
  )
}

export default ContactPage

const contactPageQuery = graphql`
  query ContactPageQuery {
    pagesYaml(templateKey: { eq: "contact-page" }) {
      hero {
        title
        description
      }
    }
  }
`

const SkewedModuleWrapper = styled(TwoColumnSection)`
  ${tw`relative`}

  &::after {
    content: "";
    height: 50px;
    transform: skewY(-2deg);
    transform-origin: 100%;
    bottom: 100%;
    z-index: -1;
    ${tw`absolute block w-full bg-white right-0`}
  }
`

const ContactField = styled.div`
  ${tw`flex flex-col mb-8`}

  label {
    ${tw`uppercase text-xs tracking-wider mb-2 text-gray-900 font-semibold`}
  }
`

const ContactFieldWrapper = styled.div`
  input,
  textarea {
    outline: none;
    box-sizing: border-box;
    ${tw`w-full border rounded-sm p-3 border-gray-500 border-solid hover:shadow focus:border-blue-500`}
  }
`

const ContactForm = styled.div`
  transform: translateY(-15%);
  box-sizing: border-box;
  ${tw`py-8 px-4 md:py-16 md:px-10 bg-white rounded shadow-lg w-full md:w-3/4 lg:w-2/3 z-10`}
`
