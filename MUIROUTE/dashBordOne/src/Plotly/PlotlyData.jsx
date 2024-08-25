import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import axios from "axios";

const PlotlyData = ({ formattedDates }) => {
  const [xVal, setXVal] = useState([]);
  const [windows, setWindowData] = useState([]);
  const [accuracy, setAccuracy] = useState([]);
  const [datapass, setData] = useState([]);
  const [totalDate, setTotalDate] = useState([]);

  // Function to format date
  const formatDate = (dateStr) => {
    
    const [month, day, year] = dateStr
    .split("/")
    .map((num) => parseInt(num, 10));
    return `${month}/${day}/${year}`;
  };

  const fetchApiTest = async () => {
    try {
      // console.log("formattedDates", formattedDates);

      const data = {
        primeryDate: formatDate(formattedDates?.formattedFirstDate),
        secondaryDate: formatDate(formattedDates?.formattedSecondDate),
      };
      // console.log("Data to be sent:", data);

      const headers = {
        "Content-Type": "application/json",
      };

      const res = await axios.post(
        "http://localhost:3001/api/@ty/lineGui",
        data,
        { headers }
      );

      // console.log("Response:", res.data);
      setData(res.data);
    } catch (error) {
      // Correct error handling
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Server Error:", error.response.data);
        console.error("Server Status:", error.response.status);
      } else if (error.request) {
        // Request was made but no response received
        console.error("No Response:", error.request);
      } else {
        // Something went wrong setting up the request
        console.error("Error:", error.message);
      }
    }
  };

  useEffect(() => {
    if (formattedDates) {
      fetchApiTest();
    }
  }, [formattedDates]);

  useEffect(() => {
    if (datapass && datapass.data) {
      // console.log("datapass data:", datapass.data); // Log to verify the response structure

      const total = datapass.data.Total || [];
      const gateDateFrmApi = datapass.data.x || [];
      const windowData = datapass.data.y?.Windows || [];
      const accuracyData = datapass.data.y?.Accuracy || [];

      // Convert strings to Date objects and back to strings in MM/DD/YYYY format
      const sortedArray = gateDateFrmApi
        .map((dateStr) => new Date(dateStr))
        .map((date) => date.toLocaleDateString("en-US"));

      setXVal(sortedArray);

      // Map the data to the correct format for plotting
      setWindowData(
        sortedArray.map(
          (date) =>
            (windowData[gateDateFrmApi.indexOf(date)] || 0) /
            (total[gateDateFrmApi.indexOf(date)] || 1)
        )
      );
      setAccuracy(
        sortedArray.map(
          (date) =>
            (accuracyData[gateDateFrmApi.indexOf(date)] || 0) /
            (total[gateDateFrmApi.indexOf(date)] || 1)
        )
      );

      setTotalDate(
        sortedArray.map((date) => total[gateDateFrmApi.indexOf(date)] || 0)
      );
    }
  }, [datapass]);

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
                `Date: ${date}<br>Windows: ${
                  windows[index]?.toFixed(2) || "N/A"
                }`
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
                `Date: ${date}<br>Accuracy: ${
                  accuracy[index]?.toFixed(2) || "N/A"
                }`
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
