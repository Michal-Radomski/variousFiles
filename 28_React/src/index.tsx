import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./CounterRedux";
import { ReactHooksProvider } from "./CounterReactHooks";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactHooksProvider>
        <App />
      </ReactHooksProvider>
    </Provider>
  </React.StrictMode>
);
