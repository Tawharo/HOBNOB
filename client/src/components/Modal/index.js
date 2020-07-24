import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./style.css";

function ResMod(props) {
  const history = useHistory();

  const routeChange = () => {
    let path = "/login";
    history.push(path);
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        style={{
          backgroundColor: "#1d1919",
        }}
      >
        <div className="modal-backdrop">
          <Modal.Header closeButton>
            <Modal.Title>Hobnob</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>
              Now more than ever, the restaurant industry needs your help.
            </h4>
            <p>
              We have never seen anything like this before. The National
              Restaurant Association estimates that the COVID-19 pandemic will
              result in $225B in lost revenue and the elimination of 5-7 million
              jobs in restaurants. Please support the restaurants you love.
            </p>
            <p>
              You can support Hobnob by placing an order for pick up. Please log
              in to view our full menu and place order.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn-rad" onClick={routeChange}>
              Log In
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default ResMod;
