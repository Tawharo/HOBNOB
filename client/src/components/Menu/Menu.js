import React, {usestate} from "react";
import API from "./../../utils/API";

function Menu() {
   API.getMenu().then((res) => {
    console.log({ res });
    const menuItems = res.map(menuItem => )
    {/* const menuStarters = startersData.map(starterData => 
        <Starter key={starterData.idAuto} name={starterData.menuItemName} 
         ingredients={starterData.ingredients} price={starterData.price}/>);
          */}
    return (
        <div>
            {menuItems}
        </div>
    )

   });
}


export default Menu;