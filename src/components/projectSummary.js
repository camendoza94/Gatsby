import React from "react"
import Card from "react-bootstrap/Card"
import "./project.css"
import { StaticQuery, graphql } from "gatsby"

export default props => (
  <StaticQuery
    query={graphql`
      query Research {
        allResearchLinesJson {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={data => (
      <Card.Body>
        <Card>
          <Card.Header as={"h4"}>
            <a href={props.node.slug}>{props.node.name}</a>
            <span className="text-muted research-line">
                {data.allResearchLinesJson.edges.find((n, i) => i === props.node.researchLine)
                && data.allResearchLinesJson.edges.find((n, i) => i === props.node.researchLine).node.name}</span>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
            </Card.Subtitle>
            <Card.Text className="text-justify">
              {props.node.summary}
            </Card.Text>
          </Card.Body>
        </Card>
      </Card.Body>
    )}
  />
)