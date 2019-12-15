import React from "react"
import ListGroupItem from "react-bootstrap/ListGroupItem"

export default (props) => (
  <ListGroupItem>
    <h6>{props.node.name}</h6>  {props.node.subCategory && props.node.state === "inactive" && <br/>}
    {props.node.state === "inactive" ? <small className="text-muted">past member</small> : ""}
  </ListGroupItem>
)