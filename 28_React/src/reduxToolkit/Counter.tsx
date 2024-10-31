import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementByAmount, reset } from "./counterSlice";

const Counter: React.FC = (): JSX.Element => {
  const count: number = useSelector((state: RootState) => state.counter.value);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Toolkit with TypeScript</h3>
      <h5>{`count: ${count}`}</h5>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
