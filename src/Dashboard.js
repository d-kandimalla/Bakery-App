import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import BarChartComponent from "../src/BarChartComponent";
import { HTML5Backend } from "react-dnd-html5-backend";
import TimeSeriesChart from "./TimeSeriesChart";
import BranchBarsChart from "./BranchBarsChart";
import OrderComparison from "./OrderComparison";

const ItemType = "BOX";

function DraggableComponent() {
  const [boxes, setBoxes] = useState([
    { id: 1, text: "Box 1", comp: <TimeSeriesChart /> },
    { id: 2, text: "Box 2", comp: <BarChartComponent /> },
    { id: 3, text: "Box 3", comp: <BranchBarsChart /> },
    { id: 4, text: "Box 4", comp: <OrderComparison /> },
  ]);

  const moveBox = (dragIndex, hoverIndex) => {
    const draggedBox = boxes[dragIndex];
    const updatedBoxes = [...boxes];
    updatedBoxes.splice(dragIndex, 1);
    updatedBoxes.splice(hoverIndex, 0, draggedBox);
    setBoxes(updatedBoxes);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {boxes.map((box, index) => (
          <BoxItem
            key={box.id}
            index={index}
            id={box.id}
            comp={box?.comp}
            moveBox={moveBox}
          />
        ))}
      </div>
    </DndProvider>
  );
}

const boxStyles = {
  width: "100%",
  height: "100%",
  // backgroundColor: "lightblue",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "4px",
  cursor: "grab",
};

const paperStyles = {
  padding: "4px",
  textAlign: "center",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const paperStylesForTimeSeries = {
  padding: "4px",
  textAlign: "center",
  width: "100%",
  mx: "auto",
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
};

const BoxItem = ({ id, comp, index, moveBox }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveBox(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={boxStyles}>
      <Paper
        elevation={3}
        sx={id !== 1 ? paperStyles : paperStylesForTimeSeries}
      >
        {comp}
      </Paper>
    </div>
  );
};

export default DraggableComponent;
