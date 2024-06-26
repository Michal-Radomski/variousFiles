import React from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

import { initialCode } from "./initialCode";

const MonacoEditor = (): JSX.Element => {
  const [editor, setEditor] = React.useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = React.useRef(null);

  React.useEffect(() => {
    if (monacoEl) {
      setEditor((editor) => {
        if (editor) return editor;

        monaco.editor.defineTheme("myTheme", {
          base: "vs",
          inherit: true,
          rules: [],
          colors: {
            "editor.foreground": "#000000",
            "editor.background": "#EDF9FA",
            "editorCursor.foreground": "#8B0000",
            "editor.lineHighlightBackground": "#0000FF20",
            "editorLineNumber.foreground": "#008800",
            "editor.selectionBackground": "#88000030",
            "editor.inactiveSelectionBackground": "#88000015",
          },
        });
        monaco.editor.setTheme("myTheme");

        return monaco.editor.create(monacoEl.current!, {
          value: [initialCode].join("\n"),
          language: "javascript",
        });
      });
    }

    return () => editor?.dispose();
  }, [editor]);

  return <div style={{ width: "100%", height: "500px" }} ref={monacoEl}></div>;
};

export default MonacoEditor;
