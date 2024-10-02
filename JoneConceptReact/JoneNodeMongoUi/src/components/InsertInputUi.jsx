import { Box, Stack, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { EditNoteIcon } from "../utils/constanLogo"; // Corrected import
import { FetchApiInsert, FetchDeleteData, FetchFormApi } from "../utils/fetchApi";
import { ToastContainer, toast } from "react-toastify"; // Assuming toast for feedback
import "react-toastify/dist/ReactToastify.css";
import Edittask from "./Edittask";

const InsertInputUi = () => {
  const [inputValue, setInputValue] = useState("");
  const [insertInput, setInsertInput] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) return;

    try {
      const response = await FetchApiInsert(inputValue); //insrt
      const getData = await FetchFormApi("http://localhost:5000/api/v1/tasks");//get
      if (response) {
        // setInsertInput([...insertInput, response]);
        setInsertInput(getData);
        setInputValue("");
      }
    } catch (error) {
      console.error("Error inserting task:", error);
    }
  };

  //For  Task delet/edit
  const handelDelet = async (id) => {
    try {
      const responce = await FetchDeleteData(id);
      {
        responce &&
          setInsertInput(insertInput.filter((filda) => filda._id !== id));
      }
      toast.success("Task deleted successfully!");
    } catch (error) {
      console.log("Errr : ", error);
    }
  };

  return (
    <Box display={{ md: "flex" }}>
      {/* tost */}
      <ToastContainer
        position="top-right" // Sets the position to the top-right corner
        autoClose={1000} // Sets the duration to 1000 seconds (1,000,000 milliseconds)
        hideProgressBar={false} // Shows the progress bar
        newestOnTop={true} // Ensures new toasts appear on top
        closeOnClick
        rtl={false} // If you want left-to-right text direction
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Input Section */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ marginTop: 2, background: "#f5eded" }}
        padding={2}
        borderRadius={2}
        minHeight={30}
        height={30}
        minWidth={230}
      >
        <TextField
          variant="outlined"
          placeholder="Enter task"
          size="small"
          sx={{ flexGrow: 1 }} // Input expands as needed
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <IconButton
          color="primary"
          sx={{ border: "1px solid green" }}
          aria-label="add task"
          onClick={handleSubmit}
        >
          <AddIcon />
        </IconButton>
      </Stack>

      {/* Task Display Section */}
      <Box
        sx={{
          display: {
            xs: "grid", // Hide for extra small screens
            sm: "grid", // Show grid for small screens and above
            md: "grid",
          },
          flexWrap: { sm: "wrap", md: "wrap" },
          // flexDirection: {xs: 'column', md: 'column'},
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr", // 2 columns for small screens (>=600px)
            md: "repeat(2, 1fr)", // 2 column for medium screens (>=900px)
          },
          justifyContent: "center",
          width: "100%",
        }}
      >
        {insertInput.length > 0 &&
          insertInput.map((dataGet, idx) => (
            <div
              style={{ display: "flex", justifyContent: "center" }}
              key={idx}
            >
              <Box
                gap={3}
                px={2}
                sx={{
                  marginTop: 1,
                  width: { xs: "100%", sm: "auto" }, // Auto width for small screens
                }}
              >
                <Box
                  px={1}
                  sx={{ background: "#736a6a" }}
                  width={250}
                  borderRadius={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    color="#1b1a1a"
                    variant="body1"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    {dataGet.name}
                  </Typography>
                  {/* Edit and Delete Icons */}
                  <Box display="flex" gap={1}>
                    <IconButton
                      aria-label="edit"
                      // onClick={() => handelEdit(dataGet._id)}
                    >
                      <Edittask dataGet={dataGet} />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handelDelet(dataGet._id)}
                    >
                      <DeleteForeverIcon sx={{ color: "#f07373" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </div>
          ))}
      </Box>
    </Box>
  );
};

export default InsertInputUi;
