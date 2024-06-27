import React from "react";
import CodeMirror from "@uiw/react-codemirror";
// import * as Babel from "@babel/standalone";
import { transform } from "@babel/standalone";

import { javascript } from "@codemirror/lang-javascript";

import { initialCode } from "./initialCode";

const CodeMirrorPlayground2 = (): JSX.Element => {
  const [code, setCode] = React.useState<string>(initialCode);
  const [output, setOutput] = React.useState<string>("");

  const handleRun = (): void => {
    const originalConsoleLog = console.log;
    let logOutput = "";

    console.log = (message: string) => {
      logOutput += `${message}\n`;
    };

    try {
      // const compiledCode = Babel.transform(code, { presets: ["env", "es2016", "react"] }).code as string;
      const compiledCode = transform(code, { presets: ["env", "es2016", "react"] }).code as string;
      // console.log("compiledCode:", compiledCode);
      // eslint-disable-next-line no-eval
      eval(compiledCode); // Be cautious with eval in production
    } catch (error) {
      logOutput += (error as Error).message;
    }

    console.log = originalConsoleLog;
    setOutput(logOutput);
  };

  const onChange = React.useCallback((val: React.SetStateAction<string>, _viewUpdate: object) => {
    setCode(val);
  }, []);

  return (
    <div>
      <CodeMirror
        value={code}
        height="600px"
        extensions={[javascript({ jsx: true })]}
        basicSetup={{
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
        }}
        onChange={onChange}
      />
      <button onClick={handleRun}>Run</button>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeMirrorPlayground2;
