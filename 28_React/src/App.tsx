import React from "react";

import "./App.scss";
import CounterRedux from "./CounterRedux";
import CounterReactHooks from "./CounterReactHooks";
import CombineStyles from "./CombineStyles";
import WindowDimensions from "./dimensions/WindowDimensions";
import MeasureComponent from "./MeasureComponent";
import ParentPropsComponent from "./props/ParentPropsComponent";
import { DefaultProps2 } from "./props/DefaultProps";
import ForwardRef from "./ForwardRef";
import LoginForm from "./customHook/LoginForm";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>React App: useReducer/useContext vs Redux + other exercises</h1>
      <br></br>

      <CounterRedux />
      <br></br>
      <hr />

      <CounterReactHooks />
      <br />
      <br />
      <hr />

      <CombineStyles />
      <br />
      <br />
      <hr />

      <WindowDimensions />
      <br />
      <br />
      <hr />

      <MeasureComponent />
      <br />
      <br />
      <hr />

      <ParentPropsComponent />
      <br />
      <br />
      <hr />

      <DefaultProps2 />
      {/* <DefaultProps /> */}
      <br />
      <br />
      <hr />

      <ForwardRef />
      <br />
      <br />
      <hr />

      <LoginForm />
      <br />
      <br />
      <hr />
    </React.Fragment>
  );
};

export default App;
