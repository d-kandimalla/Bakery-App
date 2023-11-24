import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";

function AppBar(props) {
  const { showHomeScreen, setShowHomeScreen, showDashboard, setShowDashboard } =
    props;
  return (
    <Paper
      sx={{
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        // m: 1,
        p: 1,
      }}
    >
      <Typography variant="h5">Bakery Sales Dashboard</Typography>
      <Box sx={{ ml: "auto" }}>
        <Button
          variant={showHomeScreen && !showDashboard ? "contained" : "outlined"}
          onClick={() => {
            setShowDashboard(false);
            setShowHomeScreen(true);
          }}
          sx={{ mr: "5px", textTransform: "none" }}
        >
          Home
        </Button>
        <Button
          variant={!showHomeScreen && showDashboard ? "contained" : "outlined"}
          onClick={() => {
            setShowDashboard(true);
            setShowHomeScreen(false);
          }}
          sx={{ textTransform: "none" }}
        >
          Dashboard
        </Button>
      </Box>
    </Paper>
  );
}

export default AppBar;
