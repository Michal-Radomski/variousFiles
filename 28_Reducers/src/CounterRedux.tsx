import React from "react";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { thunk as reduxThunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

// Reducer
const initialState = { count: 0 };

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Store creation
export const store = createStore(counterReducer, initialState, composeWithDevTools(applyMiddleware(reduxThunk)));

// Component
const CounterRedux = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>
        <h1>Counter Redux</h1>
        <p>Current count: {count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    </React.Fragment>
  );
};

export default CounterRedux;
