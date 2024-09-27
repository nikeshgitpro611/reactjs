import { Stack } from "@mui/material";
import React from "react";
import { logo } from "../utils/constansLogo";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        justifyContent: "space-between",
        backgroundColor: "#000",
        position: "sticky",
        top: 0,
      }}
    >
      <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="Logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
