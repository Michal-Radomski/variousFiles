//* 3. Behavioral Patterns
// Behavioral patterns deal with communication between objects. One commonly used behavioral pattern in React is the Observer Pattern (often implemented with hooks like useEffect and useState).
// Example: Observer Pattern
// The Observer Pattern can be used to react to state changes.

import React from "react";

// Observable component
const Timer = ({ onTick }: { onTick: Function }): null => {
  React.useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
      onTick(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, [onTick]);

  return null;
};

// Observer component
const ObserverPattern = (): JSX.Element => {
  const [time, setTime] = React.useState<string>(new Date().toLocaleTimeString());

  return (
    <React.Fragment>
      <div>
        <h1>Current Time: {time}</h1>
        <Timer onTick={setTime} />
      </div>
    </React.Fragment>
  );
};

export default ObserverPattern;
