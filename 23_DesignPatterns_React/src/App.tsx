import React from "react";

import "./App.scss";
import FactoryPattern from "./FactoryPattern";
import DecoratorPattern from "./DecoratorPattern";
import ObserverPattern from "./ObserverPattern";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <FactoryPattern />
      <br />
      <br />
      <br />
      <DecoratorPattern />
      <br />
      <br />
      <br />
      <ObserverPattern />
    </React.Fragment>
  );
};

export default App;
