import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTrips } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const BookingT = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Calculate Average Filling Rate for each trip
  const calculateAverageFillingRate = (trip) => {
    // Assuming package weight is in kg
    const packageWeight = parseFloat(trip.package.replace("kg", ""));
    const totalPackageWeight = mockDataTrips.reduce(
      (sum, trip) => sum + parseFloat(trip.package.replace("kg", "")),
      0
    );
    return packageWeight / totalPackageWeight;
  };


  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "VehicleId", headerName: "Vehicle ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "origin",
      headerName: "Origin",
      flex: 1,
    },
    {
      field: "destination",
      headerName: "Destination",
      flex: 1,
    },
    {
      field: "package",
      headerName: "Weight of packages (kg)",
      flex: 1,
    },
    {
      field: "averageFillingRate",
      headerName: "Avg Filling Rate",
      flex: 1,
    },
  ];

  // Add the averageFillingRate property to each trip in mockDataTrips
  const mockDataTripsWithAverageFillingRate = mockDataTrips.map((trip) => ({
    ...trip,
    averageFillingRate: calculateAverageFillingRate(trip),
  }));
  
  return (
    <Box m="20px">
      <Header title="Trips" subtitle="Manage Trips" />
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
          "& .name-column--cell": {
            color: colors.greenAccent[300],
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
          rows={mockDataTripsWithAverageFillingRate}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default BookingT;
