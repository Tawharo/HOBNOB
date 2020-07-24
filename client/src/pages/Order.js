// import React, { useState, useEffect } from "react";
// import API from "../utils/API";
// import Wrapper from "../components/Wrapper";
// import { Link } from "react-router-dom";
// import { useAuth } from "../utils/auth";
// import { Button, Container, Row, Col, Table } from "react-bootstrap";
// import Logo from "../components/Logo";
// import OrderItem from "../components/OrderItem";
// function Order() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const { user } = useAuth();
//   const [menuItems, setMenuItems] = useState([]);
//   useEffect(() => {
//     API.getUser(user.id).then((res) => {
//       setUsername(res.data.username);
//       setEmail(res.data.email);
//       setRole(res.data.role);
//     });
//   }, [user]);
//   const getItemsFromApi = () => {
//     API.getMenu().then((res) => {
//       setMenuItems(res.data.Menu);
//       console.log(res.data.Menu);
//       console.log("testing testing");
//     });
//   };
//   return (
//     <div>
//       <Logo />
//       <Container>
//         <Row>
//           <Col>
//             <h3>Welcome {username}!</h3>
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Row>
//           <Col>
//             <Button variant="primary" onClick={getItemsFromApi}>
//               Get Menu
//             </Button>
//             {""}
//           </Col>
//           <Col>
//             <Button variant="info" onClick={getItemsFromApi}>
//               Get Menu
//             </Button>
//             {""}
//           </Col>
//           <Col>
//             <Button variant="success" onClick={getItemsFromApi}>
//               Get Menu
//             </Button>
//             {""}
//           </Col>
//           <Col>
//             <Button variant="info" onClick={getItemsFromApi}>
//               Get Menu
//             </Button>
//             {""}
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Table>
//           <Row>
//             <Col xs={6}>
//               {menuItems.map((menuItem) => (
//                 <OrderItem props={menuItem} key={menuItem.menuItemName} />
//               ))}
//             </Col>
//           </Row>
//         </Table>
//       </Container>
//     </div>
//   );
// }
// export default Order;
