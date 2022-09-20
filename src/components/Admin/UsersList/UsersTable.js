import * as React from "react";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "phoneNumber", headerName: "Phone Number", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "role", headerName: "Role", width: 80 },
  {
    field: "points",
    headerName: "Points",
    type: "number",
    width: 80,
  },
];

export default function DataTable({ data }) {
  return (
    <>
      <Typography sx={{ mb: 2 }} variant="h6" component="div">
        Users Information
      </Typography>

      <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
