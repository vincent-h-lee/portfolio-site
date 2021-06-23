module.exports = {
  siteMetadata: {
    siteUrl: `https://www.leevincenth.com`,
    title: `Vincent Lee`,
    description: `Product-focused software engineer with a background in fintech and security reporting web applications.`,
    author: `Vincent Lee`,
    mediaLinks: [
      {
        name: "Github",
        link: "https://github.com/vincent-h-lee",
      },
      {
        name: "Linkedin",
        link: "https://linkedin.com/in/leevincenth",
      },
    ],
    menuLinks: [
      {
        name: "Resume",
        link: "/vincent-lee-resume-software.pdf",
        file: true,
      },
      {
        name: "Contact",
        link: "/#contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/content/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.leevincenth.com",
        sitemap: "https://www.leevincenth.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
}
