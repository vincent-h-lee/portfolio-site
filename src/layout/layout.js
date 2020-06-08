/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/index.scss"

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

  return (
    <>
      <Header
        menuLinks={site.siteMetadata.menuLinks}
        siteTitle={site.siteMetadata.title}
      />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
