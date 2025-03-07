import React from "react";

import ComponentHOC from "./ComponentHOC";
import CompoundComponent from "./CompoundComponent";

const PatternsWrapper = (): JSX.Element => {
  return (
    <React.Fragment>
      <ComponentHOC />
      <CompoundComponent />
    </React.Fragment>
  );
};

export default PatternsWrapper;
