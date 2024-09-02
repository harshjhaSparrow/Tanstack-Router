import React, { useState } from "react";
import Chart from "react-apexcharts";

const Donut: React.FC = () => {
  // Setting up state for options, series, and labels
  const [options] = useState({});
  const [series] = useState([360, 55, 41, 17, 15]);
  const [labels] = useState(["A", "B", "C", "D", "E"]);

  return (
    <div className="donut">
      <Chart
        options={{ ...options, labels }} // Adding labels to options
        series={series}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default Donut;
