import React, { useState } from "react";
import {
  Alert,
  Autocomplete,
  Button,
  Dialog,
  DialogTitle,
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
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { contactData } from "../data";
import { FormTextField } from "./FormComponents";
import SelectField from "./FormComponents/SelectField";

// const skills = ["Software", "Architect", "Designer", "Full Stack"];
const roles = ["React", "Nodejs", "Python", "JavaScript"];
const defaultValue = "Work From Home";

export const MinWidth = 300;

const Form = () => {
  console.log("Checklength : ", contactData);
  const [formValue, setFormValue] = useState({
    id: `${contactData.length + 1}`,
    name: "",
    role: "",
    skills: ["Software"],
    startDate: dayjs(), // Default to current date
    preference: defaultValue,
    formatedDateTime: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const formatedDate = dayjs(formValue.startDate).format(
    "MMMM DD, YYYY hh:mm A"
  );

  const handleTextFieldChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutocompleteChange = (event, newValue) => {
    setFormValue((prev) => ({
      ...prev,
      role: newValue,
    }));
  };

  const handleSkillSetChange = (e) => {
    const { value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      skills: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleDateChange = (newDate) => {
    // const test = new Date(newDate).toLocaleDateString("fr-FR")

    setFormValue((prev) => ({
      ...prev,
      startDate: newDate,
    }));

    setFormValue((prev) => ({
      ...prev,
      formatedDateTime: formatedDate,
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
      role: "",
      skills: [],
      startDate: dayjs(),
      preference: defaultValue,
    });
  };

  return (
    <>
      <Paper>
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <FormTextField
                formValue={formValue}
                handleTextFieldChange={handleTextFieldChange}
              />
              <Autocomplete
                options={roles}
                sx={{ minWidth: 300 }}
                renderInput={(params) => (
                  <TextField {...params} name="role" label="Role" />
                )}
                value={formValue.role}
                onChange={handleAutocompleteChange}
              />
            </FormGroup>

            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <SelectField
                formValue={formValue}
                handleSkillSetChange={handleSkillSetChange}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start Date"
                  value={formValue.startDate}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ minWidth: 300 }} />
                  )}
                />
              </LocalizationProvider>
            </FormGroup>

            <FormGroup row sx={{ padding: 2, justifyContent: "space-around" }}>
              <FormGroup sx={{ minWidth: 300, marginRight: 3 }}>
                <FormLabel component="legend">Work Preference</FormLabel>
                <RadioGroup
                  id="preference-type-radio"
                  name="preference"
                  value={formValue.preference}
                  onChange={handleTextFieldChange}
                >
                  <FormControlLabel
                    value="Work From Home"
                    control={<Radio />}
                    label="Work From Home"
                  />
                  <FormControlLabel
                    value="Hybrid"
                    control={<Radio />}
                    label="Hybrid"
                  />
                  <FormControlLabel
                    value="In Office"
                    control={<Radio />}
                    label="In Office"
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

      {/* //Pop Visible when Submit button call */}
      <Dialog open={isOpen}>
        <Alert variant="filled" severity="success">
          This is a filled success!.
        </Alert>
      </Dialog>
    </>
  );
};

export default Form;
