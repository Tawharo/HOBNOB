import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";
function Admin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { user } = useAuth();
  const [menuTable, setMenuTable] = useState("");
  const [showCreateItem, setShowCreateItem] = useState(false);
  const [showViewOrders, setShowViewOrders] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setRole(res.data.role);
    });
  }, [user]);
  const createMenuItem = () => {
    setShowEditItem(false);
    setShowViewOrders(false);
    setShowCreateItem(true);
  };
  const viewOrders = () => {
    setShowViewOrders(true);
    setShowCreateItem(false);
    setShowEditItem(false);
  };
  const getItemsFromApi = () => {
    setShowCreateItem(false);
    setShowViewOrders(false);
    setShowEditItem(true);
    API.getMenu().then((res) => {
      setMenuItems(res.data.Menu);
      console.log(res.data.Menu);
      console.log("testing testing");
    });
  };
  return (
    <div>
      <Logo />
      <Container>
        <Row>
          <Col>
            <Button variant="primary" onClick={createMenuItem}>
              Create Menu Item
            </Button>
            {""}
          </Col>
          <Col>
            <Button variant="info" onClick={getItemsFromApi}>
              Edit Menu
            </Button>
            {""}
          </Col>
          <Col>
            <Button variant="info" onClick={viewOrders}>
              View Orders
            </Button>
            {""}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h3>On the admin page!</h3>
          </Col>
        </Row>
      </Container>
      <Container>
        {showCreateItem && <div>show create menu item here.</div>}
        {showEditItem && (
          <Table>
            <Row>
              <Col xs={6}>
                {menuItems.map((menuItem) => (
                  <MenuItem
                    props={menuItem}
                    key={menuItem.menuItemName}
                    isEdit={true}
                  />
                ))}
              </Col>
            </Row>
          </Table>
        )}
        {showViewOrders && <div>show orders here.</div>}
      </Container>
    </div>
  );
}
export default Admin;
