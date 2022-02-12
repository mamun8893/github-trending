import React, { useEffect, useState } from "react";
import "./data.css";
import ReactApexChart from "react-apexcharts";

const DataVisualization = () => {
  const axios = require("axios").default;
  const [options] = useState({
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Male", "Female"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });
  const [series, setSeries] = useState([20, 20]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/users`)
      .then(function (response) {
        setCount(response.data.length);
        let male = response.data.filter((item) => item.gender === "male");
        let female = response.data.filter((item) => item.gender === "female");
        setSeries([male.length, female.length]);
      })
      .catch(function (error) {
        alert("Something went wrong!");
      });
  }, []);
  return (
    <div className="data-visualization">
      <div className="container">
        <div className="chart-warp">
          <div id="chart">
            <ReactApexChart
              options={options}
              series={series}
              type="pie"
              width={380}
            />
            <p className="text-center">Total user count: {count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
