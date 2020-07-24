import React, { useState, useEffect, Fragment } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Button, Container, Row, Col, Grid, Form } from "react-bootstrap";
import Logo from "../components/Logo";
import OrderItem from "../components/OrderItem";
function Admin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { user } = useAuth();
  const [showCreateItem, setShowCreateItem] = useState(false);
  const [showViewOrders, setShowViewOrders] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [inputFields, setInputFields] = useState([{ Ingredient: "" }]);

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

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ ingredient: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "ingredient") {
      values[index].firstName = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  const postNewMenuItem = () => {};

  return (
    <div>
      <Logo />
      <br></br>
      <Container>
        <Row>
          <Col>
            <Button variant="info" onClick={createMenuItem}>
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
      <br></br>
      <Container>
        <Row>
          <Col>
            <h4 className="admin-header">On the admin page!</h4>
          </Col>
        </Row>
      </Container>
      <Container>
        {showCreateItem && (
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formMenuItem">
                <Form.Label>Menu Item</Form.Label>
                <Form.Control
                  type="menuItemName"
                  placeholder="Menu Item Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formMenuItemPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="price" placeholder="Price" />
              </Form.Group>
            </Form.Row>
            <form>
              <div className="form-row">
                {inputFields.map((inputField, index) => (
                  <Fragment key={`${inputField}~${index}`}>
                    <div className="form-group col-sm-8">
                      <label htmlFor="ingredient">Ingredient</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ingredient"
                        name="ingredient"
                        value={inputField.ingredient}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    </div>

                    <div className="form-group col-sm-2">
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() => handleRemoveFields(index)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() => handleAddFields()}
                      >
                        +
                      </button>
                    </div>
                  </Fragment>
                ))}
              </div>
            </form>
            <Form.Group id="formIsSpecial">
              <Form.Check type="checkbox" label="I'm on special" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick="postNewMenuItem">
              Submit
            </Button>
          </Form>
        )}
        <div className="container-menu">
          {showEditItem && (
            <div>
              <h4 className="admin-header">
                Edit menu by clicking either "Edit" or "Delete" button.
              </h4>
              <br></br>
              <div className="menu-field">
                {menuItems.map((menuItem) => (
                  <OrderItem
                    className="menu-item"
                    props={menuItem}
                    key={menuItem.menuItemName}
                    isEdit={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {showViewOrders && <div>show orders here.</div>}
      </Container>
    </div>
  );
}
export default Admin;
