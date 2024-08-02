import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const today = dayjs();
const tomorrow = dayjs().add(1, "day");

export default function TestResourse() {
  const [Cdate, setDate] = React.useState({
    current: new Date().toLocaleDateString("fr-FR"),
    updated: "",
  });

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label="DatePicker">
            <DatePicker
              defaultValue={today}
              minDate={tomorrow}
              views={["year", "month", "day"]}
              onChange={(date) => {
                const formattedDate = new Date(date).toLocaleDateString("fr-FR");
                setDate((prev) => ({
                  ...prev,
                  updated: formattedDate,
                }));
              }}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      {Cdate && (
        <h2>
          Hey current Date: {Cdate.current} and Updated Date: {Cdate.updated}
        </h2>
      )}
    </>
  );
}
