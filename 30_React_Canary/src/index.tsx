import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ThemeContextComponent from "./components/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeContextComponent>
      <App />
    </ThemeContextComponent>
  </React.StrictMode>
);
