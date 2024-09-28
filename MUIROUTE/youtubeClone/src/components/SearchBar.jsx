import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerma, setSearchTearms] = useState("");
  const navigat = useNavigate()
  console.log("searchTerma : ", searchTerma);

  const handelOnSubmit =  (e) => {
    e.preventDefault();
    if (searchTerma) {
      navigat(`/search/${searchTerma}`);
      setSearchTearms('')
    }
  };

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
      onSubmit={handelOnSubmit}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Serch..."
        value={searchTerma}
        onChange={(e) => setSearchTearms(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
