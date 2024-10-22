"use client";

import React from "react";

import "./App.scss";
import { cacheExamples } from "./libs/cache";

const App = (): JSX.Element => {
  React.useEffect(() => {
    cacheExamples();
  }, []);

  return <React.Fragment>App</React.Fragment>;
};

export default App;
