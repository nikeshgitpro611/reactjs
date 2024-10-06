import React from "react";
import TaskMenager from "./TaskMenager";
import { JwtDaishboard, JwtUi } from "./";
import { Box } from "@mui/material";

const JwtMain = ({ selectedCategory }) => {
  return (
    <div>
      <TaskMenager selectedCategory={selectedCategory} />
      <Box  component="section" sx={{ p: 4, border: '2px dashed #fff',borderRadius: '20px' }}>
        <JwtUi />
        <JwtDaishboard />
      </Box>
    </div>
  );
};

export default JwtMain;
