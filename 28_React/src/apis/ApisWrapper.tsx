import React from "react";

import ReactMemo from "./ReactMemo";
import ReactTransition from "./ReactTransition";

const ApisWrapper = (): JSX.Element => {
  return (
    <React.Fragment>
      <ReactMemo />
      <ReactTransition />
    </React.Fragment>
  );
};

export default ApisWrapper;
