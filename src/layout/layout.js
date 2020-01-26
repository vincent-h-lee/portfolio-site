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
  const { site, allLinksYaml, allTestimonialsYaml } = useStaticQuery(graphql`
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
      allLinksYaml {
        nodes {
          name
          link
        }
      }
      allTestimonialsYaml {
        nodes {
          attestant
          quote
        }
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
        mediaLinks={allLinksYaml.nodes}
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
