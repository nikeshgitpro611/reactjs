import React, { useState } from "react";
import {
  Alert,
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { contactData } from "../data";
import { FormTextField } from "./FormComponents";
import SelectField from "./FormComponents/SelectField";
import { txFieldStyle } from "./FormComponents/FormTextField";

const roles = ["USA-A", "USA-B", "USA-C", "USA-D"];
const defaultValue = "1";
export const MinWidth = 300;
const paperInputStyle = {
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: "1px solid",
      borderColor: "primary.main",
    },
    "&:hover": {
      "& > fieldset": {
        borderColor: "primary.light",
      },
    },
  },
  "& .MuiFormLabel-root": {
    color: "red",
  },
};

const Form = () => {
  const [formValue, setFormValue] = useState({
    id: `${contactData.length + 1}`,
    name: "",
    Location: "",
    Vechile: ["Toyota 0.1"],
    startDate: dayjs(),
    preference: defaultValue,
    formatedDateTime: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleTextFieldChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutocompleteChange = (event, newValue) => {
    setFormValue((prev) => ({
      ...prev,
      Location: newValue || "",
    }));
  };

  const handleSkillSetChange = (e) => {
    const { value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      Vechile: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleDateChange = (newDate) => {
    setFormValue((prev) => ({
      ...prev,
      startDate: newDate,
      formatedDateTime: dayjs(newDate).format("MMMM DD, YYYY hh:mm A"),
    }));
  };

  const handleRadioChange = (e) => {
    setFormValue((prev) => ({
      ...prev,
      preference: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    contactData.push(formValue);
    setIsOpen(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        setIsOpen(false);
        resolve();
      }, 2000);
    });
    handleClear();
  };

  const handleClear = () => {
    setFormValue({
      id: `${contactData.length + 1}`,
      name: "",
      Location: "",
      Vechile: [],
      startDate: dayjs(),
      preference: defaultValue,
    });
  };

  return (
    <>
      <Paper sx={paperInputStyle}>
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <FormTextField
                formValue={formValue}
                handleTextFieldChange={handleTextFieldChange}
              />
              <Autocomplete
                disablePortal
                options={roles}
                isOptionEqualToValue={(option, value) =>
                  option.id === value.id || value === " "
                }
                // sx={{ minWidth: 300 }}
                sx={txFieldStyle}
                getOptionLabel={(roleOption) => `${roleOption}`}
                renderInput={(params) => (
                  <TextField {...params} name="role" label="Location" />
                )}
                value={formValue.role}
                onChange={handleAutocompleteChange}
                ListboxProps={{
                  sx: {
                    height: 100,
                    color: "Highlight",
                  },
                }}
              />
            </FormGroup>

            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <SelectField
                formValue={formValue}
                handleSkillSetChange={handleSkillSetChange}
              >
               
              </SelectField>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={txFieldStyle}
                  label="Start Date"
                  value={formValue.startDate}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ minWidth: 300 }} />
                  )}
                  defaultValue={["day"]}
                  PooperProps={{ backgroundColor: 'red' }}
                />
              </LocalizationProvider>
            </FormGroup>

            <FormGroup row sx={{ padding: 2, justifyContent: "space-around" }}>
              <FormGroup sx={{ minWidth: 300, marginRight: 3 }}>
                <FormLabel component="legend">📈How many vehicles reached their destination? 🚘</FormLabel>
                <RadioGroup
                  id="preference-type-radio"
                  name="preference"
                  value={formValue.preference}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label= '1'
                  />
                  <FormControlLabel
                    value= "2"
                    control={<Radio />}
                    label="2"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="3"
                  />
                </RadioGroup>
              </FormGroup>

              <Stack
                spacing={2}
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>

      <Dialog open={isOpen}>
        <Alert variant="filled" severity="success">
          This is a filled success!
        </Alert>
      </Dialog>
    </>
  );
};

export default Form;
