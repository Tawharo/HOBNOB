import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem"


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
      setMenuItems(res.data.Menu);
      console.log(res.data.Menu);
      console.log("testing testing")
    });
  };


  return (
    <div>

      <Logo />
      <Container>
        <Row>
          <Col xs={3}><Button variant="primary" onClick={getItemsFromApi}>Get Menu</Button>{''}</Col>
          <Col xs={3}><Button variant="info" onClick={getItemsFromApi}>Get Menu</Button>{''}</Col>
          <Col xs={3}><Button variant="success" onClick={getItemsFromApi}>Get Menu</Button>{''}</Col>
          <Col xs={3}><Button variant="info" onClick={getItemsFromApi}>Get Menu</Button>{''}</Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>On the admin page!</h3>
          </Col>
        </Row>
        <div>
          <Table>
            <Row>
              <Col xs={6}>
                {menuItems.map((menuItem) => (
                  <MenuItem props={menuItem} key={menuItem.menuItemName} />
                ))}
              </Col>
            </Row>
          </Table>
        </div>



      </Container>
    </div>

  );
};
export default Admin;
