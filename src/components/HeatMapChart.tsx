import ApexCharts from 'react-apexcharts';

const HeatmapChart: React.FC = () => {
  const options:any = {
    chart: {
      height: 300,
      type: 'heatmap',
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 10,
              name: 'Low',
              color: '#00bcd4'
            },
            {
              from: 11,
              to: 20,
              name: 'Medium',
              color: '#87ceeb'
            },
            {
              from: 21,
              to: 30,
              name: 'High',
              color: '#ff6f61'
            }
          ]
        }
      }
    },
    dataLabels: {
      enabled: true,
    },
    colors: ['#00bcd4', '#87ceeb', '#ff6f61'],
    title: {
      text: 'Heatmap Chart',
    },
  };

  const series = [
    {
      name: 'Metric 1',
      data: [
        { x: 'Jan', y: 10 },
        { x: 'Feb', y: 20 },
        { x: 'Mar', y: 30 },
        { x: 'Apr', y: 15 },
        { x: 'May', y: 25 }
      ],
    },
    {
      name: 'Metric 2',
      data: [
        { x: 'Jan', y: 5 },
        { x: 'Feb', y: 15 },
        { x: 'Mar', y: 25 },
        { x: 'Apr', y: 10 },
        { x: 'May', y: 20 }
      ],
    }
  ];

  return (
    <div className="heatmap-chart">
      <ApexCharts options={options} series={series} type="heatmap" height={350} />
    </div>
  );
};

export default HeatmapChart;
