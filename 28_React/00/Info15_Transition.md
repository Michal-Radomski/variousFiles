Todo: Errors!

Here are examples of using `useTransition` and `startTransition` in a React application with TypeScript:

---

### **Using `useTransition`**

The `useTransition` hook is used to mark a state update as a low-priority transition, allowing React to keep the UI
responsive while processing the update in the background.

```tsx
import React, { useState, useTransition } from 'react';

const TaskListApp: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [screen, setScreen] = useState('tasks');

  const selectScreen = (nextScreen: 'tasks' | 'completed') => {
    startTransition(() => {
      setScreen(nextScreen);
    });
  };

  return (

      My Task List App
      {isPending && Loading...}
      {screen === 'tasks' && (

          Task 1: Complete React App
          Task 2: Learn Hooks

      )}
      {screen === 'completed' && (

          Completed Tasks:
          Task 1: Complete React App

      )}
       selectScreen('tasks')}>View Tasks
       selectScreen('completed')}>View Completed

  );
};

export default TaskListApp;
```

In this example:

- The `isPending` flag indicates whether the transition is still in progress.
- The `startTransition` function wraps the state update (`setScreen`) to mark it as a low-priority transition.

---

### **Using `startTransition`**

The `startTransition` function can be imported directly and used without `useTransition`. This is useful for marking specific
updates as transitions.

```tsx
import React, { useState, startTransition } from 'react';

const TabContainer: React.FC = () => {
  const [tab, setTab] = useState('home');

  const selectTab = (nextTab: 'home' | 'products' | 'contact') => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <>
       selectTab('home')}>Home
       selectTab('products')}>Products
       selectTab('contact')}>Contact


      {tab === 'home' && Welcome to Home!}
      {tab === 'products' && Our Products}
      {tab === 'contact' && Contact Us}

  );
};

export default TabContainer;
```

In this example:

- `startTransition` ensures that switching tabs (`setTab`) happens in the background without blocking other UI updates.

---

### **Key Differences Between `useTransition` and `startTransition`**

| Feature                | `useTransition`                               | `startTransition`                         |
| ---------------------- | --------------------------------------------- | ----------------------------------------- |
| Return Values          | Provides `[isPending, startTransition]`.      | No return values; directly marks updates. |
| Usage Context          | Typically used inside functional components.  | Can be used anywhere in your code.        |
| Pending State Handling | Includes an `isPending` flag for UI feedback. | No built-in pending state management.     |

Both are useful for improving performance by marking non-urgent updates as low-priority transitions.

Citations: [1] https://www.tutorialspoint.com/reactjs/reactjs_usetransition_hook.htm [2]
https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue [3]
https://www.react-spring.dev/docs/components/use-transition [4] https://www.youtube.com/watch?v=-tPSsQ2cDdc [5]
https://react.dev/reference/react/useTransition [6] https://www.youtube.com/watch?v=E4Eta9wh0hQ [7]
https://react.dev/reference/react/startTransition [8]
https://hackernoon.com/how-to-enhance-react-apps-with-usetransition-hook
