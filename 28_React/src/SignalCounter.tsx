import React from "react";
import { Signal, signal } from "@preact/signals-react";

// Create a signal for the counter
const count: Signal<number> = signal(0);

const CounterCounter: React.FC = (): JSX.Element => {
  // Increment function to update the signal's value
  const increment = (): void => {
    count.value++;
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const SignalCounterWrapper: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>Signal Example</h1>
      <CounterCounter />
    </div>
  );
};

export default SignalCounterWrapper;
