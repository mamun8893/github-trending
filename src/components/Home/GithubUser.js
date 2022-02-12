import React from "react";
import { Row } from "react-bootstrap";
import GithubUserCard from "./GithubUserCard";

const GithubUser = ({ users }) => {
  return (
    <Row xs={1} md={3}>
      {users?.map((item) => (
        <GithubUserCard key={item.id} user={item} />
      ))}
    </Row>
  );
};

export default GithubUser;
