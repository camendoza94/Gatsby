import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Member from "../components/member"
import Container from "react-bootstrap/Container"
import CardDeck from "react-bootstrap/CardDeck"
import "./members.css"

export default ({ data }) => {
  return (
    <Fragment>
      <Header/>
      <Container className="mt-3">
        <h1>Industry Partners</h1>
        <CardDeck>
          {data.allPartnersJson.edges.map(n => <Member node={n.node}/>)}
        </CardDeck>
      </Container>
    </Fragment>
  )
}

export const query = graphql`
  query Partners {
  allPartnersJson {
    edges {
      node {
        name
        url
      }
    }
  }
}
  `