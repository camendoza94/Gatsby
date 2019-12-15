module.exports = {
  pathPrefix: "/gatsby",
  siteMetadata: {
    title: "SELF (Software Evolution Laboratory For Applied Research)",
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/data/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "material icons",
          "roboto:300,400,500,700",
        ],
      },
    }
  ]
}
