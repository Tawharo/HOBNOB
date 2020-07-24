import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../Logo";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Logo />
      <Container className="container-contact">
        <Row>
          <Col xs={6}>
            <h4>Contact Us</h4>
            <p className="contact">
              Looking for a cozy space to host your next celebration or
              corporate meeting? Need catering for a special event? Contact us
              for more info!
            </p>
          </Col>
          <Col xs={6}>
            <Form>
              <Row className="name-container">
                <Col xs={6}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <p>First Name</p>
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <p>Last Name</p>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Subject *</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message *</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
            <button className="btn-rad">Submit</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
