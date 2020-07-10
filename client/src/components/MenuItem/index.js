import React from "react";
import "./style.css";

function MenuItem(props) {
  return (
    <div className="card">
      <div className="menuItem">
        <div className="menuTitle">{props.props.name}</div>
        <span className="price">${props.props.price}</span>
        <div className="menuDescription">{props.description}</div>
      </div>
    </div>
  );
}

export default MenuItem;
