import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataReporting } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Reporting = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



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
      field: "distance",
      headerName: "Distance",
      flex: 1,
    },
    {
      field: "total_score",
      headerName: "Total Score",
      flex: 1,
    },
    {
      field: "scoring_classification",
      headerName: "Scoring Classification",
      flex: 1,
    },
    {
      field: "speeding",
      headerName: "Speeding",
      flex: 1,
    },
    {
      field: "hard_acceleration",
      headerName: "Hard Acceleration",
      flex: 1,
    },
    {
      field: "harsh_cornering",
      headerName: "Harsh Cornering",
      flex: 1,
    },
    {
      field: "seatbelt",
      headerName: "Seatbelt",
      flex: 1,
    },
    {
        field: "engine_abuse",
        headerName: "Engine Abuse",
        flex: 1,
      },
  ];

 
  
  return (
    <Box m="20px">
      <Header title="Reporting Access" subtitle="Access to reports on their trips, deviations, and performance" />
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
          rows={mockDataReporting}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Reporting;
