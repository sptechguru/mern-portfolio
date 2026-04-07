import React from "react";
import Highcharts from "highcharts";
import HighchartsReactModule from "highcharts-react-official";

const HighchartsReact = HighchartsReactModule.default || HighchartsReactModule;

const AdvancedHighChart = ({ title, categories, series, chartType }) => {
  const options = {
    chart: {
      type: chartType || "line",
    },
    title: {
      text: title || "Default Chart Title",
    },
    xAxis: {
      categories: categories || ["Jan", "Feb", "Mar", "Apr"],
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: series || [
      {
        name: "Sample Data",
        data: [10, 20, 30, 40],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AdvancedHighChart;