import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function TimeSeriesChart() {
  // Sample data (replace with your order data)
  //   const data = [
  //     { date: "2023-01-01", orders: 10, totalValue: 1000 },
  //     // Add more data points
  //   ];
  const data = [
    { date: "2023-01-01T00:00:00Z", orders: 10, totalValue: 1000 },
    { date: "2023-01-01T01:00:00Z", orders: 590, totalValue: 1500 },
    // Add more data points
  ];

  const [selectedCharts, setSelectedCharts] = useState({
    orders: true,
    totalValue: true,
  });

  const toggleChart = (chartType) => {
    setSelectedCharts((prevSelectedCharts) => ({
      ...prevSelectedCharts,
      [chartType]: !prevSelectedCharts[chartType],
    }));
  };

  return (
    <div>
      <h2>Time Series Charts of Order Data</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCharts.orders}
            onChange={() => toggleChart("orders")}
          />
          Number of Orders
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedCharts.totalValue}
            onChange={() => toggleChart("totalValue")}
          />
          Total Value of Orders (Rupees)
        </label>
      </div>
      <ResponsiveContainer width="90%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          {selectedCharts.orders && (
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#8884d8"
              name="Number of Orders"
            />
          )}
          {selectedCharts.totalValue && (
            <Line
              type="monotone"
              dataKey="totalValue"
              stroke="#82ca9d"
              name="Total Value (Rupees)"
            />
          )}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="90%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          {selectedCharts.orders && (
            <Bar dataKey="orders" fill="#8884d8" name="Number of Orders" />
          )}
          {selectedCharts.totalValue && (
            <Bar
              dataKey="totalValue"
              fill="#82ca9d"
              name="Total Value (Rupees)"
            />
          )}
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TimeSeriesChart;
