import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { contactData } from "../data";
import { formatDate } from "../components/Table";
import axios from "axios";

const PlotlyData = () => {
  const [xVal, setXVal] = useState([]);
  const [lVal, setLVal] = useState([]);
  const [datapass, setData] = useState([]);
  const [destination, setDestination] = useState([]);

   //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },

  const fetchApiTest = async () => {
    try {
      const res = await axios.get(
        "https://5ef2-103-172-209-100.ngrok-free.app",
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApiTest();
    // const dates = contactData.map((data) => formatDate(data.startDate));
    // const locations = contactData.map((data) => data.Location);
    // setXVal(dates);
    // setLVal(locations);
  }, []);
  useEffect(() => {
    if (datapass.length !== 0) {
      console.log(datapass.data);
      let date = datapass.data.map((data) => data.ActualOccurrenceDate);
      let locations = datapass.data.map((data) => data.assignment_origin);
      let destination = datapass.data.map(
        (data) => data.assignment_destination
      );
      // console.log(VarDate);
      setXVal(date);
      setLVal(locations);
      setDestination(destination);
    }
  }, [datapass]);

  return (
    <div>
      <Plot
        data={[
          {
            x: xVal,
            y: lVal,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
            name: "Scatter Plot",
            text: destination,
            // text: datapass.data.map(
            //   (data) => `Name: ${data.assignment_destination}, Preference: ${data.routes_identifier}`
            // ), // Adding hover info
          },
          {
            x: xVal,
            y: lVal,
            fill: "tozeroy",
            type: "scatter",
            mode: "none",
          },
        ]}
        layout={{
          width: 720,
          height: 380,
          title: "A Fancy Plot",
          xaxis: {
            title: "Start Date",
            showgrid: true,
            zeroline: true,
          },
          yaxis: {
            title: "Location",
            showline: true,
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
