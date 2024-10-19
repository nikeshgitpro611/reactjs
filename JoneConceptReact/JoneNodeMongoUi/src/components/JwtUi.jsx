import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FetchApiForJwtToken } from "../utils/fetchApi";

const JwtUi = () => {
  const [formData, setFormData] = useState({
    name: "",
    Password: "",
  });
  const [toknMsg, setToknMsg] = useState("");
  const [errorMsg, SetErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    //Condition for Error Msg
    if (!formData.name || !formData.Password) {
      SetErrorMsg("Please provide name and Password");
      setTimeout(() => {
        SetErrorMsg("");
      }, 2000);
      // return;
    }

    try {
      e.preventDefault();
      const getData = await FetchApiForJwtToken(
        formData.name,
        formData.Password
      );
      setFormData({
        name: "",
        Password: "",
      });

      setToknMsg(getData?.message);
      localStorage.setItem("token", getData?.token);
      //   console.log("getData:", getData); // Handle response data here
    } catch (error) {
      console.log("Error:", error.message); // Log errors if any occur
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Retain other values while updating the specific field
      [name]: value,
    });
  };

  useEffect(() => {
    if (toknMsg) {
      let time = setTimeout(() => {
        setToknMsg("");
      }, 2000);

      return () => clearTimeout(time);
    }
  }, [toknMsg]);

  return (
    <Stack
      spacing={2}
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 2,
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h6" fontFamily="cursive" margin="auto">
          Register<span style={{ color: "red" }}>|</span>Login
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography sx={{ mb: 1 }}>
          <span style={{ fontWeight: "bold" }}>Name:</span>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: 1, width: "100%" }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
          />
        </Typography>
        <Typography sx={{ mb: 2 }}>
          <span style={{ fontWeight: "bold" }}>Password:</span>
          <TextField
            variant="outlined"
            size="small"
            sx={{ ml: 1, width: "100%" }}
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </Typography>
        {errorMsg && (
          <Box textAlign="center">
            <p style={{ color: "#e34747", textTransform: "capitalize" }}>
              {errorMsg}
            </p>
          </Box>
        )}

        {toknMsg && (
          <Box textAlign="center">
            <Typography variant="h5" color="green">
              {toknMsg}
            </Typography>
          </Box>
        )}

        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%" }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default JwtUi;
