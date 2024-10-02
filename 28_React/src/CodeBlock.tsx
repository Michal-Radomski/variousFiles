import React from "react";
import Prism from "prismjs"; // Import Prism for syntax highlighting
// import "prismjs/themes/prism.css"; // Import Prism CSS for styling
// import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-coy.css";
import "prismjs/themes/prism-twilight.css";
import "prismjs/components/prism-typescript";

const CodeBlockComponent = ({ language, codeString }: { language: string; codeString: string }): JSX.Element => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <React.Fragment>
      <div className="Code">
        <pre>
          <code className={`language-${language}`}>{codeString}</code>
        </pre>
      </div>
    </React.Fragment>
  );
};

const CodeBlock = (): JSX.Element => {
  const codeString = `function helloWorld() {
  console.log("Hello, world!");
}`;

  const code: string = `const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h1> React App </h1>
        <div>Awesome code</div>
      </div>
    </React.Fragment>
  );
};
`;

  return (
    <div>
      <h1>Code Snippet Example</h1>
      <CodeBlockComponent language="javascript" codeString={codeString} />
      <CodeBlockComponent language="typescript" codeString={code} />
    </div>
  );
};

export default CodeBlock;
