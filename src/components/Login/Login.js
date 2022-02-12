import React, { useState } from "react";
import "./login.css";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setIslogin }) => {
  const axios = require("axios").default;
  const { register, handleSubmit } = useForm();
  const navigation = useNavigate();
  const onSubmit = (data) => {
    axios
      .post("https://reqres.in/api/login", {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        if (response.data && response.data.token) {
          setIslogin(true);
          setToken(response.data.token);
          navigation("/");
        }
      })
      .catch(function (error) {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.error);
        } else {
          alert("Something went wrong!");
        }
      });
  };
  return (
    <div>
      <div className="container">
        <Form className="form-warper" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              {...register("email")}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
