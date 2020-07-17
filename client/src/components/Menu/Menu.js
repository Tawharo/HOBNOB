import React, { useState, useEffect } from "react";
import API from "./../../utils/API";

function Menu() {

    //const [menuItems, setmenuItems] = useState([])

    useEffect(() => {
        API.getMenu().then((res) => {
            console.log(res.data);
            //setmenuItems(res.data.Menu);
            console.log("testing testing")
        });
    }, []);

    return <div></div>;

}

export default Menu;
