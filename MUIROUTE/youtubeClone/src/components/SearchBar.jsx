import { IconButton, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input type="text" className="search-bar" placeholder="Serch..." />
      <IconButton type="submit" sx={{p:'10px', color: 'red'}}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
