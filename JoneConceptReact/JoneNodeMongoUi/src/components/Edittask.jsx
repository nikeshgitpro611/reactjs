import React, { useState } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { FetchApiForEdit } from "../utils/fetchApi";
import { toast } from "react-toastify";

const Edittask = ({ dataGet }) => {
  const [open, setOpen] = useState(false); // State to control the dialog open/close
  const [selectedTask, setSelectedTask] = useState(null); // State to store selected task data
  const [editValue, setEditValue] = useState(""); // State for the edit input value

  // Open dialog when edit is clicked
  const handleClickOpen = async (task) => {
    console.log("dataGet : ", task);
    setSelectedTask(task); // Set the task to be edited
    setEditValue(task.name); // Initialize input field with task name
    setOpen(true); // Open dialog
  };

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Handle task update (on Save click)
  const handleSave = async (taskId) => {
    const responce = await FetchApiForEdit(taskId,editValue);
    // console.log("responce : ", editValue);


    if (responce) {
    toast.success("Task edited successfully!");
      setOpen(false); // Close the dialog after saving
    }
  };

  return (
    <>
      {/* The IconButton that opens the Edit pop-up */}
      <IconButton
        aria-label="edit"
        onClick={() => handleClickOpen(dataGet)} // Pass the task object to the function
      >
        <EditNoteIcon sx={{ color: "#a1d577" }} />
      </IconButton>

      {/* Dialog (pop-up) */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          {/* Edit Task Input */}
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            type="text"
            fullWidth
            variant="outlined"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleSave(dataGet._id)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Edittask;
