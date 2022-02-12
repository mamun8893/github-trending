import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import ModalDetails from "../ModalDetails/ModalDetails";

const GithubUserCard = ({ user }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <ModalDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={user}
      />
      <Col>
        <Card className="mb-4" onClick={() => setModalShow(true)}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            <Card.Text>Score: {user.score}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default GithubUserCard;
