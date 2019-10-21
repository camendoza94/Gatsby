import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Research from "../components/research"
import Container from "react-bootstrap/Container"
export default ({ data }) => {
  return (
    <Fragment>
      <Header/>
      <Container className="mt-3">
        <h1>Research Lines</h1>
        {data.allResearchLinesJson.edges.map(e => <Research node={e.node}/>)}
      </Container>
    </Fragment>
  )
}

export const query = graphql`
query {
  allResearchLinesJson {
    edges {
      node {
        name
        summary
      }
    }
  }
}
`