import React from "react";
import { Provider } from "react-redux";

import Counter from "./Counter";
import { toolkitStore } from "./store";

const ReduxToolkitWrapper = (): JSX.Element => {
  return (
    <React.Fragment>
      <Provider store={toolkitStore}>
        <Counter />
      </Provider>
    </React.Fragment>
  );
};

export default ReduxToolkitWrapper;
