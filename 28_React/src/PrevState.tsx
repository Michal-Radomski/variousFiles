import React from "react";

const PrevState = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0); // Initialize count to 0

  const handleIncrement = (): void => {
    setCount((prevCount: number) => prevCount + 1); // Update state based on previous state
  };

  const handleDecrement = (): void => {
    setCount((prevCount: number) => prevCount - 1); // Update state based on previous state
  };

  return (
    <React.Fragment>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </React.Fragment>
  );
};

export default PrevState;
