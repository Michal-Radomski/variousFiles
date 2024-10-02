import React from "react";
import Prism from "prismjs"; // Import Prism for syntax highlighting
// import "prismjs/themes/prism.css"; // Import Prism CSS for styling
// import "prismjs/themes/prism-tomorrow.css";
import "prismjs/themes/prism-coy.css";

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

  const code: string = `const App = props => {
  return (
    <div>
      <h1> React App </h1>
      <div>Awesome code</div>
    </div>
  );
};
`;

  return (
    <div>
      <h1>Code Snippet Example</h1>
      <CodeBlockComponent language="typescript" codeString={codeString} />
      <CodeBlockComponent language="javascript" codeString={code} />
    </div>
  );
};

export default CodeBlock;
