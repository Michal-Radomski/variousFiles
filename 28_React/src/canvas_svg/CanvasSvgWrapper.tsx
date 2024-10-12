import React from "react";

import Canvas from "./Canvas";
import SvgComponent from "./SvgComponent";
import CanvasSVG from "./CanvasSVG";

const CanvasSvgWrapper: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h1>Canvas Component</h1>
        <Canvas width={200} height={100} color={"blue"} />

        <h1>SVG Component</h1>
        <SvgComponent color_1={"green"} color_2={"yellow"} />

        <h1>Canvas with SVG Example</h1>
        <CanvasSVG width={400} height={200} color_1={"blue"} color_2={"green"} />
      </div>
    </React.Fragment>
  );
};

export default CanvasSvgWrapper;
