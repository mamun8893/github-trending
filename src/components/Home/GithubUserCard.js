import React from "react";
import { Col, Card, Row } from "react-bootstrap";

const GithubUserCard = ({ user }) => {
  return (
    <Col>
      <Card className="mb-4">
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
          <Card.Title>{user.login}</Card.Title>
          <Card.Text>Score: {user.score}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GithubUserCard;
