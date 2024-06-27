import React from "react";

import "./App.scss";
// import CodeMirrorPlayground from "./CodeMirrorPlayground";
import MonacoEditor from "./MonacoEditor";
import CodeMirrorPlayground2 from "./CodeMirrorPlayground2";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      Playground React App
      <CodeMirrorPlayground2 />
      {/* <CodeMirrorPlayground /> */}
      <MonacoEditor />
    </React.Fragment>
  );
};

export default App;
