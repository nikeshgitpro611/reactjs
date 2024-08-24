import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import dayjs from "dayjs";

const BasicDatePicker = ({ setFormattedDates }) => {
  const [valDate, setValDate] = React.useState({
    firstDate: null,
    secondDate: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatting dates for form submission
    const formattedFirstDate = valDate.firstDate ? dayjs(valDate.firstDate).format("MM/DD/YYYY") : null;
    const formattedSecondDate = valDate.secondDate ? dayjs(valDate.secondDate).format("MM/DD/YYYY") : null;

    // Update the formatted dates state in the parent component
    setFormattedDates({
      formattedFirstDate,
      formattedSecondDate,
    });

    console.log("Formatted Dates: ", { formattedFirstDate, formattedSecondDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Start Date"
            value={valDate.firstDate}
            onChange={(newValue) => setValDate({ ...valDate, firstDate: newValue })}
          />
          <DatePicker
            label="End Date"
            value={valDate.secondDate}
            onChange={(newValue) => setValDate({ ...valDate, secondDate: newValue })}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </DemoContainer>
      </LocalizationProvider>
    </form>
  );
};

export default BasicDatePicker;
