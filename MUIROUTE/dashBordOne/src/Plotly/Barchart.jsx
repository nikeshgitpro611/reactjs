import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { FormatDate, postData } from "../utils/utils";

const GroupedBarChart = ({ formattedDates }) => {
  const [barChart, setBarChart] = useState([]);
  const [allDat, setAllData] = useState({
    xAxis: [],
    yMayData: [],
    yJuneData: [],
    yJulyData: [],
  });

  const fetchApiBarData = async () => {
    const data = {
      startDate: FormatDate(formattedDates?.formattedFirstDate).month,
      endDate: FormatDate(formattedDates?.formattedSecondDate).month,
    };

    const url = "http://localhost:3001/api/@ty/postBarChart";
    const response = await postData(url, data);
    // console.log("response", response.data);

    setBarChart(response);
  };

  useEffect(() => {
    if (formattedDates) {
      fetchApiBarData();
    }
  }, [formattedDates]);

  // console.log("barChart : ", barChart);
  useEffect(() => {
    if (barChart && barChart.data) {
      const xBarData = barChart.data?.x || [];
      const yMayBarData = barChart.data?.y?.may || [];
      const yJuneBarData = barChart.data?.y?.june || [];
      const yJulyBarData = barChart.data?.y?.july || [];

      setAllData((prevData) => ({
        ...prevData,
        xAxis: xBarData,
        yMayData: yMayBarData,
        yJuneData: yJuneBarData,
        yJulyData: yJulyBarData,
      }));
    }
  }, [barChart]);

  // Define the traces (datasets)
  const trace1 = {
    x: allDat.xAxis,
    y: allDat.yMayData,
    name: "May",
    type: "bar",
    marker: { color: "red" },
  
    

  };

  const trace2 = {
    x: allDat.xAxis,
    y: allDat.yJuneData,
    name: "June",
    type: "bar",
    marker: { color: "blue" },
  };
  const trace3 = {
    x: allDat.xAxis,
    y: allDat.yJulyData,
    name: "July",
    type: "bar",
    marker: { color: "green" },
    // width: 15,
    // bargap: 0.2
  };

  // Combine the traces into the data array
  const data = [trace1, trace2, trace3];

  // Define the layout
  const layout = {
    barmode: "group",
    xaxis: {
      title: 'Ship to region',
      type: 'category',
      automargin: true, // Automatically adjust margins to fit all labels
      titlefont: { size: 16 },
      tickfont: { size: 10, color: '#666' }, // Adjust font size for readability
      tickmode: 'array', // Ensure all labels are used without gaps
      tickvals: allDat.xAxis, // Use all provided x values as ticks
      ticktext: allDat.xAxis, // Display all x labels
      tickangle: -65
    },
    yaxis: {
      title: "Windos",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Plot
        data={data}
        layout={layout}
        style={{ width: "100%", height: "100%"}} // Ensure the plot takes full width and height
        config={{ responsive: true }}
      />
    </div>
  );
};

export default GroupedBarChart;
