import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalDetails = (props) => {
  const { login, avatar_url, score, type } = props.user;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={avatar_url} className="img-fluid" alt="" />
        <h4>{login}</h4>
        <h4>Score: {score}</h4>
        <h4>Type: {type}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetails;
