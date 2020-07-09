import React, {useState, useEffect} from "react";
import "./MenuItems.css";
import Randomcolor from "randomcolor"
// import API from "./utils/API.js"
 

function MenuItems() {

  const [menuItem, setMenuItem] = useState(0);
  const [color, setColor] = useState("");
 
  function increment() {
   setMenuItem (prevmenuItem => prevmenuItem + 1)
 }

 function decrement() {
   setMenuItem (prevmenuItem => prevmenuItem - 1)
}

useEffect(()=> {
   setColor(Randomcolor())
}, [])

  return (
    <div><h1>Hello</h1><h2 style={{color: color}}>{ menuItem }</h2>
    <h3><button onClick={ increment}>Increment!</button></h3>
    <h3><button onClick={ decrement}>Decrement!</button></h3>
    </div>
  );
}


export default MenuItems;