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
  const { allTestimonialsYaml, site } = useStaticQuery(graphql`
    query SiteQuery {
      allTestimonialsYaml(limit: 1) {
        nodes {
          attestant
          quote
        }
      }
      site {
        siteMetadata {
          title
          mediaLinks {
            name
            link
          }
          menuLinks {
            name
            link
            file
          }
        }
      }
    }
  `)

  // netlify doesn't want to build sitequery with testimonials so hard code data for now
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
        mediaLinks={site.siteMetadata.mediaLinks}
        menuLinks={site.siteMetadata.menuLinks}
        siteTitle={site.siteMetadata.title}
        testimonial={allTestimonialsYaml.nodes[0]}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
