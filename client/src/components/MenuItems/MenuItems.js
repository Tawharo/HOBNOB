import React from "react";
import startersData from "./startersData";
import Starter from "./Starter.js";
import "./MenuItems.css";
// import API from "../../utils/API";
 

function MenuItems() {

  /* const starters = API.getMenu().then {};
  console.log(starters); */

  const menuStarters = startersData.map(starterData => 
    <Starter key={starterData.idAuto} name={starterData.menuItemName} 
      ingredients={starterData.ingredients} price={starterData.price}/>);
  
  return (
    <div>
      { menuStarters }
    </div>
  );

}


export default MenuItems;
