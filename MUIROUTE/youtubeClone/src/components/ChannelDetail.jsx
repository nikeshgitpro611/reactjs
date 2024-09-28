import React, { useEffect, useState } from "react";
import { ChannelCard, Vedios } from "./";
import { useParams } from "react-router-dom";
import { FetchFromApi } from "../utils/FetchFromApi";
import { Box } from "@mui/material";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [vedio, setVedios] = useState([]);

  useEffect(() => {
    const data = FetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data.items[0])
    );
    const vedioData = FetchFromApi(
      `search?channelId=${id}&part=snippet%2Cid&order=date`
    ).then((data) => setVedios(data?.items));
  }, [id]);

  console.log("channelDetails : ", channelDetails);
  console.log("vedio : ", vedio);

  return (
    <Box minHeight="95vh">
      <Box color="red">
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        />
      </Box>
      <ChannelCard channelDetails={channelDetails} marginTop="-110px" />
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }}/>
          <Vedios vedios={vedio} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
