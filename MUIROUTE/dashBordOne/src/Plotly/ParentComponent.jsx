import React, { useState } from 'react';
import PlotlyData from './PlotlyData';
import BasicDatePicker from '../MUL/datePicker';

const ParentComponent = () => {
  const [formattedDates, setFormattedDates] = useState({
    formattedFirstDate: null,
    formattedSecondDate: null,
  });

  return (
    <div>
      <BasicDatePicker setFormattedDates={setFormattedDates} />
      <PlotlyData formattedDates={formattedDates} />
    </div>
  );
};

export default ParentComponent;
