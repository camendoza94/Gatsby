import React, { Fragment } from "react"
import Card from "react-bootstrap/Card"
import GithubLogo from "./img/GitHub-Mark-32px.png"
import Image from "react-bootstrap/Image"
import "./project.css"
import { StaticQuery, graphql } from "gatsby"

export default props => (
  <StaticQuery
    query={graphql`
      query Members {
        allMembersJson {
          edges {
            node {
              name
              url
            }
          }
        }
      }
    `}
    render={data => (
      <Card.Body>
        <Card>
          <Card.Body>
            <Card.Title as={"h4"} className="github">{props.node.name}
              <a href={props.node.url} target="_blank" rel="noopener noreferrer">
                <Image className="mr-2 ml-3" src={GithubLogo}/>
                <span className="text-muted" style={{ "fontSize": "16px" }}>See Repository</span>
              </a>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <span className="material-icons">people</span>
              <span>{props.node.members.map((p, i, l) => i === l.length - 1 ?
                <a
                  key={p}
                  href={data.allMembersJson.edges.find((n, index) => index === p).node.url}>{data.allMembersJson.edges.find((n, index) => index === p).node.name}</a> :
                <Fragment key={p}>
                  <a
                    href={data.allMembersJson.edges.find((n, index) => index === p).node.url}>{data.allMembersJson.edges.find((n, index) => index === p).node.name}</a>,&nbsp;
                </Fragment>,
              )}
              </span>
            </Card.Subtitle>
            <Card.Text className="text-justify">
              {props.node.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <h6>Publications</h6>
            <span className="material-icons">library_books</span>
            {props.node.publications.map(p => {
              return <Card.Link key={p} href={p.url} target="_blank" rel="noopener noreferrer">
                {p.name}
              </Card.Link>
            })}
          </Card.Footer>
        </Card>
      </Card.Body>
    )}
  />
)