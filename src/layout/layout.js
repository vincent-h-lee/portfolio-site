/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import GlobalStyle from "./global-style"
import Header from "./header"
import "./normalize.css"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  // netlify doesn't want to build sitequery with testimonials/links so hard code data for now
  const mediaLinks = [
    {
      name: "Github",
      link: "https://github.com/vincent-h-lee",
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/leevincenth",
    },
  ]
  const testimonial = {
    attestant: "Puneet Sekhon, Front End Developer",
    quote:
      "I had the pleasure of working with Vincent at CMLS. He was exceptionally good at understanding the business requirements and implementing them without any delays. I am very impressed by the approach he takes to mentor team members. He would definitely be an asset to any company.",
  }

  return (
    <>
      <GlobalStyle />
      <Header
        menuLinks={site.siteMetadata.menuLinks}
        siteTitle={site.siteMetadata.title}
      />
      <main>{children}</main>

      <Footer
        mediaLinks={mediaLinks}
        menuLinks={site.siteMetadata.menuLinks}
        siteTitle={site.siteMetadata.title}
        testimonial={testimonial}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
