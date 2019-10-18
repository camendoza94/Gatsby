import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

export default ({ data }) => (
  <Fragment>
    <Header/>
    <Container>
      <Image src="https://via.placeholder.com/1300x500" fluid />
      <h1>SELF (Software Evolution Laboratory For Applied Research)</h1>
      <p>{data.allDataJson.edges[0].node.description}</p>
    </Container>
  </Fragment>
)

export const query = graphql`
  query Index {
  allDataJson {
    edges {
      node {
        description
      }
    }
  }
}
  `