import React from "react";
import Plot from "react-plotly.js";

const PlotlySurface3D = (): JSX.Element => {
  // Define the function z = f(x,y)
  const f = (x: number, y: number): number => Math.sin(Math.sqrt(x * x + y * y));

  // Create x and y values as grids
  const xValues: number[] = [];
  const yValues: number[] = [];
  const zValues: number[][] = [];

  for (let i = -15; i <= 15; i += 0.25) {
    xValues.push(i);
    yValues.push(i);
  }

  for (let y of yValues) {
    const zRow: number[] = [];
    for (let x of xValues) {
      zRow.push(f(x, y));
    }
    zValues.push(zRow);
  }

  return (
    <React.Fragment>
      <Plot
        data={[
          {
            z: zValues,
            x: xValues,
            y: yValues,
            type: "surface",
          },
        ]}
        layout={{
          title: { text: "3D Surface Plot z = f(x,y)" },
          autosize: true,
          width: 700,
          height: 700,
          margin: {
            l: 65,
            r: 50,
            b: 65,
            t: 90,
          },
        }}
      />
    </React.Fragment>
  );
};

export default PlotlySurface3D;
