import { Stack } from "@mui/material";
import React from "react";
import { category } from "../utils/constanLogo";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { sm: "column" },
        flexWrap: "wrap",
        height: { sx: "auto", md: "95%" },
        overflowY: "auto",
      }}
    >
      {category.map((data,idx) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(data.name)}
          style={{
            background: data.name === selectedCategory && "#fc1503",
            color: "#fff",
          }}
          key={idx}
        >
          <span
            style={{
              color: data.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {data.icon}
          </span>
          <span
            style={{ opacity: data.name === selectedCategory ? "1" : "0.7" }}
          >
            {data.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
