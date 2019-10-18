import React from "react"
import Card from "react-bootstrap/Card"
import "./project.css"

export default props => (
  <Card className="mb-3">
    <Card.Header as={"h4"}>
      {props.node.name}
    </Card.Header>
    <Card.Body>
      <Card.Text className="text-justify">
        {props.node.summary}
      </Card.Text>
    </Card.Body>
  </Card>
)