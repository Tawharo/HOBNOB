// import React from "react";
// import "./style.css";

// function MenuItem(props) {
//   return (
//     <div className="menu-card">
//       <div className="menu-item">
//         <div className="menu-title">{props.props.menuItemName}</div>
//         <span className="price">{props.props.price}</span>
//         <div className="menu-description">{props.props.ingredients}</div>
//       </div>
//     </div>
//   );
// }

// export default MenuItem;

import React from "react";
import { Card } from "react-bootstrap";

function MenuItem(props) {
  return (
    <Card style={{ width: "30rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>
          {" "}
          {props.props.menuItemName} {props.props.price}
        </Card.Title>
        <Card.Text>{props.props.ingredients}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default MenuItem;
