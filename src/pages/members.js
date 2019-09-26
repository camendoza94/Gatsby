import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <div>
      <h1>Professors</h1>
      {data.allMembersJson.edges.map(n => {
        if (n.node.category === "professor")
          return <div key={n.node.name}>{n.node.name}</div>
      })}
      <h1>PHD Candidates</h1>
      {data.allMembersJson.edges.map(n => {
        if (n.node.category === "phd")
          return <div key={n.node.name}>{n.node.name}</div>
      })}
    </div>
  )
}

export const query = graphql`
  query Members {
  allMembersJson {
    edges {
      node {
        name
        subCategory
        category
        url
      }
    }
  }
}
  `