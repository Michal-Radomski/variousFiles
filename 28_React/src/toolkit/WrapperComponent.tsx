import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import Users from "./Users";

const WrapperComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Users />
      </Provider>
    </React.Fragment>
  );
};

export default WrapperComponent;
