import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function MenuItem(props) {
  return (
    <Card className={"card-container"}>
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
      </Card.Body>
    </Card>
  );
}
export default MenuItem;
