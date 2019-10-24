import React from "react"
import Card from "react-bootstrap/Card"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {sourceInstanceName: {eq: "img"}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Card className="border-0 shadow mb-4">
        {data.allFile.edges.find(e => e.node.childImageSharp.fluid.originalName === props.node.image) ?
          <Img
            fluid={data.allFile.edges.find(e => e.node.childImageSharp.fluid.originalName === props.node.image).node.childImageSharp.fluid}
          /> : <Card.Img variant="top" src="https://via.placeholder.com/350x350"/>
        }
        <Card.Body>
          <Card.Title as={"h4"} className="text-center">
            <a href={props.node.url} target="_blank" rel="noopener noreferrer"><h5>{props.node.name}</h5></a>
          </Card.Title>
          <Card.Text className="text-center">
            {props.node.subCategory} {props.node.subCategory && props.node.state === "inactive" && <br/>}
            {props.node.state === "inactive" ? <small className="text-muted">past member</small> : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    )
    }
  />
)