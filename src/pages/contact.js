import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

import BaseButton from "../components/base-button"
import Layout from "../layout/layout"
import TwoColumnSection from "../layout/two-column-section"
import SEO from "../layout/seo"
import Hero from "../modules/hero"

const ContactPage = () => {
  const { pagesYaml } = useStaticQuery(contactPageQuery)

  return (
    <Layout>
      <SEO title="Contact" />

      <Hero
        align="center"
        background="secondary"
        {...pagesYaml.hero}
        image="https://picsum.photos/800/500"
        size="xl"
      />

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

                <BaseButton color="accent" full type="submit">
                  Send Message
                </BaseButton>
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
      }
    }
  }
`

const SkewedModuleWrapper = styled(TwoColumnSection)`
  ${tw`relative bg-brand-neutral`}

  &::before {
    content: "";
    height: 50%;
    width: 100%;
    transform: skewY(-3deg) translateY(-20%);
    transform-origin: 0 0;
    z-index: -1;
    ${tw`absolute block top-0 bg-brand-neutral`}
  }
`

const ContactField = styled.div`
  ${tw`flex flex-col mb-8`}

  label {
    ${tw`uppercase text-xs tracking-wider mb-2 text-gray-900 font-bold`}
  }
`

const ContactFieldWrapper = styled.div`
  input,
  textarea {
    outline: none;
    box-sizing: border-box;
    ${tw`w-full max-w-full border rounded-sm p-3 border-gray-500 border-solid focus:shadow focus:border-blue-500`}
  }
`

const ContactForm = styled.div`
  transform: translateY(-20%);
  box-sizing: border-box;
  ${tw`py-8 px-4 md:py-16 md:px-10 bg-white rounded shadow-xl w-full md:w-3/4 lg:w-2/3 z-10`}
`
