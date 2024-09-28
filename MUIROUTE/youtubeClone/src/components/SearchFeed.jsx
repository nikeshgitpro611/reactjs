import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Vedios from "./Vedios";
import { FetchFromApi } from "../utils/FetchFromApi";
import { Box, Typography } from "@mui/material";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [vedio, setVideos] = useState([]);
  // console.log('Parms ', parm);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, []);
  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>

      <Box display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Vedios vedios={vedio} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
