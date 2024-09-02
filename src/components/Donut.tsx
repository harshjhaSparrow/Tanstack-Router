import React, { useState } from "react";
import Chart from "react-apexcharts";

const Donut: React.FC = () => {
  // Setting up state for options, series, labels, and colors
  const [options]: any = useState({
    labels: ["A", "B", "C", "D", "E"],
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "65%", // Adjust the size of the donut
        },
      },
    },
    colors:  ["#3e6fff", "#00bcd4", "#87ceeb", "#ff6f61", "#333333"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
  });

  const [series] = useState([360, 55, 41, 17, 15]);

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default Donut;
