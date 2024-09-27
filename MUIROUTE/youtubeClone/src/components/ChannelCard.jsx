import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetails }) => {
  console.log(channelDetails);

  return (
    <Box sx={{ borderRadius: "20px", boxShadow: "none" }}>
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            {/* {snippet?.title} */}
            {channelDetails?.snippet?.channelTitle}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
