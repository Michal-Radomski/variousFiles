import React from "react";

import "./App.scss";
import CounterRedux from "./CounterRedux";
import CounterReactHooks from "./CounterReactHooks";
import CombineStyles from "./CombineStyles";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>React App: useReducer/useContext vs Redux + other exercises</h1>
      <br></br>
      <CounterRedux />
      <br></br>
      <CounterReactHooks />

      <br />
      <br />
      <CombineStyles />
    </React.Fragment>
  );
};

export default App;