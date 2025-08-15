import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Header from "../pages/Header";
import { Table } from "@mui/material";
import BasicTable from "../pages/TableShow";

const inputFields = [
  { id: "textfield-1", label: "Initial Investment" },
  { id: "textfield-2", label: "Annual Investment" },
  { id: "textfield-3", label: "Expected Return" },
  { id: "textfield-4", label: "Duration" },
];

const renderInput = ({ id, label }) => (
  <TextField
    key={id}
    id={id}
    label={label}
    variant="standard"
    type="number"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
      sx: { padding: "10px" },
    }}
    sx={{ ml: 2 }}
  />
);

export default function InputWithIcon() {
  const [inputValues, setInputValues] = React.useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handlerChange = (inputIdentifier, newValue) => {
    setInputValues((prevState) => ({
      ...prevState,
      [inputIdentifier]: newValue,
    }));
  };

  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: "fit-content",
          backgroundColor: "#c0c0c0",
          borderRadius: "10px",
        }}
      >
        <Header />
      </Box>

      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          border: "1.5px solid rgb(217, 208, 208)",
          backgroundColor: "ButtonHighlight",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        {[0, 1].map((row) => (
          <Box key={`row-${row}`}>
            {inputFields.slice(row * 2, row * 2 + 2).map(renderInput)}
          </Box>
        ))}
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center" }}
        marginTop={2}
        maxHeight={"30vh"}
        overflow={"auto"}
      >
        <BasicTable inputValues={inputValues}/>
      </Box>
    </>
  );
}
