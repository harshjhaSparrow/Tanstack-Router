import { useState } from "react";
import Chart from "react-apexcharts";

const ChartNotification: React.FC<any> = ({
  options: customOptions,
  series: customSeries,
  type = "bar",
  width = "100%", // Make width responsive
  height = "300", // Use a responsive height or adjust as needed
  colors = [],
  gradientColors = [],
}) => {
  const defaultOptions = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false, // Hide the default toolbar for a cleaner look
      },
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
    responsive: [
      {
        breakpoint: 600, // Adjust for small screens
        options: {
          chart: {
            width: "100%", // Full width on small screens
            height: "250", // Adjust height as needed
          },
          xaxis: {
            labels: {
              style: {
                fontSize: '10px', // Adjust font size for smaller screens
              },
            },
          },
        },
      },
      {
        breakpoint: 1024, // Adjust for medium screens
        options: {
          chart: {
            width: "90%", // Slightly reduced width on medium screens
            height: "300", // Adjust height as needed
          },
        },
      },
    ],
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
