import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";

export const toolkitStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
