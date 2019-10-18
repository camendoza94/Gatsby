import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import ProjectSummary from "../components/projectSummary"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Accordion from "react-bootstrap/Accordion"

export default ({ data }) => {
  return (
    <Fragment>
      <Header/>
      <Container className="mt-3">
        <h1>Projects</h1>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h5>Ongoing projects</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Fragment>
                {data.allProjectsJson.edges.filter(n => n.node.status === "active").map((n, i) =>
                  <ProjectSummary key={i} node={n.node}/>)}
              </Fragment>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h5>Finished projects</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Fragment>
                {data.allProjectsJson.edges.filter(n => n.node.status === "inactive").map((n, i) =>
                  <ProjectSummary key={i} node={n.node}/>)}
              </Fragment>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </Fragment>
  )
}

export const query = graphql`
query Projects {
  allProjectsJson {
    edges {
      node {
        id
        url
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