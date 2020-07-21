import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Button, Table } from "react-bootstrap";
import Menu from "../components/Menu"

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
    const items = menuItems.map(function (item, i) {
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
          { menuTable }
        )}
      </Table>
    </Container>

  );
}

export default Admin;
