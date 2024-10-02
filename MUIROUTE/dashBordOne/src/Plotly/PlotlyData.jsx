import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import GroupedBarChart from "./Barchart";
import { FormatDate, postData } from "../utils/utils";
import CollapsibleTable from "../components/TyPagination";
import { Box } from "@mui/material";

const PlotlyData = ({ formattedDates }) => {
  const [xVal, setXVal] = useState([]);
  const [windows, setWindowData] = useState([]);
  const [accuracy, setAccuracy] = useState([]);
  const [datapass, setData] = useState([]);
  const [totalDate, setTotalDate] = useState([]);

  const fetchApiTest = async () => {
    const data = {
      startDate: FormatDate(formattedDates?.formattedFirstDate).date,
      endDate: FormatDate(formattedDates?.formattedSecondDate).date,
    };

    const url = "http://localhost:3001/api/@ty/postLineChart";
    const response = await postData(url, data);
    setData(response);
  };

  useEffect(() => {
    if (formattedDates) {
      fetchApiTest();
    }
  }, [formattedDates]);

  useEffect(() => {
    if (datapass && datapass.data) {
      const total = datapass.data.Total || [];
      const gateDateFrmApi = datapass.data?.x || [];
      const windowData = datapass.data.y?.Windows || [];
      const accuracyData = datapass.data.y?.Accuracy || [];

      const sortedArray = gateDateFrmApi
        .map((dateStr) => new Date(dateStr))
        .map((date) => date.toLocaleDateString("en-US"));

      setXVal(sortedArray);

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
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: "100%",
        overflow: "auto", // Prevent outer scroll
      }}
    >
      {/* Plotly Chart */}
      <Box
        sx={{
          flex: 1,
          padding: "10px",
          overflowY: "auto", // Enable vertical scroll for chart area
          maxHeight: "100vh", // Constrain the height to view height
        }}
      >
        <Plot
          data={[
            {
              x: xVal,
              y: windows,
              type: "scatter",
              mode: "lines+markers",
              name: "Windows",
              marker: { color: "blue" },
              yaxis: "y1",
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
              yaxis: "y2",
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
            xaxis: {
              title: "Date",
              showgrid: true,
              zeroline: true,
              tickangle: -45,
              type: "category",
              domain: [0.24, 0.6],
              ticklen: 3,
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
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px",
          }}
          config={{
            responsive: true,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      {/* Grouped Bar Chart */}
      <Box
        sx={{
          flex: 1,
          padding: "10px",
          overflowY: "auto", // Enable vertical scroll for bar chart area
          maxHeight: "100vh", // Constrain the height to view height
        }}
      >
        <GroupedBarChart formattedDates={formattedDates} />
      </Box>

      {/* Collapsible Table */}
      <Box
        sx={{
          flex: 1,
          padding: "10px",
          overflow: "auto", // This handles both X and Y scrollbars
          maxHeight: "100vh", // Limits the height to the viewport height
        }}
      >
        <CollapsibleTable formattedDates= {formattedDates}/>
      </Box>
    </Box>
  );
};

export default PlotlyData;
