import { buttonBaseClasses, Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constansLogo";

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  // const selectedCategory = "New";
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((categor) => (
        <button
          className="category-btn"
          onClick={()=> setSelectedCategory(categor.name)}
          style={{
            background: categor.name === selectedCategory && "#Fc1503",
            color: "white",
          }}
          key={categor.name}
        >
          <span
            style={{
              color: categor.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {categor.icon}
          </span>
          <span
            style={{ opacity: categor.name === selectedCategory ? "1" : "0.8" }}
          >
            {categor.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
