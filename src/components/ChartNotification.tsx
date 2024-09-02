import { useState } from "react";
import Chart from "react-apexcharts";

const ChartNotification: React.FC<any> = ({
  options: customOptions,
  series: customSeries,
  type = "bar",
  width = "500",
  height = "300",
  colors = [],
  gradientColors = [],
}) => {
  const defaultOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    colors: colors.length > 0 ? colors : ["#00E396"], // Use provided colors or default to a single color
    fill: {
      type: gradientColors.length > 0 ? "gradient" : "solid", // Use gradient if gradientColors are provided
      gradient: {
        shade: "light",
        type: "horizontal", // Can also be 'vertical'
        shadeIntensity: 0.5,
        gradientToColors: gradientColors.map((gc: { to: any }) => gc.to), // End color for gradients
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100], // Start and end points of the gradient
      },
    },
  };

  const defaultSeries = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  // Use provided props or fallback to default values
  const [options] = useState({ ...defaultOptions, ...customOptions });
  const [series] = useState(customSeries || defaultSeries);

  return (
    <div className="app">
      <div className="row text-center">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type={type}
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartNotification;
