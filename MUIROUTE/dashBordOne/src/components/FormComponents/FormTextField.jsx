import { TextField } from "@mui/material";
import React from "react";
import { MinWidth } from "../Form";

const FormTextField = ({formValue, handleTextFieldChange}) => {
  return (
    <TextField
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{ minWidth: MinWidth, marginRight: 3 }}
      value={formValue.name}
      onChange={handleTextFieldChange}
    />
  );
};

export default FormTextField;
