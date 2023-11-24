import React from "react";
import BasicBarChart from "./BasicBarChart";
import { Box } from "@mui/material";

export default function BarChartComponent() {
  const data = [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }];
  const newData = [
    { data: [8, 9, 4] },
    { data: [7, 8, 6] },
    { data: [5, 6, 8] },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <BasicBarChart data={data} new={true} />
      <BasicBarChart data={newData} new={false} />
    </Box>
  );
}

// import React, { useState } from "react";
// import BasicBarChart from "./BasicBarChart";
// import { Box, Paper } from "@mui/material";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = "BOX";
// export default function BarChartComponent() {
//   const data = [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }];
//   const newData = [
//     { data: [8, 9, 4] },
//     { data: [7, 8, 6] },
//     { data: [5, 6, 8] },
//   ];

//   const [boxes, setBoxes] = useState([
//     { id: 5, text: "Box 5", comp: <BasicBarChart data={data} new={true} /> },
//     {
//       id: 6,
//       text: "Box 6",
//       comp: <BasicBarChart data={newData} new={false} />,
//     },
//   ]);

//   const moveBox = (dragIndex, hoverIndex) => {
//     const draggedBox = boxes[dragIndex];
//     const updatedBoxes = [...boxes];
//     updatedBoxes.splice(dragIndex, 1);
//     updatedBoxes.splice(hoverIndex, 0, draggedBox);
//     setBoxes(updatedBoxes);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         {boxes.map((box, index) => (
//           <BoxItem
//             key={box.id}
//             index={index}
//             id={box.id}
//             comp={box?.comp}
//             moveBox={moveBox}
//           />
//         ))}
//       </div>
//     </DndProvider>
//   );
// }

// const boxStyles = {
//   width: "100%",
//   height: "100%",
//   // backgroundColor: "lightblue",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   margin: "4px",
//   cursor: "grab",
// };

// const paperStyles = {
//   padding: "4px",
//   textAlign: "center",
//   width: "100%",
// };

// const BoxItem = ({ id, comp, index, moveBox }) => {
//   const [, ref] = useDrag({
//     type: ItemType,
//     item: { id, index },
//   });

//   const [, drop] = useDrop({
//     accept: ItemType,
//     hover: (draggedItem) => {
//       if (draggedItem.index !== index) {
//         moveBox(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   return (
//     <div ref={(node) => ref(drop(node))} style={boxStyles}>
//       <Paper elevation={3} sx={paperStyles}>
//         {comp}
//       </Paper>
//     </div>
//   );
// };
