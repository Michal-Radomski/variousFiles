import React from "react";

import useWindowDimensions from "./useWindowDimensions";

const WindowDimensions = (): JSX.Element => {
  const { width, height } = useWindowDimensions();

  return (
    <React.Fragment>
      <div style={{ width: "100%", backgroundColor: width > 768 ? "blue" : "green" }}>
        <p>
          The current window width is: {width}px and {height}px
        </p>
      </div>
    </React.Fragment>
  );
};

export default WindowDimensions;
