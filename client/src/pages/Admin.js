import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Button, Table } from "react-bootstrap";
import Menu from "../components/Menu"
import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";

// function Menu() {
//   const [food, setFood] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await API.getMenu();
//       setFood(result.data.Menu);
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="container-menu">
//         <Logo />

//         {food &&
//           food.length > 0 &&
//           identifyMenuGroups(food).map((menuGroup) => (
//             <>
//               <h4 className="menu-group">{menuGroup}</h4>
//               <br></br>
//               <div className="menu-field">
//                 {food
//                   .filter((menuItem) => menuItem.type === menuGroup)
//                   .map((menuItem) => (
//                     <MenuItem props={menuItem} key={menuItem.menuItemName} />
//                   ))}
//               </div>
//             </>
//           ))}
//       </div>
//     </>
//   );
// }

// function identifyMenuGroups(foodArray) {
//   return Array.from(new Set(foodArray.map((x) => x.type)));
// }

// export default Menu;

function Admin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { user } = useAuth();
  const [menuTable, setMenuTable] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setRole(res.data.role);
    });
  }, [user]);
  const getItemsFromApi = () => {
  
    API.getMenu().then((res) => {
        console.log(res.data);
        setMenuItems(res.data.Menu);
        console.log("testing testing")
    });
  };
  
  const adminMenuTableHeader = () => {
    return <div></div>
  };
  const adminMenuTableRows = () => {
    
      console.log("testing testing")
      console.log(menuItems);
      const items = menuItems.map(function(item, i) {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.menuItemName}</td>
              <td>{item.type}</td>
            </tr>
          )
     
      setMenuTable(items);

  });
  };
  
  return (

    <Container>
      <Button variant="primary">Primary</Button>{' '}
      <h1>On the admin page!</h1>
      <Table>
      {menuTable && (
        {menuTable}
      )}
    </Table>
    </Container>
    
  );
}

export default Admin;
