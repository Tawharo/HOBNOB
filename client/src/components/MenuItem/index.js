import React from "react";
import "./style.css";

function MenuItem(props) {
  return (
    <div className="menu-card">
      <div className="menu-item">
        <div className="menu-title">{props.props.menuItemName}</div>
        <span className="price">{props.props.price}</span>
        <div className="menu-description">{props.props.ingredients}</div>
      </div>
    </div>
  );
}

export default MenuItem;
