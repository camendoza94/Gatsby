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
        <h1>Professors</h1>
        <CardDeck>
          {data.allMembersJson.edges.map(n => {
            if (n.node.category === "professor")
              return <Member key={n.node.name} node={n.node}/>
            return ""
          })}
        </CardDeck>
        {data.allMembersJson.edges.find(n => n.node.category === "phd") ?
          <Fragment>
            <h1>PHD Candidates</h1>
            <CardDeck>
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "phd")
                  return <Member key={n.node.name} node={n.node}/>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "msc") ?
          <Fragment>
            <h1>Master's Degree Candidates</h1>
            <CardDeck>
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "msc")
                  return <Member key={n.node.name} node={n.node}/>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "bsc") ?
          <Fragment>
            <h1>Bachelor's Degree Candidates</h1>
            <CardDeck>
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "bsc")
                  return <Member key={n.node.name} node={n.node}/>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
      </Container>
    </Fragment>
  )
}

export const query = graphql`
  query Names {
  allMembersJson(filter: {status: {eq: "active"}}) {
    edges {
      node {
        name
        subCategory
        category
        url
        status
        image
      }
    }
  }
}
  `