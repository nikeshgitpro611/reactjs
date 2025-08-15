import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  year,
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration
) {
  return {
    year,
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  };
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
];

const columnName = [
  { id: "year", label: "Year" },
  { id: "Investment", label: "Investment value" },
  { id: "Interest", label: "Interest (Year)" },
  { id: "totalInterest", label: "Total Interest" },
  { id: "investedCapital", label: "Invested Capital" },
];

export default function BasicTable({ inputValues }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputValues;
  createData(1, initialInvestment, annualInvestment, expectedReturn, duration);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnName.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.year}
              </TableCell>
              <TableCell align="right">{row.initialInvestment}</TableCell>
              <TableCell align="right">{row.annualInvestment}</TableCell>
              <TableCell align="right">{row.expectedReturn}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
