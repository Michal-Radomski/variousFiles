import React from "react";

import "./App.scss";
import CodeMirrorPlayground from "./CodeMirrorPlayground";
import MonacoEditor from "./MonacoEditor";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      Playground React App
      <CodeMirrorPlayground />
      <MonacoEditor />
    </React.Fragment>
  );
};

export default App;
