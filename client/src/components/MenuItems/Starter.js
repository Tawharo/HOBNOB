import React from "react";
import "./startersData";

function Starter(props) {
  return (
    <div>
      <h3>{props.name} - ${props.price}</h3>
      <h3>Ingredients: {props.ingredients}</h3>
      <hr/>
    </div>
  );
}

export default Starter;
