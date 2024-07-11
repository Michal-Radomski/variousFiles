import React from "react";

import "./App.scss";
import CounterRedux from "./CounterRedux";
import CounterReactHooks from "./CounterReactHooks";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>React App: useReducer/useContext vs Redux</h1>
      <br></br>
      <CounterRedux />
      <br></br>
      <CounterReactHooks />
    </React.Fragment>
  );
};

export default App;
