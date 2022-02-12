import React from "react";
import { Row } from "react-bootstrap";
import GithubRepoCard from "./GithubRepoCard";

const GithubRepo = ({ repos }) => {
  return (
    <Row xs={1} md={3}>
      {repos?.map((item) => (
        <GithubRepoCard key={item.id} repo={item} />
      ))}
    </Row>
  );
};

export default GithubRepo;
