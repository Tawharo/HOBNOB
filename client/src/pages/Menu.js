import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import MenuItem from "../components/MenuItem";

function Menu() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const data = [
      {
        name: "meatballs",
        price: "20",
        description: "hot and tastey",
      },
    ];
    setFood(data);
  }, []);

  return food.map((menuItem) => (
    <MenuItem props={menuItem} key={menuItem.name} />
  ));
}

export default Menu;

/* {this.state.food.map((food) => (
        <MenuItem
          id={food.id}
          key={food.id}
          menuItemName={menuItemName.id}
          type={type.id}
          isSpecial={isSpecial.id}
          image={image.id}
          ingredients={ingredients.id}
          idAuto={idAuto.id}
          price={price.id}
          itemOption={itemOption.id}
          specialPrice={specialPrice.id}
          customOption={customOption.id}
        />
      ))} */
