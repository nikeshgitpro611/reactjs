import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Sidebar, Vedios } from "./";
import { fetchData, FetchFromApi } from "../utils/FetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [vedio, setVedio] = useState([]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVedio(data.items)
    );
    fetchData()
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", sm: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright @ 2024
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          mb={4}
          fontWeight="bold"
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Vedios</span>
        </Typography>

        <Vedios vedios={vedio} />
      </Box>
    </Stack>
  );
};

export default Feed;
