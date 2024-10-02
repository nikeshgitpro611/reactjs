import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { InsertInputUi, SideBar, TaskMenager } from "./";
import { BaseUrlGet, FetchFormApi } from "../utils/fetchApi";
import { category } from "../utils/constanLogo";

const MainContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("Task Menager Api");
  const [mongoData, setMongoData] = useState([]);
  useEffect(() => {
    FetchFormApi(BaseUrlGet).then((data) => setMongoData(data));
  }, [selectedCategory]);

  // console.log('mongoData : ', mongoData);

  return (
    <Stack sx={{ flexDirection: { sx: "column", sm: "row" } }}>
      <Box
        sx={{
          height: { sx: "100%", sm: "95vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 2, sx: 0 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright @ 2024
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h6"
          fontFamily="cursive"
          mb={4}
          fontWeight="bold"
          sx={{ color: "#fff" }}
        >
          <span style={{ color: "green" }}>Hi You Selected </span>
          {selectedCategory}
        </Typography>
        {selectedCategory === category[0].name && (
          <>
            <TaskMenager mongoData={mongoData} />
            <Box
              component="section"
              sx={{
                p: 6,
                border: "1px dashed grey",
                marginTop: "20px",
                background: "#907b7b",
                display: "flex",
                alignContent: "start",
                justifyContent: "start",
                borderRadius: '20px'
              }}
            >
              {/* <Box display='flex'> */}

              <InsertInputUi />
              {/* </Box> */}
            </Box>
          </>
        )}
      </Box>
    </Stack>
  );
};

export default MainContainer;
