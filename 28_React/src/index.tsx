import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./CounterRedux";
import { ReactHooksProvider } from "./CounterReactHooks";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactHooksProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ReactHooksProvider>
    </Provider>
  </React.StrictMode>
);
