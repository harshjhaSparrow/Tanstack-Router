import React from 'react';
import ApexCharts from 'react-apexcharts';

const BoxPlotChart = () => {
  const ApexOptions:any  = {
    chart: {
      type: 'boxPlot',
      height: 300,
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: '#111827', // Upper color
          lower: '#3e6fff'  // Lower color
        },
      }
    },
    title: {
      text: 'Boxplot Chart',
    },
    xaxis: {
      type: 'category',
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4']
    },
    yaxis: {
      title: {
        text: 'Values',
      },
      min: 0,
      max: 100,
    },
  };

  const series = [
    {
      name: 'Boxplot',
      data: [
        { x: 'Category 1', y: [10, 20, 30, 40, 50] },
        { x: 'Category 2', y: [15, 25, 35, 45, 55] },
        { x: 'Category 3', y: [20, 30, 40, 50, 60] },
        { x: 'Category 4', y: [25, 35, 45, 55, 65] },
      ],
    },
  ];

  return (
    <div className="boxplot-chart">
      <ApexCharts options={ApexOptions} series={series} type="boxPlot" height={350} />
    </div>
  );
};

export default BoxPlotChart;
