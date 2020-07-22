import React from "react";
import { Card, Button } from "react-bootstrap";
const showButtons = (isEdit) => {
  if (isEdit) {
    return (
      <div>
        <Button variant="primary">Edit</Button>
        <Button variant="primary">Delete</Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button variant="primary">Customize</Button>
        <Button variant="primary">Add to Cart</Button>
      </div>
    );
  }
};
function OrderItem(props) {
  return (
    <Card style={{ width: "30rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title style={{ color: "black" }}>
          {" "}
          {props.props.menuItemName} {props.props.price}
        </Card.Title>
        <Card.Text style={{ color: "black" }}>
          {props.props.ingredients}
        </Card.Text>
        {showButtons(props.isEdit)}
      </Card.Body>
    </Card>
  );
}
export default OrderItem;