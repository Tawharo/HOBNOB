import React from "react";
import Logo from "../Logo";
import SimpleMap from "../SimpleMap";
import Marker from "../Marker";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";

function Location() {
  return (
    <>
      <Logo />

      <p>
        For the health and safety of our customers and staff, our patio and
        dining room are currently closed. However, we are offering a small but
        mighty menu available for curbside pick-up daily from 3:30-7:30pm so
        that you can enjoy HOBNOB AT HOME. Click our MENU tab to learn more.
      </p>
      <map class="container mx-auto">
        <SimpleMap />
      </map>
      <Marker />
      <Container className="container-location">
        <Row>
          <Col xs={3}>
            <p>
              <strong>Location</strong>
            </p>
            <p>6010 Hermitage Rd. Richmond, VA 23228</p>
          </Col>
          <Col xs={3}>
            <p>
              <strong>Hours</strong>
            </p>
            <p>
              Tue–Fri: 11am–11pm Saturday: 5pm-11pm Sunday: 9am-3pm Monday: Closed
            </p>
          </Col>
          <Col xs={3}>
            <p>
              <strong>Parking</strong>
            </p>
            <p>
              Ample parking is available in our lot (including near the dumpsters
              and on either side of the building) and along Kenwood Avenue.
            <strong>
                Parking across the street at Hermitage Grocery is prohibited -
                cars will be towed at owner’s expense.
            </strong>
            </p>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Location;
