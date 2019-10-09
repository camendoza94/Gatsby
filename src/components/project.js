import React from "react"
import Card from "react-bootstrap/Card"
import GithubLogo from "./img/GitHub-Mark-32px.png"
import Image from "react-bootstrap/Image"
import "./project.css"

export default (props) => (
  <Card.Body>
    <Card>
      <Card.Body>
        <Card.Title as={"h4"} className="github">{props.node.name}
          <a href={props.node.url} target="_blank" rel="noopener noreferrer">
            <Image className="mr-2 ml-3" src={GithubLogo}/>
            <span className="text-muted" style={{ "font-size": "16px" }}>See Repository</span>
          </a>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <span>{props.node.members.map((p, i, l) => i === l.length - 1 ? p : p + ", ")}</span>
        </Card.Subtitle>
        <Card.Text className="text-justify">
          {props.node.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <h6>Publications</h6>
        {props.node.publications.map(p => {
          return <Card.Link href={p.url} target="_blank" rel="noopener noreferrer">
            {p.name}
          </Card.Link>
        })}
      </Card.Footer>
    </Card>
  </Card.Body>
)