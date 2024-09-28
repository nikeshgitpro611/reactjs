import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constansLogo";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetails, marginTop }) => {
  console.log('channelDetails', channelDetails);

  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "100%", sm: "350px", md: "320px" },
        height: '326px',
        margin: 'auto',
        marginTop: marginTop
      }}
    >
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
          <CardMedia
            sx={{
              borderRadius: "50%",
              width: "170px",
              border: "3px solid green",
            }}
            component="img"
            height="184"
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt="Paella dish"
          />
          <Typography
            variant="h6"
            color="#cdda0e"
            fontWeight="bold"
            fontFamily="revert"
          >
            {channelDetails?.snippet?.title || 'Nikesh'}
            <CheckCircle sx={{ color: "green", fontSize: 18, ml: "4px" }} />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography variant="h6">
              {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscriber
            </Typography>
          )}

        </CardContent>

      </Link>
    </Box>
  );
};

export default ChannelCard;
