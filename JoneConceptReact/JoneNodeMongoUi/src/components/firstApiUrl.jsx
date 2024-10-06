import React from "react";
import { ApiName } from "../utils/hardCodedContents";
import { Box, Grid, Typography } from "@mui/material";

const FirstApiUrl = ({ApiName}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: { xs: "block", md: "grid" },  // Block for small screens, grid for medium and above
        gridTemplateColumns: { md: "repeat(2, 1fr)" },  // 3 columns on medium screens
        gap: 0.3, // Gap between grid items
      }}
    >
      {ApiName.map((mongoDataGet, idx) => (
          <Box key={idx} sx={{ width: "100%", }} px={1} py={1}>
            <Typography
              sx={{
                color: "#595555",
                background: '#3f3d3d',
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                padding: "3px",
                width: '340px',
              }}
            >
              <Box
                component="span"
                sx={{
                  borderRight: "1px solid brown",
                  color: "#c11c5e",
                  textTransform: "capitalize",
                  padding: '3px'
                }}
              >
                {mongoDataGet.method}
              </Box>
              <Box
                component="span"
                sx={{
                  color: "#fff",
                  padding: "3px",
                }}
              >
                {mongoDataGet.Url}
              </Box>
            </Typography>
          </Box>
      ))}
    </Grid>
  );
};

export default FirstApiUrl;
