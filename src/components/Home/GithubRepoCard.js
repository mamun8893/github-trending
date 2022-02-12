import React from "react";
import { Card, Col } from "react-bootstrap";

const GithubRepoCard = ({ repo }) => {
  return (
    <Col>
      <Card className="mb-4">
        <Card.Img variant="top" src={repo.owner.avatar_url} />
        <Card.Body>
          <Card.Title>{repo.full_name}</Card.Title>
          <Card.Text>Score: {repo.score}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GithubRepoCard;
