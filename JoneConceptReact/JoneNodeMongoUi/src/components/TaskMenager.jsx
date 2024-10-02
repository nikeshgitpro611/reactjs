import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { ApiName } from "../utils/hardCodedContents";
import { DeleteForeverIcon } from "../utils/constanLogo";

const TaskMenager = ({ mongoData }) => {
  console.log("ApiName : ", ApiName);

  return (
    <Stack
      direction="row"
      gap={2}
      justifyContent="start"
      flexWrap="wrap"
      alignItems="start"
    >
      {ApiName.map((mongoDataGet, idx) => (
        <Box key={idx}>
          <Stack sx={{ width: { xs: "100%", sm: "358px", md: "400px" } }}>
            <Box sx={{ background: "#ad9d9d" }} px={1} py={2}>
              <Typography
                style={{
                  color: "#ffff",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <span
                  style={{
                    borderRight: "1px solid brown",
                    color: "#c11c5e",
                    paddingRight: "6px",
                    textTransform: "capitalize",
                  }}
                >
                  {mongoDataGet.method}
                </span>
                <span
                  style={{
                    color: "#000",
                    padding: "3px",
                  }}
                >
                  {mongoDataGet.Url}
                </span>
              </Typography>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default TaskMenager;
