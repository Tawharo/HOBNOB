import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";

const showButtons = (isEdit) => {
  if (isEdit) {
    return (
      <div className="button-bank">
        <div className="item-button">
          <Button variant="primary">Edit</Button>
        </div>
        <div className="item-button">
          <Button variant="primary">Delete</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {/* <Button variant="primary">Customize</Button> */}
        {/* <Button variant="primary" onClick={Orderfunction.addItem(event,item)}>Add to Cart</Button> */}
      </div>
    );
  }
};

function OrderItem(props) {
  return (
    <Card className={"card-container"}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <div className="title-container">
          <Card.Title className="menu-title">
            {props.props.menuItemName}
          </Card.Title>
          <Card.Title className="menu-price">{props.props.price}</Card.Title>
        </div>
        <div className="description-field">
          <Card.Text className="menu-description">
            {props.props.ingredients}
          </Card.Text>
        </div>
        <div>{showButtons(props.isEdit)}</div>
      </Card.Body>
    </Card>
  );
}
export default OrderItem;
