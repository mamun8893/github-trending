import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Tab,
  Tabs,
} from "react-bootstrap";
import GithubRepo from "../../components/Home/GithubRepo";
import GithubUser from "../../components/Home/GithubUser";
import { useForm } from "react-hook-form";

const Home = () => {
  const axios = require("axios").default;
  const [key, setKey] = useState("user");
  const [query, setQuery] = useState("react");
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data !== "") {
      setQuery(data.search_string);
      if (key === "user") {
        getData("users");
      } else if (key === "repo") {
        getData("repositories");
      }
    }
  };

  const getData = (url_key) => {
    if (query === "") {
      return;
    }
    axios
      .get(`https://api.github.com/search/${url_key}?q=${query}`)
      .then(function (response) {
        if (url_key == "repositories") {
          setRepos(response.data.items);
        } else if (url_key == "users") {
          setUsers(response.data.items);
        }
      })
      .catch(function (error) {
        alert("Something went wrong!");
      });
  };

  useEffect(() => {
    if (query !== "") onSubmit({ search_string: query });
  }, [key, query]);

  return (
    <div className="main-conatainer">
      <div className="container">
        <div className="search-box mt-4 mb-80">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mb-3 w-50 m-auto">
              <FormControl
                placeholder="Enter search string..."
                {...register("search_string")}
              />
              <Button variant="primary" id="button-addon2" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="user" title="Users">
              <GithubUser users={users} />
            </Tab>
            <Tab eventKey="repo" title="Repositories">
              <GithubRepo repos={repos} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
