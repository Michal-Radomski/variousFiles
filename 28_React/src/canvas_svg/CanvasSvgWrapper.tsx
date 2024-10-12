import React from "react";

import Canvas from "./Canvas";
import SvgComponent from "./SvgComponent";

const CanvasSvgWrapper: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h1>Canvas Component</h1>
        <Canvas width={200} height={100} color={"blue"} />

        <h1>SVG Component</h1>
        <SvgComponent color_1={"green"} color_2={"yellow"} />
      </div>
    </React.Fragment>
  );
};

export default CanvasSvgWrapper;
