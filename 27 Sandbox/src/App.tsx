import React from "react";

import "./App.scss";
import CodeMirrorSandbox from "./CodeMirrorSandbox";
import MonacoEditor from "./MonacoEditor";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      Sandbox React App
      <CodeMirrorSandbox />
      <MonacoEditor />
    </React.Fragment>
  );
};

export default App;
