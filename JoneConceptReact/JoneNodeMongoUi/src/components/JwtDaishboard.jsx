import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { FetchApiForJwtToken, FetchJwtGet } from "../utils/fetchApi";
import { Password } from "@mui/icons-material";

const JwtDaishboard = () => {
  const [feedBack, setFeedbAck] = useState({
    mesg: "",
    sec: "",
  });
  const handelGet = async () => {
    try {
      const responce = await FetchJwtGet();
      setFeedbAck({
        mesg: responce?.message,
        sec: responce?.secrat,
      });
    } catch (error) {
      console.log("Error : ", error.message);
    }
  };

  console.log(feedBack.sec);

  return (
    <>
      <Box textAlign="center" padding={5}>
        <Typography
          variant="h6"
          fontFamily="inherit"
          margin="auto"
          color="#17d359"
        >
          Dashboard
        </Typography>
      </Box>
      <Stack
        spacing={2} // Add spacing between elements
        sx={{
          maxWidth: 400,
          margin: "0 auto",
          padding: 2,
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Typography sx={{ mb: 1 }}>
            {feedBack ? (
                <>
              <span style={{ fontWeight: "bold" ,color: 'green'}}>{feedBack?.mesg}</span>
              <br />
              <span style={{ fontWeight: "normal"  }}>{feedBack?.sec}</span>
              </>
            ) : (
              <span color="red">"No data"</span>
            )}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%" }} // Full width button
            onClick={handelGet}
          >
            Get Data
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default JwtDaishboard;
