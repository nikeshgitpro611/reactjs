import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constansLogo";
import { CheckCircle } from "@mui/icons-material";

const VedioCard = ({
  vedio: {
    id: { videoId },
    snippet,
  },
}) => {
//   console.log(videoId, snippet);

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 4,
      }}
    >
      <Link to={videoId ? `/vedio/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          height="180"
          width="358"
          image={snippet?.thumbnails?.high?.url}
          alt="Paella dish"
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/vedio/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link
            to={
              snippet?.channelId
                ? `/channelId/${snippet?.channelId}`
                : demoChannelTitle
            }
          >
            <Typography variant="subtitle1" fontWeight="bold" color="#9c8b8b">
              {snippet?.channelTitle.slice(0, 60) ||
                demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{ color: "green", fontSize: 18, ml:'4px'}} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VedioCard;
