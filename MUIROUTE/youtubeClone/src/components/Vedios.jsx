import { Box, Stack } from "@mui/material";
import React from "react";
import { VedioCard, ChannelCard, Loader } from "./";

const Vedios = ({ vedios, direction }) => {
  if (!vedios?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      gap={2}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
    >
      {vedios.map((vediosData, idx) => (
        <Box key={idx}>
          {vediosData.id?.videoId && <VedioCard vedio={vediosData} />}
          {vediosData.id?.channelId && (
            <ChannelCard channelDetails={vediosData} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Vedios;
