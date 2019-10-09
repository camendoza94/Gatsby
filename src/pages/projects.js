import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Project from "../components/project"
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
              Ongoing projects
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Fragment>
                {data.allProjectsJson.edges.filter(n => n.node.status === "active").map(n => <Project node={n.node}/>)}
              </Fragment>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Finished projects
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Fragment>
                {data.allProjectsJson.edges.filter(n => n.node.status === "inactive").map(n => <Project
                  node={n.node}/>)}
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
        description
        members
        status
        publications {
          name
          url
        }
      }
    }
  }
}
`