import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      alignItems="center"
      sx={{ position: "sticky", top: 0,borderBottom: '1px solid rgb(34,193,195)' }}
    >
      <Link to="/">
        <Typography variant="h6" color="#fff">
          JONE-NODEJS API
        </Typography>
      </Link>
    </Stack>
  );
};

export default NavBar;
