import React from "react";

import Canvas from "./Canvas";

const CanvasSvgWrapper: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h1>My Canvas App</h1>
        <Canvas width={200} height={100} color={"blue"} />
      </div>
    </React.Fragment>
  );
};

export default CanvasSvgWrapper;
