import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBarChart(props) {
  // const { new , data } = props;
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
      series={
        props?.new
          ? [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]
          : [{ data: [8, 9, 4] }, { data: [7, 8, 6] }, { data: [5, 6, 8] }]
      }
      width={500}
      height={300}
    />
  );
}
