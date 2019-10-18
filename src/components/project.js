import React, { Fragment } from "react"
import Card from "react-bootstrap/Card"
import GithubLogo from "./img/GitHub-Mark-32px.png"
import Image from "react-bootstrap/Image"
import "./project.css"
import { graphql } from "gatsby"
import Header from "./header"
import Container from "react-bootstrap/Container"

export default ({ data, pageContext }) => (
  <Fragment>
    <Header/>
    <Container className="mt-4">
      <h1>
        {pageContext.node.name}
        <a href={pageContext.node.url} target="_blank" rel="noopener noreferrer">
          <Image className="mr-2 ml-3" src={GithubLogo}/>
          <span className="text-muted" style={{ "fontSize": "16px" }}>See Repository</span>
        </a>
      </h1>
      <div className="mb-2 text-muted">
        <span className="material-icons">people</span>
        <span className="ml-1">{pageContext.node.members.map((p, i, l) => i === l.length - 1 ?
          <a
            key={p}
            href={data.allMembersJson.edges.find((n, index) => index === p).node.url}>{data.allMembersJson.edges.find((n, index) => index === p).node.name}</a> :
          <Fragment key={p}>
            <a
              href={data.allMembersJson.edges.find((n, index) => index === p).node.url}>{data.allMembersJson.edges.find((n, index) => index === p).node.name}</a>,&nbsp;
          </Fragment>,
        )}
              </span>
      </div>
      <p>{pageContext.node.description}</p>
      <h6>Results</h6>
      <span className="material-icons">library_books</span>
      {pageContext.node.publications.map(p => {
        return <Card.Link className="ml-1" key={p} href={p.url} target="_blank" rel="noopener noreferrer">
          {p.name}
        </Card.Link>
      })}
    </Container>
  </Fragment>
)

export const query = graphql`
  query {
    allMembersJson {
      edges {
        node {
          name
          url
        }
      }
    }
  }
  
`