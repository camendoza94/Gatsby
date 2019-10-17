import React from "react"
import Card from "react-bootstrap/Card"

export default (props) => (
  <Card className="border-0 shadow mb-4">
    <Card.Img variant="top" src="https://via.placeholder.com/350x150"/>
    <Card.Body>
      <Card.Title as={"h4"} className="text-center">
        <a href={props.node.url} target="_blank" rel="noopener noreferrer"><h5>{props.node.name}</h5></a>
      </Card.Title>
      <Card.Text className="text-center">
        {props.node.subCategory}
      </Card.Text>
    </Card.Body>
  </Card>
)