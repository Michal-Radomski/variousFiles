import React from "react";

const CreateElement = (): JSX.Element => {
  const createdElem = React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", { style: { color: "blue" } }, "Hello, World!"),
    React.createElement("p", null, "This is an example using React.createElement.")
  );

  return <React.Fragment>{createdElem}</React.Fragment>;
};

export default CreateElement;
