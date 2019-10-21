import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Obfuscate from "react-obfuscate"

export default ({ data }) => (
  <Fragment>
    <Header/>
    <Container>
      <Row className="contact">
        <Col md={6} xs={12}>
          <h1>Contact</h1>
          <h5>{data.membersJson.name}</h5>
          {data.membersJson.subCategory}<br/>
          <Obfuscate email={data.membersJson.email}/><br/>
        </Col>
      </Row>
    </Container>
  </Fragment>
)

export const query = graphql`
  query Contact {
  membersJson(category: {eq: "professor"}, contact: {eq: true}) {
    name
    url
    email
    subCategory
  }
}
 `