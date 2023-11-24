import { useState } from "react";
import "./App.css";
import AppBar from "./AppBar";
import HomeScreen from "./HomeScreen";
import Dashboard from "./Dashboard";
import { Box, Container } from "@mui/material";

function App() {
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      <Box>
        <AppBar
          showHomeScreen={showHomeScreen}
          setShowHomeScreen={setShowHomeScreen}
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
        />
        {showHomeScreen && !showDashboard && <HomeScreen />}
        {!showHomeScreen && showDashboard && <Dashboard />}
      </Box>
    </>
  );
}

export default App;
