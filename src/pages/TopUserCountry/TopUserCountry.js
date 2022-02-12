import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import GithubUser from "../../components/Home/GithubUser";

const TopUserCountry = () => {
  const axios = require("axios").default;
  const { register, handleSubmit } = useForm();
  const [countries, setCountries] = useState([]);
  const [users, setUsers] = useState([]);
  const onSubmit = (data) => {
    axios
      .get(
        `https://api.github.com/search/users?q=location:${data.counrty}+followers:>${data.rating}`
      )
      .then(function (response) {
        setUsers(response.data.items);
      })
      .catch(function (error) {
        alert("Something went wrong!");
      });
  };
  const getRestCountries = () => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(function (response) {
        setCountries(response.data);
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    getRestCountries();
  }, []);
  return (
    <div className="top-user-country">
      <div className="container">
        <div className="top-user-country-form w-50 m-auto mt-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group d-flex">
              <select
                required
                className="form-control me-2"
                {...register("country")}
              >
                <option value="">Select country</option>
                {countries?.map((item, index) => (
                  <option key={index} value={item.name.common}>
                    {item.name.common}
                  </option>
                ))}
              </select>
              <select
                required
                className="form-control me-2"
                {...register("rating")}
              >
                <option value="">Select rating</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
                <option value="250">250</option>
                <option value="300">300</option>
                <option value="350">350</option>
                <option value="400">400</option>
                <option value="450">450</option>
                <option value="500">500</option>
              </select>
              <Button type="submit" varient="primary">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className="mt-4 mb-80">
          <GithubUser users={users} />
        </div>
      </div>
    </div>
  );
};

export default TopUserCountry;
