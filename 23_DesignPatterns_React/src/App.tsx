import React from "react";

import "./App.scss";
import FactoryPattern from "./FactoryPattern";
import DecoratorPattern from "./DecoratorPattern";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <FactoryPattern />
      <br />
      <br />
      <br />
      <DecoratorPattern />
    </React.Fragment>
  );
};

export default App;
