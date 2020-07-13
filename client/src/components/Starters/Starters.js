import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Starter from "../MenuItems/Starter";

function Starters(props) {
  const [startersData, setstartersData] = useState("");

  useEffect(() => {
    loadStarters();
  }, []);

  const menuStarters = startersData.map((starterData) => (
    <Starter
      name={starterData.menuItemName}
      ingredients={starterData.ingredients}
      price={starterData.price}
    />
  ));

  return <div>{menuStarters}</div>;

  function loadStarters() {
    API.getMenu()
      .then((startersData) => {
        setstartersData(startersData);
      })

      .catch((err) => console.log(err));
  }
}

export default Starters;
