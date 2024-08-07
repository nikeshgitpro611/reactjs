import { TextField } from "@mui/material";
import React from "react";
import { MinWidth } from "../Form";


export const txFieldStyle = {
  minWidth: 300,
  marginRight: 3,
  marginBottom: { xs: 2, md: 0 },
  marginRight: {xs: 2},
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      background: 'primary.dark'
    }
  },
  "& .MuiOutlinedInput-root:hover":{
    "& > fieldset.MuiOutlinedInput-notchedOutline":{
      borderColor: 'orange'
    }
  }
} 
export const txSvgStyle = {
  minWidth: 300,
  marginRight: 3,
  marginBottom: { xs: 2, md: 0 },
  marginRight: {xs: 2},
  "& .MuiInputBase-root.Mui-focused": {
    "& > fieldset": {
      background: 'red'
    }
  },
  "& .MuiInputBase-root:hover":{
    "& > fieldset.MuiOutlinedInput-notchedOutline":{
      borderColor: 'orange'
    }
  }
} 
const FormTextField = ({ formValue, handleTextFieldChange }) => {
  return (
    <TextField
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{ 
        minWidth: MinWidth,
        marginRight: 2,
        marginBottom: { xs: 2, md: 0 },
        zIndex: "drawer",
        // "& .MuiInputBase-root":{
        //   height: 80
        // },
        "& .MuiOutlinedInput-root.Mui-focused":{
          "& > fieldset":{
            borderColor: 'brown'
          }
        },
        "& .MuiOutlinedInput-root:hover":{
          "& > fieldset.MuiOutlinedInput-notchedOutline":{
            borderColor: 'orange'
          }
        }

      }}
      value={formValue.name}
      onChange={handleTextFieldChange}
    />
  );
};

export default FormTextField;
