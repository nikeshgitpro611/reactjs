import * as React from "react";
import { contactData } from "../data";
import { formatDate } from "./Table";
import { Box, gridClasses } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@mui/material/styles";

const columns = (them) => [
  {
    field: "name",
    headerName: "Name",
    minWidth: 170,
    align: "left",
    renderCell: (params) => {
      return (
        <div
          style={{
            fontFamily: them.typography.body1.body1,
            backgroundColor: them.palette.info.main,
          }}
        >
          {params.value}
        </div>
      );
    },
  },
  {
    field: "Location",
    headerName: "Location",
    minWidth: 170,
    align: "left",
    renderCell: (params) => params.value,
  },
  {
    field: "Vechile",
    headerName: "Vechile",
    minWidth: 170,
    align: "left",
    // Assuming skills is an array
    renderCell: (params) => {
      return (
        <div style={{ color: them.palette.primary.main }}>
          {params.value}
        </div>
      );
    },
  },
  {
    field: "startDate",
    headerName: "Date",
    minWidth: 170,
    align: "left",
    renderCell: (params) => formatDate(params.value),
  },
  {
    field: "preference",
    headerName: "Preference",
    minWidth: 170,
    align: "left",
    valueFormatter: (params) => params.value,
  }
];

export default function ColumnGroupingTable() {
  const rows = () => [...contactData];
  const them = useTheme();
  console.log("Them : ", them);

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows()}
        columns={columns(them)}
        // columnHeaderHeight={10}
        rowHeight={80}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
      />
    </Box>
  );
}
