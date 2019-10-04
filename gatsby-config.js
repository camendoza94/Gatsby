module.exports = {
  pathPrefix: "/gatsby",
  siteMetadata: {
    title: "SELF (Software Evolution Laboratory For Applied Research)",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-json`
  ],
}
