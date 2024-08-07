import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { contactData } from "../data"; // Assuming this is an array of contact objects

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const TableData = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Vechile</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((tableData) => {
            let skillData = tableData.Vechile.join(",");
            
            return (
              <TableRow
                key={tableData.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{tableData.id}</TableCell>
                <TableCell>{tableData.name}</TableCell>
                <TableCell>{tableData.Location}</TableCell>
                <TableCell>{skillData}</TableCell>
                <TableCell>{formatDate(tableData.startDate)}</TableCell>
                <TableCell>{tableData.preference}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
