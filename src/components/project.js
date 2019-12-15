import React, { Fragment } from "react"
import GithubLogo from "./img/GitHub-Mark-32px.png"
import Image from "react-bootstrap/Image"
import "./project.css"
import { graphql } from "gatsby"
import Header from "./header"
import Demo from "./demo"
import Container from "react-bootstrap/Container"

export default ({ data, pageContext }) => (
  <Fragment>
    <Header/>
    <Container className="mt-4">
      <h1>
        {pageContext.node.name}
        {pageContext.node.url ? <a href={pageContext.node.url} target="_blank" rel="noopener noreferrer">
          <Image className="mr-2 ml-3" src={GithubLogo}/>
          <span className="text-muted" style={{ "fontSize": "16px" }}>See Repository</span>
        </a> : ""}
      </h1>
      <div className="mb-2">
        <span className="material-icons">people</span>
        <span className="ml-1">{pageContext.node.members.map((p, i, l) => i === l.length - 1 ?
          (data.allMembersJson.edges.find((n, index) => index === p).node.url ?
            <a
              className="outlink"
              key={"members" + i}
              target="_blank"
              rel="noreferrer noopener"
              href={data.allMembersJson.edges.find((n, index) => index === p).node.url}>{data.allMembersJson.edges.find((n, index) => index === p).node.name}</a>
            : <span>{data.allMembersJson.edges.find((n, index) => index === p).node.name}</span>) :
          (data.allMembersJson.edges.find((n, index) => index === p).node.url ?
            <Fragment key={"members" + i}>
              <a
                className="outlink"
                key={"members" + i}
                target="_blank"
                rel="noreferrer noopener"
                href={data.allMembersJson.edges.find((n, index) => index === p).node.url}>{data.allMembersJson.edges.find((n, index) => index === p).node.name}</a>,&nbsp;
            </Fragment> : <span>{data.allMembersJson.edges.find((n, index) => index === p).node.name},&nbsp;</span>),
        )}
              </span>
        <br/>
        {pageContext.node.industry ?
          <Fragment>
            <span className="material-icons">business</span>
            <span
              className="ml-1">{pageContext.node.industry.map((p, i, l) => i === l.length - 1 ?
              <Fragment key={"industry" + i}>{p.name}</Fragment> :
              <Fragment key={"industry" + i}>{p.name},&nbsp;</Fragment>,
            )}
              </span>
            <br/>
          </Fragment> : ""}
        <span className="material-icons">access_time</span>
        <span className="ml-1">{pageContext.node.period}</span>
      </div>
      <p className="text-justify">{pageContext.node.description}</p>
      {pageContext.node.publications ?
        <Fragment>
          <h6>Results</h6>
          {pageContext.node.publications.map((p, i) => {
            return <Fragment key={"results" + i}>
              <span className="material-icons">library_books</span>
              <a className="ml-1 outlink" key={p} href={p.url} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
              <br/>
            </Fragment>
          })}
        </Fragment> : ""}
      {pageContext.node.demos ?
        <Fragment>
          <br/>
          <h6>Demos</h6>
          {pageContext.node.demos.map((p, i) => {
            return <Demo key={"demos" + i} youtubeId={p.id}/>
          })}
        </Fragment> : ""}
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