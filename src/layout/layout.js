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
  const { site, testimonialsYaml } = useStaticQuery(graphql`
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
      testimonialsYaml {
        attestant
        quote
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header
        menuLinks={site.siteMetadata.menuLinks}
        siteTitle={site.siteMetadata.title}
      />
      <main>{children}</main>

      <Footer
        mediaLinks={[]}
        menuLinks={site.siteMetadata.menuLinks}
        siteTitle={site.siteMetadata.title}
        testimonial={testimonialsYaml}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
