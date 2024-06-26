import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { initialCode } from "./initialCode";
// import { loadLanguage, langNames, langs } from "@uiw/codemirror-extensions-langs";

// loadLanguage("tsx");
// langs.tsx();
// console.log("langNames:", langNames);

const CodeMirrorSandbox = (): JSX.Element => {
  const [value, setValue] = React.useState(initialCode);

  const onChange = React.useCallback((val: React.SetStateAction<string>, _viewUpdate: object) => {
    // console.log("val:", val);
    // console.log("_viewUpdate:", _viewUpdate);
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      height="600px"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      basicSetup={{
        foldGutter: false,
        dropCursor: false,
        allowMultipleSelections: false,
        indentOnInput: false,
      }}
    />
  );
};

export default CodeMirrorSandbox;
