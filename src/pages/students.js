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
        {data.allMembersJson.edges.find(n => n.node.category === "phd") ?
          <Fragment>
            <h1>PHD Candidates</h1>
            <CardDeck>
              {data.allMembersJson.edges.sort((a, b) => (a.node.state > b.node.state) ? 1 : ((b.node.state > a.node.state) ? -1 : 0)).map(n => {
                if (n.node.category === "phd")
                  return <Member node={n.node}/>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "msc") ?
          <Fragment>
            <h1>Master's Degree Candidates</h1>
            <CardDeck>
              {data.allMembersJson.edges.sort((a, b) => (a.node.state > b.node.state) ? 1 : ((b.node.state > a.node.state) ? -1 : 0)).map(n => {
                if (n.node.category === "msc")
                  return <Member node={n.node}/>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "bsc") ?
          <Fragment>
            <h1>Bachelor's Degree Candidates</h1>
            <CardDeck>
              {data.allMembersJson.edges.sort((a, b) => (a.node.state > b.node.state) ? 1 : ((b.node.state > a.node.state) ? -1 : 0)).map(n => {
                if (n.node.category === "bsc")
                  return <Member node={n.node}/>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
      </Container>
    </Fragment>
  )
}

export const query = graphql`
  query Students {
  allMembersJson(filter: {category: {ne: "professor"}}) {
    edges {
      node {
        name
        subCategory
        category
        url
        state
      }
    }
  }
}
  `