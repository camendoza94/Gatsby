import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import CardDeck from "react-bootstrap/CardDeck"
import "./members.css"

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
                  return <Card className="border-0 shadow mb-4">
                    <Card.Img variant="top" src="https://via.placeholder.com/350x150"/>
                    <Card.Body>
                      <Card.Text className="text-center">
                        <h5>{n.node.name}</h5>
                        {n.node.subCategory}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "phd" && n.node.state === "active") ?
          <Fragment>
            <h1>PHD Candidates</h1>
            <CardDeck>
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "phd" && n.node.state === "active")
                  return <Card className="border-0 shadow mb-4">
                    <Card.Img variant="top" src="https://via.placeholder.com/350x150"/>
                    <Card.Body>
                      <Card.Text className="text-center">
                        <h5>{n.node.name}</h5>
                        {n.node.subCategory}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "msc" && n.node.state === "active") ?
          <Fragment>
            <h1>Master's Degree Candidates</h1>
            <CardDeck>
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "msc" && n.node.state === "active")
                  return <Card className="border-0 shadow mb-4">
                    <Card.Img variant="top" src="https://via.placeholder.com/350x150"/>
                    <Card.Body>
                      <Card.Text className="text-center">
                        <h5>{n.node.name}</h5>
                        {n.node.subCategory}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                return ""
              })}
            </CardDeck>
          </Fragment> : ""}
        {data.allMembersJson.edges.find(n => n.node.category === "bsc" && n.node.state === "active") ?
          <Fragment>
            <h1>Bachelor's Degree Candidates</h1>
            <CardDeck>
              {data.allMembersJson.edges.map(n => {
                if (n.node.category === "bsc" && n.node.state === "active")
                  return <Card className="border-0 shadow mb-4">
                    <Card.Img variant="top" src="https://via.placeholder.com/350x150"/>
                    <Card.Body>
                      <Card.Text className="text-center">
                        <h5>{n.node.name}</h5>
                        {n.node.subCategory}
                      </Card.Text>
                    </Card.Body>
                  </Card>
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
  allMembersJson {
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