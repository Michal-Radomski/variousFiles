import React from "react";

// Reducer
const counterReducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Context creation
const CounterContext = React.createContext({} as RootState);

// Provider component
export const ReactHooksProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });

  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
};

// Component
const CounterReactHooks = (): JSX.Element => {
  const { state, dispatch } = React.useContext(CounterContext);

  return (
    <React.Fragment>
      <div>
        <h1>Counter React Hooks</h1>
        <p>Current count: {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    </React.Fragment>
  );
};

export default CounterReactHooks;
