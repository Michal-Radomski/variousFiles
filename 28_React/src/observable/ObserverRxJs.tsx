import React from "react";
import { interval, Subscriber, Subscription, Observable } from "rxjs";

//* Observable with TS
// Create an Observable that emits a value every second
const numberObservable: Observable<unknown> = new Observable((observer: Subscriber<unknown>) => {
  let count = 0;
  const intervalId = setInterval(() => {
    observer.next(count++); // Emit the current count
  }, 1000);

  // Cleanup function called on unsubscribe
  return () => {
    clearInterval(intervalId);
  };
});

// Subscribe to the Observable to receive values
const subscription: Subscription = numberObservable.subscribe({
  next: (value) => console.log("Received value:", value),
  error: (err) => console.error("Error:", err),
  complete: () => console.log("Completed"),
});

// To stop receiving values after 5 seconds
setTimeout(() => {
  subscription.unsubscribe();
  console.log("Unsubscribed");
}, 5000);

const ObserverRxJs = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    // Create an Observable that emits a number every second
    const subscription: Subscription = interval(1000).subscribe(setCount);

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return <div>Count: {count}</div>;
};

export default ObserverRxJs;
