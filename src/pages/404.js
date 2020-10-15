import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="hero bg-brand-darkgreen">
        <div className="container">
          <h1 className="text-white text-4xl md:text-5xl font-bold m-0">
          Page not found
          </h1>
          <h2 className="text-white opacity-50 text-4xl md:text-5xl font-bold m-0">
          </h2>
          <p className="py-6 text-xl md:text-2xl text-gray-300 font-thin lg:w-1/2">
          Sorry the page you're looking for doesn't exist

          </p>
        </div>
      </div>
  </Layout>
)

export default NotFoundPage
