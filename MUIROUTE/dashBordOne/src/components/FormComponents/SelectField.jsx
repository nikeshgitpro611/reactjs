import { Checkbox, ListItemText, MenuItem, Select } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { MinWidth } from "../Form";
import { txFieldStyle, txSvgStyle } from "./FormTextField";
import { contactData } from "../../data";

const SelectField = ({ formValue, handleSkillSetChange }) => {
  const skills = [
    "Toyota 0.1",
    "Vechile2",
    "Vechile3",
    "Vechile4",
    // "Vechile5",
    // "Vechile6",
    // "Vechile7",
    // "Vechile8",
  ];
  const [position, setPosition] = useState(0);
  const SeletReff = useRef();

  useEffect(() => {
    setPosition(
      SeletReff.current ? SeletReff.current.getBoundingClientRect().left : 0
    );
  }, [SeletReff]);

  return (
    <Select
      ref={SeletReff}
      name="skills"
      id="select-skill"
      multiple
      renderValue={(selected) => selected.join(", ")}
      sx={txFieldStyle}
      value={formValue.Vechile}
      onChange={handleSkillSetChange}
      MenuProps={{
        PaperProps: {
          sx : {
            left : `${position}px !important`,
            maxHeight : 180
          }
        }
      }}
    >
      {skills.map((skill) => (
        <MenuItem key={skill} value={skill}>
          <Checkbox
            checked={formValue.Vechile.includes(skill)}
            color="secondary"
            // sx={{marginLeft: position}}
          />
          {/* <Checkbox checked={formValue.skills.indexOf(skill) > -1 } /> both concept having equal out put */}
          <ListItemText primary={skill} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectField;
