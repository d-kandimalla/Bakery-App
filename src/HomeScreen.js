import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

function HomeScreen() {
  const colorList = ["Yellow", "Green", "Red"];
  const [currentColor, setCurrentColor] = useState("Red");

  useEffect(() => {
    setInterval(() => {
      setCurrentColor(
        colorList.indexOf(currentColor) + 1 === 3
          ? "Yellow"
          : colorList[colorList.indexOf(currentColor) + 1]
      );
    }, 5000);
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        border: "1px solid black",
        p: 1,
      }}
    >
      <Box
        sx={
          currentColor === "Red"
            ? {
                border: "1px solid gray",
                borderRadius: "25px",
                width: "20px",
                height: "20px",
                mr: 1,
                backgroundColor: "red",
              }
            : {
                border: "1px solid gray",
                borderRadius: "25px",
                width: "20px",
                height: "20px",
                mr: 1,
              }
        }
      ></Box>
      <Box
        sx={
          currentColor === "Yellow"
            ? {
                border: "1px solid gray",
                borderRadius: "25px",
                width: "20px",
                mr: 1,
                height: "20px",
                backgroundColor: "yellow",
              }
            : {
                border: "1px solid gray",
                borderRadius: "25px",
                width: "20px",
                height: "20px",
                mr: 1,
              }
        }
      ></Box>
      <Box
        sx={
          currentColor === "Green"
            ? {
                border: "1px solid gray",
                borderRadius: "25px",
                width: "20px",
                height: "20px",
                backgroundColor: "green",
              }
            : {
                border: "1px solid gray",
                borderRadius: "25px",
                width: "20px",
                height: "20px",
              }
        }
      ></Box>
    </Box>
  );
}

export default HomeScreen;
