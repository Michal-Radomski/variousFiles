"use client";

import React from "react";

import "./App.scss";
import { cacheExamples } from "./libs/cache";
import ReactUse from "./ReactUse";

const App = (): JSX.Element => {
  React.useEffect(() => {
    cacheExamples();
  }, []);

  return (
    <React.Fragment>
      App
      <ReactUse />
    </React.Fragment>
  );
};

export default App;
