import React from "react";
import Plot from "react-plotly.js";

const Plotly3D = (): JSX.Element => {
  // Example surface data for z values
  const zData = [
    [8, 10, 15, 12, 8],
    [9, 11, 18, 13, 6],
    [10, 12, 20, 15, 9],
    [9, 14, 17, 16, 10],
    [8, 13, 15, 11, 8],
  ];

  return (
    <React.Fragment>
      <Plot
        data={[
          {
            z: zData,
            x: [0, 1, 2, 3, 4], // x-axis coordinates corresponding to columns of z
            y: [0, 1, 2, 3, 4], // y-axis coordinates corresponding to rows of z
            type: "surface",
            colorscale: "Viridis",
          },
        ]}
        layout={{
          title: { text: "3D Surface Plot Example" },
          autosize: true,
          width: 600,
          height: 600,
          margin: { l: 40, r: 40, b: 40, t: 40 },
        }}
      />
    </React.Fragment>
  );
};

export default Plotly3D;
