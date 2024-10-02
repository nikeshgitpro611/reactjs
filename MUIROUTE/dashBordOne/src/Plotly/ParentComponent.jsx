import React, { useState } from "react";
import PlotlyData from "./PlotlyData";
import BasicDatePicker from "../MUL/datePicker";

const ParentComponent = () => {
  const [formattedDates, setFormattedDates] = useState({
    formattedFirstDate: null,
    formattedSecondDate: null,
  });

  return (
    <div>
      <div style={{ marginLeft: "260px" }}>
        <BasicDatePicker setFormattedDates={setFormattedDates} />
      </div>
      <PlotlyData formattedDates={formattedDates} />
    </div>
  );
};

export default ParentComponent;
