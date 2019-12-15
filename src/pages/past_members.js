import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Member from "../components/member"
import MemberNoImage from "../components/memberNoImage"
import Container from "react-bootstrap/Container"
import CardDeck from "react-bootstrap/CardDeck"
import "./members.css"
import ListGroup from "react-bootstrap/ListGroup"

export default ({ data }) => {
  return (
    <Fragment>
      <Header/>
      <Container className="mt-3">
        {data.allMembersJson.edges.find(n => n.node.category === "professor") ?
          <Fragment>
            <h1>Professors</h1>
            <CardDeck>
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "professor")
                  return <Member key={n.node.name} node={n.node}/>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "phd") ?
          <Fragment>
            <h1>PHD Candidates</h1>
            <ListGroup variant="flush">
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "phd")
                  return <MemberNoImage key={n.node.name} node={n.node}/>
                return ""
              })}
            </ListGroup>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "msc") ?
          <Fragment>
            <h1>Master's Degree Candidates</h1>
            <ListGroup variant="flush">
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "msc")
                  return <MemberNoImage key={n.node.name} node={n.node}/>
                return ""
              })}
            </ListGroup>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "bsc") ?
          <Fragment>
            <h1>Bachelor's Degree Candidates</h1>
            <ListGroup variant="flush">
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "bsc")
                  return <MemberNoImage key={n.node.name} node={n.node}/>
                return ""
              })}
            </ListGroup>
          </Fragment> : ""}
      </Container>
    </Fragment>
  )
}

export const query = graphql`
  query {
  allMembersJson(filter: {status: {eq: "inactive"}}) {
    edges {
      node {
        name
        subCategory
        category
        url
        status
      }
    }
  }
}
  `