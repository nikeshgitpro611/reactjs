import { Padding } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box margin="1rem" fontFamily={"monospace"} textTransform={'uppercase'}>
      <span role="img" aria-label="bank">
        🏦
      </span>
      <h3 sx={{ fontSize: "2rem" }}>Investment Calculator</h3>
    </Box>
  );
};

export default Header;
