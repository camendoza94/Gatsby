import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import ProjectSummary from "../components/projectSummary"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

export default ({ data }) => {
  return (
    <Fragment>
      <Header/>
      <Container className="mt-3">
        <h1>Past Projects</h1>
        <Card>
          <Fragment>
            {data.allProjectsJson.edges.map((n, i) =>
              <ProjectSummary key={i} node={n.node}/>)}
          </Fragment>
        </Card>
      </Container>
    </Fragment>
  )
}

export const query = graphql`
query {
  allProjectsJson(filter: {status: {eq: "inactive"}}) {
    edges {
      node {
        id
        name
        status
        summary
        researchLine
        slug
      }
    }
  }
}
`