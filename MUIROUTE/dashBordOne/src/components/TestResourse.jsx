import * as React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function TestResourse() {
  const [value, setValue] = React.useState(null);

  return (
    <DatePicker
      label="Select date"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

export default TestResourse;
