import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import food from "./food.json";
import MenuItem from "../components/MenuItem";

function Menu() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const data = [
      {
        name: "meatballs",
        price: "20",
        description: "Awesome",
      },
    ];
    setFood(data);
  }, []);

  return food.map((menuItem) => (
    <>
      <div>
        <h2>Hellooooo</h2>
        <MenuItem props={menuItem} key={menuItem.name} />
      </div>
    </>
  ));
}

export default Menu;
