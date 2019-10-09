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
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    }
  ],
}
