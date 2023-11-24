import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";

function OrderComparison() {
  // Sample data (replace with your order data)
  const orderData = [
    { date: "2023-01-01T00:00:00Z", orders: 10, totalValue: 1000 },
    { date: "2023-01-01T01:00:00Z", orders: 15, totalValue: 1500 },
    // Add more data points
  ];

  // State for selected time range and comparison result
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [comparisonResult, setComparisonResult] = useState({
    orders: 0,
    totalValue: 0,
  });

  // Function to compare data within the selected time range
  const compareData = () => {
    if (!startTime || !endTime) {
      // Handle cases where the start or end time is not selected
      return;
    }

    const filteredData = orderData.filter(
      (entry) => entry.date >= startTime && entry.date <= endTime
    );

    const totalOrders = filteredData.reduce(
      (total, entry) => total + entry.orders,
      0
    );

    const totalValue = filteredData.reduce(
      (total, entry) => total + entry.totalValue,
      0
    );

    setComparisonResult({
      orders: totalOrders,
      totalValue: totalValue,
    });
  };

  useEffect(() => {
    compareData();
  }, [startTime, endTime]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Order Data Comparison</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="datetime-local"
          label="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="datetime-local"
          label="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={compareData}>
          Compare
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Comparison Result</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Box
            sx={{
              border: "1px solid gray",
              borderRadius: "15px",
              display: "flex",
            }}
          >
            <Box sx={{ width: "70%" }}>
              <Typography variant="h4">Number of Orders: </Typography>
            </Box>
            <Box
              sx={{
                ml: "5px",
                backgroundColor: "lightblue",
                width: "30%",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">{comparisonResult.orders}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid gray",
              borderRadius: "15px",
              display: "flex",
            }}
          >
            <Box sx={{ width: "70%" }}>
              <Typography variant="h4">Total Value (Rupees): </Typography>
            </Box>
            <Box
              sx={{
                ml: "5px",
                backgroundColor: "lightblue",
                width: "30%",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">
                {comparisonResult.totalValue}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default OrderComparison;
