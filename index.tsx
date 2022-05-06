// +One file React App in TS

// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

//* Install: npm install --save-dev @types/webpack-env
if (module.hot) {
  module.hot.accept();
}

// Create a React Component
const App = (): JSX.Element => {
  return <div>Hi there!</div>;
};

// Take the React Component and show it on the show
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
