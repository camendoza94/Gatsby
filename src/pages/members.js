import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

export default ({ data }) => {
  return (
    <Fragment>
      <Header/>
      <h1>Professors</h1>
      {data.allMembersJson.edges.map(n => {
        if (n.node.category === "professor")
          return <div key={n.node.name}>{n.node.name}</div>
        return "";
      })}
      <h1>PHD Candidates</h1>
      {data.allMembersJson.edges.map(n => {
        if (n.node.category === "phd")
          return <div key={n.node.name}>{n.node.name}</div>
        return "";
      })}
    </Fragment>
  )
}

export const query = graphql`
  query Names {
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