import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { List, ListItem, ListItemText } from "@mui/material";

const Ratings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [driverRatings, setDriverRatings] = useState([
    { id: 1, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 4 },
    { id: 2, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 3 },
    { id: 3, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 4 },
    { id: 4, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 3 },
    { id: 5, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 5 },
    { id: 6, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 3 },
    { id: 7, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 3 },
    { id: 8, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 5 },
    { id: 9, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 4 },
    { id: 10, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 2 },
    { id: 11, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 4 },
    { id: 12, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 3 },
    { id: 13, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 4 },
    { id: 14, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 3 },
    { id: 15, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 5 },
    { id: 16, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 3 },
    { id: 17, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 3 },
    { id: 18, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 5 },
    { id: 19, vehicleId: "FI-123512", name: "Jon Snow", phone: "123-456-7890", rating: 4 },
    { id: 20, vehicleId: "FI-123512", name: "Cersei Lannister", phone: "987-654-3210", rating: 2 },
    // Add more driver ratings as needed
  ]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "vehicleId", headerName: "Vehicle ID" },
    { field: "name", headerName: "Driver Name", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "rating", headerName: "Rating", flex: 1, renderCell: (params) => <Rating value={params.value} readOnly /> },
  ];

  return (
    <Box m="20px">
      <Header title="Driver Ratings" subtitle="View customer feedback and ratings for improvement" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={driverRatings}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Ratings;
