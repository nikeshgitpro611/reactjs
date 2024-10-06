import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import FirstApiUrl from "./firstApiUrl";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"; // Correct import for Material-UI icon
import { category } from "../utils/constanLogo";
import { ApiName, JWTName } from "../utils/hardCodedContents";

const TaskManager = ({ selectedCategory }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      justifyContent="start"
      flexWrap="wrap"
      alignItems="start"
    >
      {category.length > 0 && selectedCategory === category[0].name && (
        <FirstApiUrl ApiName = {ApiName}/>
      )}
      {category.length > 0 && selectedCategory === category[2].name && (
        <FirstApiUrl ApiName = {ApiName}/>
      )}
    </Stack>
  );
};

export default TaskManager;
