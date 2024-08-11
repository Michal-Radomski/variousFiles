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
import CreateElement from "./CreateElement";
import PrevState from "./PrevState";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>React App: useReducer/useContext vs Redux + other exercises</h1>
      <br />
      <hr />

      <CounterRedux />
      <br />
      <hr />

      <CounterReactHooks />
      <br />
      <hr />

      <CombineStyles />
      <br />
      <hr />

      <WindowDimensions />
      <br />
      <hr />

      <MeasureComponent />
      <br />
      <hr />

      <ParentPropsComponent />
      <br />
      <hr />

      <DefaultProps2 />
      {/* <DefaultProps /> */}
      <br />
      <hr />

      <ForwardRef />
      <br />
      <hr />

      <LoginForm />
      <br />
      <hr />

      <CreateElement />
      <br />
      <hr />

      <PrevState />
      <br />
      <hr />
    </React.Fragment>
  );
};

export default App;
