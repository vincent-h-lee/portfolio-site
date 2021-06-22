/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteQuery {
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
      <footer className="bg-brand-darkblue">
        <section className="container text-white py-4 flex justify-between items-center">
          <p className="text-white font-semibold">Site by Vincent Lee</p>
          <div className="flex flex-row items-center text-2xl">
            <a
              href="https://github.com/vincent-h-lee"
              target="_blank"
              className="mr-2"
              rel="noreferrer"
            >
              <FaGithub aria-label="Github" />
            </a>
            <a
              href="https://linkedin.com/in/leevincenth"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn aria-label="Linkedin" />
            </a>
          </div>
        </section>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
