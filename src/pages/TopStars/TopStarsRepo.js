import React, { useEffect, useState } from "react";
import GithubRepo from "../../components/Home/GithubRepo";

const TopStarsRepo = () => {
  const axios = require("axios").default;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/repositories?q=stars:>1000`)
      .then(function (response) {
        setRepos(response.data.items);
      })
      .catch(function (error) {
        alert("Something went wrong!");
      });
  }, []);
  return (
    <div className="top-user-country">
      <div className="container">
        <div className="mt-4 mb-80">
          <GithubRepo repos={repos} />
        </div>
      </div>
    </div>
  );
};

export default TopStarsRepo;
