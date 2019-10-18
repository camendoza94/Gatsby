const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            slug
            url
            name
            status
            summary
            description
            members
            publications {
              name
              url
            }
            researchLine
            period
          }
        }
      }
    }
  `)
  result.data.allProjectsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/components/project.js`),
      context: {
        node
      },
    })
  })
}