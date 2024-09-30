import React from "react";

import DataDisplayFunctional from "./DataDisplayFunctional";
import DataDisplayClass from "./DataDisplayClass";

const ComponentsWrapper = (): JSX.Element => {
  const url: string = "https://jsonplaceholder.typicode.com/users";

  return (
    <React.Fragment>
      <DataDisplayFunctional url={url} />
      <DataDisplayClass url={url} />
    </React.Fragment>
  );
};

export default ComponentsWrapper;
