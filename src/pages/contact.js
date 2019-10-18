import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./contact.css"

export default ({ data }) => (
  <Fragment>
    <Header/>
    <Container>
      <Row className="contact">
        <Col md={6} xs={12}>
          <h1>Contact</h1>
          <h5>{data.allMembersJson.edges[0].node.name}</h5>
          {data.allMembersJson.edges[0].node.subCategory}<br/>
          {data.allMembersJson.edges[0].node.email}<br/>
          {data.allMembersJson.edges[0].node.phone}
        </Col>
      </Row>
    </Container>
  </Fragment>
)

export const query = graphql`
  query Contact {
  allMembersJson(filter: {category: {eq: "professor"}, contact: {eq: true}}) {
    edges {
      node {
        name
        url
        email
        phone
        subCategory
      }
    }
  }
}
 `