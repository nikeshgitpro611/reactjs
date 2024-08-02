import { ListItemText, MenuItem, Select } from "@mui/material";
import React from "react";
import { MinWidth } from "../Form";

const SelectField = ({ formValue, handleSkillSetChange }) => {
  const skills = ["Software", "Architect", "Designer", "Full Stack"];

  return (
    <Select
      name="skills"
      id="select-skill"
      multiple
      renderValue={(selected) => selected.join(", ")}
      sx={{ minWidth: MinWidth }}
      value={formValue.skills}
      onChange={handleSkillSetChange}
    >
      {skills.map((skill) => (
        <MenuItem key={skill} value={skill}>
          <ListItemText primary={skill} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectField;
