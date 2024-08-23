import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import axios from "axios";

const PlotlyData = () => {
  const [xVal, setXVal] = useState([]);
  const [windows, setWindowData] = useState([]);
  const [accuracy, setAccuracy] = useState([]);
  const [datapass, setData] = useState([]);

  const fetchApiTest = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/@ty/plotly");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApiTest();
  }, []); // Fetch data only once on component mount

  useEffect(() => {
    if (datapass && datapass.data) {
      const gateDateFrmApi = datapass.data.x || [];
      const windowData = datapass.data.y?.Windows || [];
      const accuracy = datapass.data.y?.Accuracy || [];

      // Remove duplicates and sort dates
      const uniqueDates = [...new Set(gateDateFrmApi)];
      
      const sortedArray = uniqueDates
      .map((dateStr) => new Date(dateStr)) // Convert strings to Date objects
      .sort((a, b) => a - b) // Sort Date objects
      .map((date) => date.toLocaleDateString("en-US")); // Convert back to strings
      
      setXVal(sortedArray);
   

      setWindowData(
        sortedArray.map((date) => windowData[uniqueDates.indexOf(date)] || 0)
      );
      setAccuracy(
        sortedArray.map((date) => accuracy[uniqueDates.indexOf(date)] || 0)
      );
    }
  }, [datapass]); // Trigger this effect when datapass changes

  // console.log(windows);

  return (
    <div>
      <Plot
        data={[
          {
            x: xVal,
            y: windows,
            type: "scatter",
            mode: "lines+markers",
            name: "Windows",
            marker: { color: "blue" },
            yaxis: "y1", // Use the first y-axis for windows
            text: xVal.map(
              (date, index) =>
                `Date: ${date}<br>Windows: ${windows[index] || "N/A"}`
            ),
            hoverinfo: "text",
          },
          {
            x: xVal,
            y: accuracy,
            type: "scatter",
            mode: "lines+markers",
            name: "Accuracy",
            marker: { color: "green" },
            yaxis: "y2", // Use the second y-axis for accuracy
            text: xVal.map(
              (date, index) =>
                `Date: ${date}<br>Accuracy: ${accuracy[index] || "N/A"}`
            ),
            hoverinfo: "text",
          },
        ]}
        layout={{
          width: 790,
          height: 440,

          title: "POC Sweta Windows(Number's) and Accuracy(%)",
          xaxis: {
            title: "Date",
            showgrid: true,
            zeroline: true,
            tickangle: -45, // Rotate labels if necessary for better readability
            type: "category", // Ensure x-axis uses category type for dates
            domain: [0, 0.95], // Set domain for Windows y-axis to occupy 45% of the plot height
            ticklen: 3, // Adjust the length of the tick marks
            tickmode: "auto",
            showgrid: true,
          },
          yaxis: {
            title: "Windows",
            side: "right",
            pading: "30rem",
            showline: true,
            titlefont: { color: "blue" },
            tickfont: { color: "blue" },
          },
          yaxis2: {
            title: "Accuracy in %",
            side: "left",
            overlaying: "y",
            showline: true,
            titlefont: { color: "green" },
            tickfont: { color: "green" },
            // domain: [555, 1],
          },
        }}
        config={{
          responsive: true, // Making the plot responsive
        }}
      />
    </div>
  );
};

export default PlotlyData;
